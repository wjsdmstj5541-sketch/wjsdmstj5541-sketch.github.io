(function () {
  "use strict";

  const S = window.SITE, P = window.PROJECTS, F = window.FIELDS;
  const $ = (s, r = document) => r.querySelector(s);
  const q = new URLSearchParams(location.search);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n, w = 2) => String(n).padStart(w, "0");
  const paras = (arr) => arr.map((p) => `<p>${p}</p>`).join("");
  const ratioNum = (r) => { const [a, b] = String(r || "3/2").split("/").map(Number); return a / b; };
  const field = (k) => F[k] || { en: k, ko: "" };
  const cover = (p) => p.images[p.cover || 0];
  const projectUrl = (p) => `project.html?id=${encodeURIComponent(p.id)}`;

  function lum(hex) {
    const n = parseInt(String(hex).replace("#", ""), 16);
    return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  }

  // real photo when src is set, otherwise a toned placeholder of the same ratio
  function media(im, label = "") {
    if (im.src) {
      return `<div class="media"><img src="${esc(im.src)}" alt="${esc(im.alt || im.caption || "")}" loading="lazy"></div>`;
    }
    const tone = im.tone || "#b9b6af";
    const ratio = im.ratio || "3/2";
    return `<div class="media ph${lum(tone) < 0.5 ? " ph-dark" : ""}" style="aspect-ratio:${ratio};--tone:${tone}" role="img" aria-label="${esc(im.caption || "placeholder")}"><span>${esc(label)}${label ? " · " : ""}${ratio.replace("/", ":")}</span></div>`;
  }

  function header(active) {
    const items = [["index.html", "Index"], ["work.html", "Work"], ["notes.html", "Notes"], ["about.html", "About"]];
    const nav = items
      .map(([h, t]) => `<a href="${h}"${t === active ? ' class="is-active" aria-current="page"' : ""}>${t},</a>`)
      .join(" ");
    return `<header class="site-header grid" id="top">
      <a class="brand" href="index.html">${esc(S.name)} <span class="mute">${esc(S.nameKr)}</span></a>
      <nav class="primary" aria-label="Primary">${nav}</nav>
      <a class="cta" href="mailto:${esc(S.email)}">→ Contact</a>
    </header>`;
  }

  function footer() {
    return `<footer class="site-footer grid">
      <span>© ${S.year} ${esc(S.name)} / ${esc(S.realName)}</span>
      <a href="mailto:${esc(S.email)}">E-mail</a>
      <a href="${esc(S.instagram)}" target="_blank" rel="noopener">Instagram</a>
      <a href="#top">Top ↑</a>
    </footer>`;
  }

  // address-bar style path: seoharu / work / intro — every step but the last is a link
  const slug = (t) => String(t).toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-|-$/g, "");
  function crumbs(path) {
    const all = [["seoharu", "index.html"]].concat(path);
    return `<nav class="path" aria-label="현재 위치">` + all.map(([t, h], k) =>
      k === all.length - 1 ? `<span aria-current="page">${esc(t)}</span>` : `<a href="${h}">${esc(t)}</a>`
    ).join(`<span class="sep">/</span>`) + `</nav>`;
  }

  function mast({ path = [], title, kr, meta, desc, aside }) {
    const metaHtml = meta.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
    return `<section class="mast grid">
      <div class="mast-title">
        ${crumbs(path)}
        <h1>${title}</h1>${kr ? `<span class="kr">${kr}</span>` : ""}
      </div>
      <dl class="mast-meta">${metaHtml}</dl>
      ${desc && desc.length ? `<div class="mast-desc"><span class="label">Description</span>${paras(desc)}</div>` : ""}${aside || ""}
    </section>`;
  }

  function shell(active, inner) {
    $("#app").innerHTML = header(active) + `<main>${inner}</main>` + footer();
  }

  /* ---------------- Home ---------------- */
  function home() {
    $("#intro").innerHTML = paras(S.intro);

    const groups = [
      ["Work <span class=\"mute\">작업</span>", [["work.html", "Intro <span class=\"mute\">인트로</span>"]]
        .concat(Object.entries(F).map(([k, f]) => [`work.html?field=${k}`, `${f.en} <span class="mute">${f.ko}</span>`]))
        .concat([["work.html?view=list", "List <span class=\"mute\">목록</span>"]])],
      ["Notes <span class=\"mute\">작업 노트</span>", (window.NOTES.entries || []).slice(0, 4).map((e, k) => [`notes.html#note-${k + 1}`, esc(e.title)])],
      ["About <span class=\"mute\">소개</span>", [["about.html", "Profile"], [`mailto:${S.email}`, "E-mail"], [`tel:${S.phone}`, S.phone], [S.instagram, "Instagram"]]]
    ];
    $("#home-nav").innerHTML =
      groups.map(([h, links]) => `<div class="group"><div>${h}</div><ul>${links.map(([u, t]) => `<li><a href="${esc(u)}">${t}</a></li>`).join("")}</ul></div>`).join("") +
      `<div class="copy">© 2024–${S.year} ${esc(S.name)} / ${esc(S.realName)}<br>All rights reserved</div>`;

    $("#home-meta").innerHTML = `${esc(S.edition)}<br>${S.year} — ${esc(S.base)}`;

    // fixed photograph (SITE.homePhoto); falls back to a random featured one if unset
    const H = S.homePhoto;
    if (H && H.src) {
      $("#feature").innerHTML = `<a href="work.html">${media({ src: H.src, alt: H.caption || "" })}</a>` +
        (H.caption ? `<figcaption>${H.caption}</figcaption>` : "");
      return;
    }
    let pool = [];
    P.forEach((p) => p.images.forEach((im) => { if (im.featured) pool.push({ p, im }); }));
    if (!pool.length) pool = P.map((p) => ({ p, im: cover(p) }));
    const real = pool.filter((x) => x.im.src);   // prefer real photographs over placeholders
    if (real.length) pool = real;
    const { p, im } = pool[Math.floor(Math.random() * pool.length)];
    $("#feature").innerHTML = `<a href="${projectUrl(p)}">${media(im)}</a>
      <figcaption><span class="num">(${esc(p.id)})</span> ${esc(p.title)} <span class="mute">${esc(p.titleKr)}</span><br>
      <span class="mute">${esc(String(im.caption || "").replace(/[.。]\s*$/, ""))}, ${esc(p.location)}, ${p.year}</span></figcaption>`;
  }

  /* ---------------- Work ---------------- */
  function work() {
    const view = q.get("view") === "list" ? "list" : "grid";
    const f = F[q.get("field")] ? q.get("field") : "";
    const list = f ? P.filter((p) => p.field === f) : P;
    const url = (v, fk) => {
      const u = new URLSearchParams();
      if (v === "list") u.set("view", "list");
      if (fk) u.set("field", fk);
      const s = u.toString();
      return "work.html" + (s ? "?" + s : "");
    };
    const on = (b) => (b ? ' class="is-active"' : "");

    const viewOpts = `<span class="opts"><a href="${url("grid", f)}"${on(view === "grid")}>Grid</a>, <a href="${url("list", f)}"${on(view === "list")}>List</a></span>`;
    const fieldOpts = `<span class="opts">` +
      (view === "list" ? [] : [`<a href="${url(view, "")}"${on(!f)}>Intro</a>`])
        .concat(Object.entries(F).map(([k, v]) => `<a href="${url(view, k)}"${on(f === k)}>${v.en} (${P.filter((p) => p.field === k).length})</a>`))
        .join("<br>") + `</span>`;

    // no field + grid = Intro: a short introduction to my photographs
    const intro = view === "grid" && !f;
    const AI = S.allIntro || { title: "Intro", titleKr: "인트로", photos: [], text: [] };

    const head = mast({
      path: [["work", "work.html"], [view === "list" ? (f ? `list / ${f}` : "list") : f || "intro", ""]],
      title: intro ? esc(AI.title) : f ? field(f).en : "Selected Work",
      kr: intro ? esc(AI.titleKr) : f ? field(f).ko : "작업",
      meta: [["View", viewOpts], ["Field", fieldOpts]],
      desc: intro ? AI.text : S.workIntro
    });

    let body;
    if (intro) {
      const pics = (AI.photos || []).slice(0, 2).map((src) => `<figure>${media({ src })}</figure>`).join("");
      body = pics ? `<section class="intro-photos grid">${pics}</section>` : "";
    } else if (view === "grid") {
      const slots = [
        { c: "1 / 6", t: 0 }, { c: "8 / 13", t: 9 },
        { c: "3 / 8", t: 0 }, { c: "9 / 12", t: 5 },
        { c: "1 / 5", t: 4 }, { c: "6 / 12", t: 0 }
      ];
      body = `<section class="work-grid grid">` + list.map((p, i) => {
        const s = slots[i % slots.length];
        const fd = field(p.field);
        return `<a class="work-item" href="${projectUrl(p)}" style="grid-column:${s.c};margin-top:${s.t}vw">
          ${media(cover(p))}
          <div class="cap"><span class="num">(${esc(p.id)})</span><span>${esc(p.title)} <span class="mute">${esc(p.titleKr)}</span><br><span class="mute">${fd.en}, ${p.year}</span></span></div>
        </a>`;
      }).join("") + `</section>`;
    } else {
      body = `<section class="work-list">
        <div class="row head grid"><span>No.</span><span>Title</span><span>제목</span><span>Field</span><span>Location</span><span>Year</span></div>
        ${list.map((p) => `<a class="row grid" href="${projectUrl(p)}" data-id="${esc(p.id)}">
          <span class="num">${esc(p.id)}</span><span>${esc(p.title)}</span><span>${esc(p.titleKr)}</span>
          <span>${field(p.field).en}</span><span>${esc(p.location)}</span><span class="num">${p.year}</span></a>`).join("")}
      </section><div class="preview" id="preview" aria-hidden="true"></div>`;
    }

    shell("Work", head + body);

    if (view === "list") {
      const pv = $("#preview");
      document.querySelectorAll(".work-list a.row").forEach((row) => {
        row.addEventListener("mouseenter", () => {
          const p = P.find((x) => x.id === row.dataset.id);
          pv.innerHTML = media(cover(p));
          pv.classList.add("is-on");
        });
        row.addEventListener("mouseleave", () => pv.classList.remove("is-on"));
      });
    }
  }

  /* ---------------- Project ---------------- */
  function project() {
    let i = P.findIndex((p) => p.id === q.get("id"));
    if (i < 0) i = 0;
    const p = P[i], next = P[(i + 1) % P.length], fd = field(p.field);
    document.title = `${p.title} — ${S.name}`;

    const head = mast({
      path: [["work", "work.html"], [p.field, `work.html?field=${p.field}`], [slug(p.title), ""]],
      title: esc(p.title),
      kr: esc(p.titleKr),
      meta: [
        ["Field", `${fd.en} <span class="mute">${fd.ko}</span>`],
        ["Role", esc(p.role)],
        ["Publication", esc(p.publication)],
        ["Location", esc(p.location)],
        ["Date", esc(p.date || p.year)]
      ],
      desc: p.desc
    });

    const cap = (im, n) => `<figcaption><span class="num">${pad(n)}</span><span>${esc(im.caption)}${im.captionEn ? ` <span class="mute">${esc(im.captionEn)}</span>` : ""}</span></figcaption>`;
    const fig = (im, n, col, extra = "") =>
      `<figure style="grid-column:${col}"><button class="zoom" data-i="${n - 1}" aria-label="크게 보기 ${pad(n)}">${media(im, pad(n))}</button>${extra}${cap(im, n)}</figure>`;

    const [a, b, ...rest] = p.images;
    let plates = "";
    if (a) plates += fig(a, 1, "1 / 5", `<span class="bignum">(${pad(1)})</span>`);
    if (b) plates += fig(b, 2, ratioNum(b.ratio) < 1 ? "7 / 12" : "5 / 13");

    const wide = ["2 / 12", "1 / 9", "4 / 13"];
    const tall = ["7 / 11", "2 / 6", "8 / 12", "4 / 8"];
    let wi = 0, ti = 0;
    rest.forEach((im, k) => {
      const col = ratioNum(im.ratio) > 1.4 ? wide[wi++ % wide.length] : tall[ti++ % tall.length];
      plates += fig(im, k + 3, col);
    });

    const prev = P[(i - 1 + P.length) % P.length];
    shell("Work", head + `<section class="plates grid">${plates}</section>
      <nav class="next grid" aria-label="Projects">
        <span class="label"><a href="${projectUrl(prev)}">← (${esc(prev.id)}) ${esc(prev.title)}</a><br>Next project <span class="num">(${esc(next.id)})</span></span>
        <a class="big" href="${projectUrl(next)}">${esc(next.title)} →</a>
      </nav>`);

    lightbox(p.images.map((im) => ({ p, im })), ".plates .zoom");
  }

  // press-style credit line: place, date — © name
  function credit(p, im) {
    return `${esc(im.place || p.location)}, ${esc(im.date || p.date || p.year)} — © ${esc(S.name)}`;
  }

  /* ---------------- Lightbox ---------------- */
  // items: [{ p: project, im: image }], sel: buttons with data-i that open the viewer
  function lightbox(items, sel) {
    const imgs = items.map((x) => x.im);
    const lb = document.createElement("div");
    lb.className = "lb";
    lb.hidden = true;
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML = `
      <div class="lb-top grid">
        <span class="lb-count num"></span>
        <span class="lb-title"></span>
        <button class="lb-close" type="button">Close ✕</button>
      </div>
      <div class="lb-stage">
        <div class="lb-img"></div>
        <button class="lb-prev" type="button" aria-label="이전 사진"></button>
        <button class="lb-next" type="button" aria-label="다음 사진"></button>
      </div>
      <div class="lb-cap grid"></div>`;
    document.body.appendChild(lb);

    const stage = $(".lb-stage", lb), box = $(".lb-img", lb);
    let cur = 0, lastFocus = null;

    function fit() {
      const im = imgs[cur];
      const el = box.firstElementChild;
      if (!el || im.src) return;
      const W = stage.clientWidth, H = stage.clientHeight, r = ratioNum(im.ratio);
      const w = Math.min(W, H * r);
      el.style.width = w + "px";
    }
    function show(k) {
      cur = (k + imgs.length) % imgs.length;
      const im = imgs[cur], p = items[cur].p;
      $(".lb-title", lb).innerHTML = `${esc(p.title)} <span class="mute">${esc(p.titleKr)}</span>`;
      box.innerHTML = media(im, pad(cur + 1));
      $(".lb-count", lb).textContent = `${pad(cur + 1)} / ${pad(imgs.length)}`;
      $(".lb-cap", lb).innerHTML = `<span>${esc(im.caption)}</span><span class="mute">${esc(im.captionEn || "")}</span><span></span>`;
      fit();
    }
    function open(k) {
      lastFocus = document.activeElement;
      lb.hidden = false;
      document.documentElement.style.overflow = "hidden";
      show(k);
      $(".lb-close", lb).focus();
    }
    function close() {
      lb.hidden = true;
      document.documentElement.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll(sel).forEach((btn) =>
      btn.addEventListener("click", () => open(Number(btn.dataset.i))));
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-prev", lb).addEventListener("click", () => show(cur - 1));
    $(".lb-next", lb).addEventListener("click", () => show(cur + 1));
    window.addEventListener("resize", () => { if (!lb.hidden) fit(); });
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(cur - 1);
      else if (e.key === "ArrowRight") show(cur + 1);
      else if (e.key === "Tab") { // keep focus inside the viewer
        const f = [...lb.querySelectorAll("button")];
        const idx = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(idx + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });
    let x0 = null;
    stage.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  /* ---------------- Notes ---------------- */
  function notes() {
    const N = window.NOTES;
    const list = N.entries || [];
    const head = mast({
      path: [["notes", ""]],
      title: N.title,
      kr: N.titleKr,
      meta: [["Entries", `<span class="num">${pad(list.length)}</span>`]],
      desc: N.desc
    });
    const body = `<section class="notes">` + list.map((e, k) => `
      <article class="note grid" id="note-${k + 1}">
        <header class="note-head">
          <div class="mute num">${pad(k + 1)} — ${esc(e.date)}</div>
          <h2>${esc(e.title)}${e.titleEn ? `<br><span class="mute">${esc(e.titleEn)}</span>` : ""}</h2>
        </header>
        <div class="essay">${paras(e.body)}</div>
      </article>`).join("") + `</section>`;
    shell("Notes", head + body);
  }

  /* ---------------- About ---------------- */
  function about() {
    const head = mast({
      path: [["about", ""]],
      title: "About",
      kr: `${esc(S.realNameKr)} · ${esc(S.nameKr)}`,
      meta: [
        ["Name", `${esc(S.realNameKr)} ${esc(S.realName)}<br><span class="mute">${esc(S.name)}</span>`],
        ["Based in", esc(S.base)],
        ["Phone", `<a href="tel:${esc(S.phone)}">${esc(S.phone)}</a>`],
        ["E-mail", `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`],
        ["Instagram", `<a href="${esc(S.instagram)}" target="_blank" rel="noopener">${esc(S.instagramHandle)}</a>`]
      ],
      aside: S.photo ? `<figure class="portrait">${media({ src: S.photo, alt: `${S.realNameKr} 프로필 사진` })}</figure>` : ""
    });

    shell("About", head);
  }

  const pages = { home, work, project, notes, about };
  (pages[document.body.dataset.page] || (() => {}))();
})();
