/* Builds the A4 landscape PDF layout from js/data.js.
   print.html        → only projects with real photographs
   print.html?all=1  → every project, placeholders included */
(function () {
  "use strict";

  const S = window.SITE, P = window.PROJECTS, F = window.FIELDS;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const paras = (arr) => arr.map((p) => `<p>${p}</p>`).join("");
  const ratioNum = (r) => { const [a, b] = String(r || "3/2").split("/").map(Number); return a / b; };
  const field = (k) => F[k] || { en: k, ko: "" };

  const all = new URLSearchParams(location.search).has("all");
  const projects = P
    .map((p) => (all ? p : Object.assign({}, p, { images: p.images.filter((im) => im.src) })))
    .filter((p) => p.images.length);

  const pic = (im) => im.src
    ? `<img src="${esc(im.src)}" alt="${esc(im.caption)}">`
    : `<div class="ph" style="aspect-ratio:${im.ratio || "3/2"};background:${im.tone || "#b9b6af"}"></div>`;

  // page numbers: cover 1, intro 2, then each project = title page + one page per photograph
  let n = 2;
  const start = projects.map((p) => { const s = n + 1; n += 1 + p.images.length; return s; });

  const sheets = [];
  const foot = () => `<div class="foot"><span>${esc(S.name)} — ${esc(S.edition)}</span><span class="num">${pad(sheets.length + 1)}</span></div>`;
  const add = (cls, inner, withFoot = true) => sheets.push(`<section class="sheet ${cls}">${inner}${withFoot ? foot() : ""}</section>`);

  // 1. cover
  const coverIm = (projects.flatMap((p) => p.images).find((im) => im.featured && im.src)) || (projects[0] && projects[0].images[0]);
  add("cover", `
    <div class="top">
      <div>${esc(S.name)} <span class="mute">${esc(S.nameKr)}</span><br>${esc(S.realName)} <span class="mute">${esc(S.realNameKr)}</span></div>
      <div class="r">${esc(S.edition)}<br>${S.year} — ${esc(S.base)}</div>
    </div>
    ${coverIm ? `<div class="photo">${pic(coverIm)}</div>` : ""}
    <div class="cap">Photographer<br><span class="mute">사진가</span></div>`, false);

  // 2. intro + contents
  add("intro", `
    <div class="page-label">Introduction <span class="mute">소개</span></div>
    <div class="g">
      <div class="intro-text">${paras(S.intro)}</div>
      <div class="contents">
        <div class="h">Contents <span>목차</span></div>
        <ul>${projects.map((p, i) => `<li><span class="num">${esc(p.id)}</span><span>${esc(p.title)} <span class="mute">${esc(p.titleKr)}</span></span><span class="mute">${field(p.field).en}, ${p.year}</span><span class="num">${pad(start[i])}</span></li>`).join("")}
        <li><span></span><span>About <span class="mute">소개</span></span><span></span><span class="num">${pad(n + 1)}</span></li></ul>
      </div>
    </div>`);

  // 3. projects
  const align = ["", "l", "r"];
  projects.forEach((p) => {
    const fd = field(p.field);
    add("ptitle", `
      <div class="g">
        <div class="t"><span class="arrow">→</span><h1>${esc(p.title)}</h1><span class="kr">${esc(p.titleKr)}</span></div>
        <dl>
          <dt>Field</dt><dd>${fd.en} <span class="mute">${fd.ko}</span></dd>
          <dt>Location</dt><dd>${esc(p.location)}</dd>
          <dt>Date</dt><dd>${esc(p.date || p.year)}</dd>
          <dt>Photographs</dt><dd class="num">${pad(p.images.length)}</dd>
        </dl>
        <div class="desc">${paras(p.desc)}</div>
      </div>
      <div class="bignum">(${esc(p.id)})</div>`);

    p.images.forEach((im, k) => {
      // landscape frames stay centred and large; portrait frames shift left / centre / right
      const a = ratioNum(im.ratio) >= 1 ? "" : align[k % align.length];
      add("plate", `
        <div class="head"><span><span class="num">(${esc(p.id)})</span> ${esc(p.title)} <span class="mute">${esc(p.titleKr)}</span></span><span class="mute num">${pad(k + 1)} / ${pad(p.images.length)}</span></div>
        <div class="stage ${a}">${pic(im)}</div>
        <div class="cap"><span class="num">${pad(k + 1)}</span><span>${esc(im.caption)} <span class="mute">${esc(im.captionEn || "")}</span><br><span class="mute">${esc(im.place || p.location)}, ${esc(im.date || p.date || p.year)} — © ${esc(S.name)}</span></span></div>`);
    });
  });

  // 4. about — simple profile
  add("about", `
    <div class="page-label">About <span class="mute">소개</span></div>
    <div class="g">
      <dl class="info">
        <dt>Name</dt><dd>${esc(S.realNameKr)} ${esc(S.realName)}<br><span class="mute">${esc(S.name)}</span></dd>
        <dt>Based in</dt><dd>${esc(S.base)}</dd>
        <dt>Phone</dt><dd>${esc(S.phone)}</dd>
        <dt>E-mail</dt><dd>${esc(S.email)}</dd>
        <dt>Instagram</dt><dd>${esc(S.instagramHandle)}</dd>
      </dl>
      ${S.photo ? `<figure class="me"><img src="${esc(S.photo)}" alt=""></figure>` : ""}
    </div>`);

  // 5. back cover
  add("back", `
    <div class="center">
      <div class="name">${esc(S.name)}</div>
      ${esc(S.email)}<br>${esc(S.phone)}<br>${esc(S.instagramHandle)}<br><span class="mute">${esc(S.base)}</span>
    </div>`, false);

  document.getElementById("book").innerHTML = sheets.join("");
  document.title = `${S.name} — Portfolio ${S.year}`;
})();
