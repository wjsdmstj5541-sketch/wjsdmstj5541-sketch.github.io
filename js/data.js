/* ==========================================================================
   SEO HARU — 사이트 콘텐츠
   이 파일만 고치면 사이트 전체 문구와 사진이 바뀝니다.
   지금 들어있는 문구는 모두 [예시]입니다. 실제 내용으로 교체하세요.

   사진 넣는 법
   1) 사진을 images/ 폴더에 넣습니다.  예) images/night-shift-01.jpg
   2) 해당 이미지의 src 에 경로를 적습니다. src: "images/night-shift-01.jpg"
   3) src 가 비어 있으면 회색 자리표시 이미지가 보입니다.
      (ratio = 비율, tone = 자리표시 회색 톤. 실제 사진을 넣으면 무시됩니다.)
   캡션 아래 줄(장소, 날짜)은 프로젝트의 location·date 를 쓰고,
   이미지마다 place, date 를 따로 적으면 그 값이 우선합니다.
   featured: true 인 사진은 첫 페이지에 무작위로 한 장씩 나타납니다.
   ========================================================================== */

window.SITE = {
  name: "SEO HARU",
  nameKr: "서하루",
  realName: "Eunseo Jeon",
  realNameKr: "전은서",
  email: "yoyo321321eun@naver.com",
  phone: "010-5541-0357",
  instagram: "https://www.instagram.com/haaaaaaaaaaaaaaaaaaaaaaaaaaaru/",
  instagramHandle: "@haaaaaaaaaaaaaaaaaaaaaaaaaaaru",
  photo: "images/profile.jpg",              // About 페이지 프로필 사진
  base: "Seoul, KR",
  edition: "Portfolio Vol. 01",
  year: 2026,

  // 첫 페이지 소개 문단 (HTML 사용 가능)
  intro: [
    "마음에, 모험을",
    "<span class=\"mute\">Adventure, at heart.</span>"
  ],

  // Work › Intro 첫 화면 — 제목, 사진 한두 장, 내 사진의 분위기 소개
  allIntro: {
    title: "Intro",
    titleKr: "인트로",
    photos: ["images/portrait/portrait-02.jpg", "images/portrait/portrait-01.jpg"],
    text: [
      "[여기에 내 사진의 분위기를 설명하는 글이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ]
  },

  workIntro: [
    "인물 사진, 그리고 그 밖에 찍은 것들.",
    "<span class=\"mute\">Portraits, and other things.</span>"
  ]
};

// 분야 — key 는 영문 소문자로 유지하세요
window.FIELDS = {
  portrait:  { en: "Portrait",  ko: "인물" },
  elsewhere: { en: "Elsewhere", ko: "그 밖에" }
};

// 프로젝트 — 이 순서대로 Work 페이지에 놓입니다
window.PROJECTS = [
  {
    id: "01",
    title: "Portraits",
    titleKr: "인물",
    field: "portrait",
    year: 2026,
    date: "2026",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "스튜디오에서 찍은 개인 인물 작업입니다.",
      "<span class=\"mute\">Personal portrait work, made in the studio.</span>"
    ],
    images: [
      { src: "images/portrait/portrait-01.jpg", ratio: "1599/2400", featured: true, caption: "검은 드레스, 뒷모습.", captionEn: "Black dress, from behind." },
      { src: "images/portrait/portrait-03.jpg", ratio: "1122/1402", featured: true, caption: "분홍 가발.", captionEn: "Pink wig." },
      { src: "images/portrait/portrait-04.jpg", ratio: "1714/2400", featured: true, caption: "흰 벽 앞에 선 사람.", captionEn: "Standing against a white wall." },
      { src: "images/portrait/portrait-02.jpg", ratio: "1714/2400", featured: true, caption: "머리를 넘기는 순간.", captionEn: "Hair in motion." }
    ]
  },
  {
    id: "02",
    title: "Outside the National Assembly",
    titleKr: "국회 앞",
    field: "elsewhere",
    year: 2024,
    date: "2024. 12.",
    location: "Yeouido, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "2024년 12월, 비상계엄 선포 이후 대통령 탄핵을 요구하는 시민들이 여의도 국회 앞에 모였습니다. 깃발과 손팻말, 그리고 집회가 지나간 바닥에 남은 것들을 찍었습니다.",
      "<span class=\"mute\">December 2024. After the declaration of martial law, citizens gathered outside the National Assembly in Yeouido to call for the president's impeachment.</span>"
    ],
    images: [
      { src: "images/news/assembly-01.jpg", ratio: "1714/2400", caption: "국회의사당을 배경으로 깃발이 나부끼고 있다.", captionEn: "Flags fly in front of the National Assembly building." },
      { src: "images/news/assembly-02.jpg", ratio: "2400/1714", caption: "탄핵을 요구하는 손팻말을 든 시민이 국회 앞 도로를 걷고 있다.", captionEn: "A man carries placards calling for impeachment along the road outside the Assembly." },
      { src: "images/news/assembly-03.jpg", ratio: "1714/2400", caption: "바닥에 붙은 ‘윤석열 체포’ 전단.", captionEn: "Leaflets calling for the president's arrest, stuck to the pavement." },
      { src: "images/news/assembly-04.jpg", ratio: "2400/1714", caption: "발밑에 밟힌 손팻말과 신문.", captionEn: "Placards and newspapers underfoot." }
    ]
  },
  {
    id: "03",
    title: "Hannam-dong",
    titleKr: "한남동 관저 앞",
    field: "elsewhere",
    year: 2025,
    date: "2025. 1.",
    location: "Hannam-dong, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "2025년 1월, 대통령 관저가 있는 한남동 앞 거리. 태극기와 성조기를 든 대통령 지지자들이 겨울 오후의 낮은 햇빛 속에 모였습니다.",
      "<span class=\"mute\">January 2025. Supporters of the president, carrying Korean and American flags, gathered in the low winter sun outside the presidential residence in Hannam-dong.</span>"
    ],
    images: [
      { src: "images/news/hannam-01.jpg", ratio: "1714/2400", caption: "태극기와 성조기를 든 지지자들이 관저 앞 거리를 걷고 있다.", captionEn: "Supporters carrying Korean and American flags walk outside the residence." },
      { src: "images/news/hannam-02.jpg", ratio: "1714/2400", caption: "손팻말을 든 집회 참가자들.", captionEn: "Rally participants holding placards." },
      { src: "images/news/hannam-03.jpg", ratio: "1714/2400", caption: "햇빛을 받으며 구호를 외치는 참가자들.", captionEn: "Participants chant in the afternoon light." }
    ]
  },
  {
    id: "04",
    title: "Olympic Handball Arena",
    titleKr: "올림픽 핸드볼경기장 앞",
    field: "elsewhere",
    year: 2026,
    date: "2026. 6.",
    location: "Olympic Park, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "2026년 6월, 서울 올림픽공원 핸드볼경기장 앞. 참가자들이 ‘재선거’와 ‘STOP THE STEAL’이 적힌 손팻말을 들고 모였습니다.",
      "<span class=\"mute\">June 2026. Outside the Handball Arena in Olympic Park, participants gathered with signs reading “Re-election” and “Stop the steal.”</span>"
    ],
    images: [
      { src: "images/news/olympic-01.jpg", ratio: "1920/2400", caption: "‘STOP THE STEAL! 재선거!’ 손팻말을 든 참가자.", captionEn: "A participant holds a sign reading “Stop the steal! Re-election!”" },
      { src: "images/news/olympic-02.jpg", ratio: "1599/2400", caption: "닫힌 셔터 앞, 양산 뒤에 앉은 참가자들.", captionEn: "Participants seated behind umbrellas in front of a closed shutter." },
      { src: "images/news/olympic-03.jpg", ratio: "1598/2400", caption: "‘재선거’ 종이를 가슴에 건 참가자.", captionEn: "A participant wearing a “re-election” sign." },
      { src: "images/news/olympic-04.jpg", ratio: "1598/2400", caption: "계단을 메운 참가자들 앞에서 한 남성이 주먹을 들어 올리고 있다.", captionEn: "A man raises his fist in front of participants filling the steps." }
    ]
  }
];

// Notes 페이지 — 글만 모아 두는 곳
// entries 에 글을 하나씩 추가하세요. 위에 있는 글이 먼저 보입니다.
//   date  : 날짜 (예: "2026. 11.")
//   title : 제목,  titleEn : 영문 제목 (없으면 "")
//   body  : 문단 배열. 영문 문단은 <span class="mute">…</span> 로 감싸면 회색으로 보입니다.
window.NOTES = {
  title: "Notes",
  titleKr: "작업 노트",
  desc: [
    "찍으면서 든 생각들을 적어 둡니다.",
    "<span class=\"mute\">Thoughts written down while photographing.</span>"
  ],
  entries: [
    {
      date: "2026. 11.",
      title: "마음에, 모험을",
      titleEn: "Adventure, at heart",
      body: [
        "[여기에 글이 들어갑니다. js/data.js 의 NOTES.entries 에서 고칠 수 있어요.]"
      ]
    }
  ]
};
