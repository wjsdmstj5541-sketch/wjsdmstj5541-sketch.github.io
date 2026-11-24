# SEO HARU — Portfolio

사진가 · 이미지 에디터 서하루(전은서) 포트폴리오. 빌드 없이 동작하는 정적 사이트입니다.
`index.html`을 브라우저로 열면 바로 볼 수 있습니다.

## 페이지
- `index.html` — 첫 페이지 (소개 + 메뉴 + 대표작 랜덤 1장)
- `work.html` — 작업 목록 (Grid / List, `?field=portrait` · `?field=other` 분야 필터)
- `project.html?id=01` — 프로젝트 상세
- `about.html` — 소개 (이름 · 연락처 · 프로필 사진)

## 내용 바꾸기
모든 문구와 사진 경로는 `js/data.js` 한 파일에 있습니다. 지금 들어있는 내용은 모두 예시입니다.
1. 사진을 `images/` 폴더에 넣고
2. `data.js`에서 해당 이미지의 `src: ""` 에 `"images/파일명.jpg"`를 적으면 됩니다.
3. `featured: true` 인 사진이 첫 페이지에 무작위로 나타납니다.

웹용 사진은 긴 변 2000–2400px, JPG 품질 80% 정도를 권장합니다.

## 배포
폴더 전체를 GitHub Pages, Netlify, Vercel 등에 그대로 올리면 됩니다.
