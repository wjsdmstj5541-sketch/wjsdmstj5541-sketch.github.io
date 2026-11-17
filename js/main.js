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

  function mast({ arrow, title, kr, meta, desc }) {
    const metaHtml = meta.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
    return `<section class="mast grid">
      <div class="mast-title">
        ${arrow ? `<a class="arrow" href="${arrow.href}" aria-label="${arrow.label}">${arrow.glyph}</a>` : `<span class="arrow" aria-hidden="true">→</span>`}
        <h1>${title}</h1>${kr ? `<span class="kr">${kr}</span>` : ""}
      </div>
      <dl class="mast-meta">${metaHtml}</dl>
      <div class="mast-desc"><span class="label">Description</span>${paras(desc)}</div>
    </section>`;
  }

  function shell(active, inner) {
    $("#app").innerHTML = header(active) + `<main>${inner}</main>` + footer();
  }

  /* ---------------- Home ---------------- */
  function home() {
    $("#intro").innerHTML = paras(S.intro);

    const groups = [
      ["Selected Work <span class=\"mute\">작업</span>", [["work.html", "Grid"], ["work.html?view=list", "List"]]],
      ["Fields <span class=\"mute\">분야</span>", Object.entries(F).map(([k, f]) => [`work.html?field=${k}`, `${f.en} <span class="mute">${f.ko}</span>`])],
      ["Notes <span class=\"mute\">작업 노트</span>", [["notes.html#contact", "Contact Sheet"], ["notes.html#kept", "Kept & Left Out"], ["notes.html#sequence", "Sequence"], ["notes.html#text", "Text"]]],
      ["About <span class=\"mute\">소개</span>", [["about.html", "CV"], [`mailto:${S.email}`, "E-mail"], [S.instagram, "Instagram"]]]
    ];
    $("#home-nav").innerHTML =
      groups.map(([h, links]) => `<div class="group"><div>${h}</div><ul>${links.map(([u, t]) => `<li><a href="${esc(u)}">${t}</a></li>`).join("")}</ul></div>`).join("") +
      `<div class="copy">© 2024–${S.year} ${esc(S.name)} / ${esc(S.realName)}<br>All rights reserved</div>`;

    $("#home-meta").innerHTML = `${esc(S.edition)}<br>${S.year} — ${esc(S.base)}`;

    // random featured photograph on every visit
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
      [`<a href="${url(view, "")}"${on(!f)}>All (${P.length})</a>`]
        .concat(Object.entries(F).map(([k, v]) => `<a href="${url(view, k)}"${on(f === k)}>${v.en} (${P.filter((p) => p.field === k).length})</a>`))
        .join("<br>") + `</span>`;

    const head = mast({
      title: f ? field(f).en : "Selected Work",
      kr: f ? field(f).ko : "작업",
      meta: [["View", viewOpts], ["Field", fieldOpts]],
      desc: S.workIntro
    });

    let body;
    if (view === "grid") {
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
      arrow: { href: "work.html", glyph: "←", label: "Back to work" },
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

    const cap = (im, n) => `<figcaption><span class="num">${pad(n)}</span><span>${esc(im.caption)}${im.captionEn ? ` <span class="mute">${esc(im.captionEn)}</span>` : ""}<br><span class="mute">${credit(p, im)}</span></span></figcaption>`;
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

    lightbox(p);
  }

  // press-style credit line: place, date — © name
  function credit(p, im) {
    return `${esc(im.place || p.location)}, ${esc(im.date || p.date || p.year)} — © ${esc(S.name)}`;
  }

  /* ---------------- Lightbox ---------------- */
  function lightbox(p) {
    const imgs = p.images;
    const lb = document.createElement("div");
    lb.className = "lb";
    lb.hidden = true;
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML = `
      <div class="lb-top grid">
        <span class="lb-count num"></span>
        <span class="lb-title">${esc(p.title)} <span class="mute">${esc(p.titleKr)}</span></span>
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
      const im = imgs[cur];
      box.innerHTML = media(im, pad(cur + 1));
      $(".lb-count", lb).textContent = `${pad(cur + 1)} / ${pad(imgs.length)}`;
      $(".lb-cap", lb).innerHTML = `<span>${esc(im.caption)}</span><span class="mute">${esc(im.captionEn || "")}</span><span class="mute">${credit(p, im)}</span>`;
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

    document.querySelectorAll(".plates .zoom").forEach((btn) =>
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
    const p = P.find((x) => x.id === N.project) || P[0];
    const tones = ["#4f4e4a", "#6b6964", "#3e3d3a", "#8c8984", "#5a5854", "#77746e", "#2f2f2d", "#9e9b95"];
    // placeholder look for frame n (ignored once a real src is set in NOTES.photos)
    const frame = (n) => Object.assign({ ratio: n % 4 === 0 ? "2/3" : "3/2", tone: tones[(n * 5) % tones.length] }, (N.photos || {})[n]);
    const picks = new Set(N.selects);

    const head = mast({
      title: N.title,
      kr: N.titleKr,
      meta: [
        ["Project", `<a href="${projectUrl(p)}">${esc(p.title)}</a> <span class="mute">${esc(p.titleKr)}</span>`],
        ["Period", esc(p.date || p.year)],
        ["Frames", `${N.shot.toLocaleString("en")} → ${N.selects.length}`]
      ],
      desc: N.desc
    });

    const stepHead = (n, [ko, en, text]) =>
      `<div class="step-head"><div class="n num">${pad(n)}</div><div>${en} <span class="mute">${ko}</span></div><p>${text}</p></div>`;

    const sheet = Array.from({ length: N.frames }, (_, k) => {
      const n = k + 1, pick = picks.has(n);
      return `<div class="frame${pick ? " is-pick" : ""}"><div class="cell">${media(frame(n))}</div><div class="fn num">${pad(n, 3)}${pick ? " ●" : ""}</div></div>`;
    }).join("");

    const tall = (n) => (ratioNum(frame(n).ratio) < 1 ? " tall" : "");
    const pairs = N.pairs.map((pr) => `<div class="pair">
        <figure class="kept${tall(pr.kept)}">${media(frame(pr.kept), pad(pr.kept, 3))}<figcaption>Kept <span class="mute">남긴 컷 ${pad(pr.kept, 3)}</span></figcaption></figure>
        <figure class="left${tall(pr.left)}">${media(frame(pr.left), pad(pr.left, 3))}<figcaption class="mute">Left out 버린 컷 ${pad(pr.left, 3)}</figcaption></figure>
        <p class="pair-note">${pr.note}</p>
      </div>`).join("");

    // book dummy: each spread = [left page, right page]; a page is null (blank), a frame number, or { n, bleed: true }
    const page = (pg) => {
      if (pg == null) return `<div class="pg"></div>`;
      const n = typeof pg === "object" ? pg.n : pg;
      const bleed = typeof pg === "object" && pg.bleed;
      const im = frame(n);
      return `<div class="pg${bleed ? " bleed" : ""}${ratioNum(im.ratio) < 1 ? " tall" : ""}">${media(im)}</div>`;
    };
    let pno = 0;
    const flatplan = N.sequence.map((sp) => {
      const a = ++pno, b = ++pno;
      return `<div class="spread"><div class="pages">${page(sp[0])}${page(sp[1])}</div><div class="sp-n num">${pad(a)}–${pad(b)}</div></div>`;
    }).join("");

    const body = `
      <section class="step grid" id="contact">${stepHead(1, N.steps.contact)}
        <div class="step-body"><div class="sheet">${sheet}</div></div></section>

      <section class="step grid" id="kept">${stepHead(2, N.steps.pairs)}
        <div class="step-body">${pairs}</div></section>

      <section class="step grid" id="sequence">${stepHead(3, N.steps.sequence)}
        <div class="step-body"><div class="flatplan">${flatplan}</div></div></section>

      <section class="step grid" id="text">${stepHead(4, N.steps.text)}
        <div class="step-body essay">${paras(N.essay)}<p class="sign">${esc(S.name)}, ${esc(p.date || p.year)}</p></div></section>`;

    shell("Notes", head + body);
  }

  /* ---------------- About ---------------- */
  function about() {
    const head = mast({
      title: "About",
      kr: `${esc(S.nameKr)} · ${esc(S.realNameKr)}`,
      meta: [
        ["Name", `${esc(S.name)}<br>${esc(S.realName)}`],
        ["Based in", esc(S.base)],
        ["E-mail", `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`],
        ["Instagram", `<a href="${esc(S.instagram)}" target="_blank" rel="noopener">${esc(S.instagramHandle)}</a>`]
      ],
      desc: S.about
    });

    const portrait = `<section class="grid" style="padding:0 var(--pad);margin-top:clamp(60px,8vw,120px)">
      <figure class="portrait">${media({ ratio: "3/4", tone: "#e4e0d8" }, "Portrait")}<figcaption class="mute">Portrait (예시)</figcaption></figure></section>`;

    const cv = `<section class="cv">` + S.cv.map((sec) => `<div class="cv-sec grid">
      <h2>${esc(sec.en)}<span class="mute">${esc(sec.ko)}</span></h2>
      <ul>${sec.items.map(([y, ko, en]) => `<li><span class="yr">${esc(y)}</span><span>${esc(ko)}${en ? `<br><span class="mute">${esc(en)}</span>` : ""}</span></li>`).join("")}</ul>
    </div>`).join("") + `</section>`;

    shell("About", head + portrait + cv);
  }

  const pages = { home, work, project, notes, about };
  (pages[document.body.dataset.page] || (() => {}))();
})();
