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
  photo: "images/profile.jpg",
  // 첫 페이지 고정 사진 (caption 은 비워 두면 표시 안 함)
  homePhoto: { src: "images/home.jpg", caption: "" },              // About 페이지 프로필 사진
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
    photos: ["images/intro.jpg"],
    text: [
      "두려움에 머물다 오래도록 바라온 것을 놓치고 싶지는 않다.",
      "<span class=\"mute\">I don’t want to linger in fear and lose what I have long hoped for.</span>"
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
  other:     { en: "Other",     ko: "그 밖에" }
};

// 프로젝트 — 이 순서대로 Work 페이지에 놓입니다
window.PROJECTS = [
  {
    id: "01",
    title: "단절된 자유",
    titleKr: "Disconnected Freedom",
    field: "portrait",
    year: 2025,
    date: "2025. 6.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업 — 청(靑)",
    hero: 4,                      // 크게 보여줄 사진 번호
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/severed/severed-01.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/severed/severed-02.jpg", ratio: "1598/2400", caption: "" },
      { src: "images/severed/severed-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/severed/severed-04.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/severed/severed-05.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/severed/severed-06.jpg", ratio: "2400/1714", caption: "" }
    ]
  },
  {
    id: "02",
    title: "Narcissism",
    titleKr: "나르시시즘",
    field: "portrait",
    year: 2025,
    date: "2025. 12.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    hero: 2,                      // 크게 보여줄 사진 번호
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/narcissism/narcissism-01.jpg", ratio: "2400/1500", caption: "" },
      { src: "images/narcissism/narcissism-02.jpg", ratio: "2400/1500", caption: "" },
      { src: "images/narcissism/narcissism-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/narcissism/narcissism-04.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/narcissism/narcissism-05.jpg", ratio: "1714/2400", caption: "" }
    ]
  },
  {
    id: "03",
    title: "Untitled",
    titleKr: "무제",
    field: "portrait",
    year: 2026,
    date: "2026",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    hero: 6,                      // 크게 보여줄 사진 번호
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/untitled/untitled-01.jpg", ratio: "2400/2400", caption: "" },
      { src: "images/untitled/untitled-02.jpg", ratio: "2400/1714", caption: "" },
      { src: "images/untitled/untitled-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled/untitled-04.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled/untitled-05.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled/untitled-06.jpg", ratio: "1350/2400", caption: "" },
      { src: "images/untitled/untitled-07.jpg", ratio: "1713/2400", caption: "" },
      { src: "images/untitled/untitled-08.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled/untitled-09.jpg", ratio: "1599/2400", caption: "" }
    ]
  },
  {
    id: "04",
    title: "Profile",
    titleKr: "프로필",
    field: "portrait",
    year: 2026,
    date: "2026. 6.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "프로필 촬영",
    hero: 6,                      // 크게 보여줄 사진 번호
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/profile-series/profile-01.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/profile-series/profile-02.jpg", ratio: "1715/2400", caption: "" },
      { src: "images/profile-series/profile-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/profile-series/profile-04.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/profile-series/profile-05.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/profile-series/profile-06.jpg", ratio: "1598/2400", caption: "" },
      { src: "images/profile-series/profile-07.jpg", ratio: "1598/2400", caption: "" }
    ]
  },
  {
    id: "05",
    title: "추의 미학",
    titleKr: "Aesthetics of Ugliness",
    field: "portrait",
    year: 2025,
    date: "2025. 3.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업 — 공모전 출품",
    hero: 6,                      // 크게 보여줄 사진 번호
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/ugliness/ugliness-01.jpg", ratio: "1713/2400", caption: "" },
      { src: "images/ugliness/ugliness-02.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/ugliness/ugliness-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/ugliness/ugliness-04.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/ugliness/ugliness-05.jpg", ratio: "1598/2400", caption: "" },
      { src: "images/ugliness/ugliness-06.jpg", ratio: "1599/2400", caption: "" }
    ]
  },
  {
    id: "06",
    title: "Untitled",
    titleKr: "무제",
    field: "portrait",
    year: 2026,
    date: "2026. 10.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    hero: 10,                      // 크게 보여줄 사진 번호
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/untitled-2/untitled2-01.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled-2/untitled2-02.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/untitled-2/untitled2-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled-2/untitled2-04.jpg", ratio: "2400/1919", caption: "" },
      { src: "images/untitled-2/untitled2-05.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled-2/untitled2-06.jpg", ratio: "1920/2400", caption: "" },
      { src: "images/untitled-2/untitled2-07.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled-2/untitled2-08.jpg", ratio: "2400/1350", caption: "" },
      { src: "images/untitled-2/untitled2-09.jpg", ratio: "2400/1714", caption: "" },
      { src: "images/untitled-2/untitled2-10.jpg", ratio: "2400/1920", caption: "" }
    ]
  },
  {
    id: "07",
    title: "Untitled",
    titleKr: "무제",
    field: "portrait",
    year: 2026,
    date: "2026. 8.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/untitled-3/untitled3-01.jpg", ratio: "1954/2400", caption: "" },
      { src: "images/untitled-3/untitled3-02.jpg", ratio: "1920/2400", caption: "" },
      { src: "images/untitled-3/untitled3-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/untitled-3/untitled3-04.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/untitled-3/untitled3-05.jpg", ratio: "2400/1714", caption: "" },
      { src: "images/untitled-3/untitled3-06.jpg", ratio: "1920/2400", caption: "" },
      { src: "images/untitled-3/untitled3-07.jpg", ratio: "1714/2400", caption: "" }
    ]
  },
  {
    id: "08",
    title: "현",
    titleKr: "Hyeon",
    field: "portrait",
    year: 2026,
    date: "2026. 8.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/hyeon/hyeon-01.jpg", ratio: "1954/2400", caption: "" },
      { src: "images/hyeon/hyeon-02.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/hyeon/hyeon-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/hyeon/hyeon-04.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/hyeon/hyeon-05.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/hyeon/hyeon-06.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/hyeon/hyeon-07.jpg", ratio: "1714/2400", caption: "" }
    ]
  },
  {
    id: "09",
    title: "청",
    titleKr: "Cheong",
    field: "portrait",
    year: 2026,
    date: "2026. 4.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/cheong/cheong-01.jpg", ratio: "1901/2400", caption: "" },
      { src: "images/cheong/cheong-02.jpg", ratio: "1920/2400", caption: "" },
      { src: "images/cheong/cheong-03.jpg", ratio: "1920/2400", caption: "" },
      { src: "images/cheong/cheong-04.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/cheong/cheong-05.jpg", ratio: "1779/2400", caption: "" },
      { src: "images/cheong/cheong-06.jpg", ratio: "1920/2400", caption: "" }
    ]
  },
  {
    id: "10",
    title: "요괴",
    titleKr: "Yogoe",
    field: "portrait",
    year: 2025,
    date: "2025. 9.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/yogoe/yogoe-01.jpg", ratio: "1954/2400", caption: "" },
      { src: "images/yogoe/yogoe-02.jpg", ratio: "2400/1714", caption: "" },
      { src: "images/yogoe/yogoe-03.jpg", ratio: "2400/1800", caption: "" },
      { src: "images/yogoe/yogoe-04.jpg", ratio: "1919/2400", caption: "" },
      { src: "images/yogoe/yogoe-05.jpg", ratio: "1920/2400", caption: "" },
      { src: "images/yogoe/yogoe-06.jpg", ratio: "1919/2400", caption: "" }
    ]
  },
  {
    id: "11",
    title: "수경",
    titleKr: "Sugyeong",
    field: "portrait",
    year: 2026,
    date: "2026. 3.",
    location: "Namsan Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/sugyeong/sugyeong-01.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/sugyeong/sugyeong-02.jpg", ratio: "2400/2400", caption: "" },
      { src: "images/sugyeong/sugyeong-03.jpg", ratio: "2400/1598", caption: "" },
      { src: "images/sugyeong/sugyeong-04.jpg", ratio: "2400/1598", caption: "" },
      { src: "images/sugyeong/sugyeong-05.jpg", ratio: "2400/1714", caption: "" },
      { src: "images/sugyeong/sugyeong-06.jpg", ratio: "1920/2400", caption: "" }
    ]
  },
  {
    id: "12",
    title: "제주",
    titleKr: "Jeju",
    field: "portrait",
    year: 2025,
    date: "2025. 4.",
    location: "Jeju",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/jeju/jeju-01.jpg", ratio: "2400/1350", caption: "" },
      { src: "images/jeju/jeju-02.jpg", ratio: "1598/2400", caption: "" },
      { src: "images/jeju/jeju-03.jpg", ratio: "2400/1599", caption: "" },
      { src: "images/jeju/jeju-04.jpg", ratio: "2400/1598", caption: "" },
      { src: "images/jeju/jeju-05.jpg", ratio: "2400/1350", caption: "" },
      { src: "images/jeju/jeju-06.jpg", ratio: "2400/1714", caption: "" },
      { src: "images/jeju/jeju-07.jpg", ratio: "2400/1350", caption: "" },
      { src: "images/jeju/jeju-08.jpg", ratio: "1599/2400", caption: "" },
      { src: "images/jeju/jeju-09.jpg", ratio: "2400/1350", caption: "" }
    ]
  },
  {
    id: "13",
    title: "Comp Card",
    titleKr: "컴카드",
    field: "portrait",
    year: 2026,
    date: "2026. 9.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "모델 컴카드",
    // 맨 위 메인 사진 (컴카드에는 들어가지 않는 따로 한 장)
    lead: { src: "images/compcard/lead.jpg", ratio: "1920/2400", caption: "" },
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    // 모델별 컴카드: 첫 장이 크게, 나머지 4장이 오른쪽에 작게
    groups: [
      { label: "Model 01", images: [
          { src: "images/compcard/m1-01.jpg", ratio: "1598/2400", caption: "" },
          { src: "images/compcard/m1-02.jpg", ratio: "1598/2400", caption: "" },
          { src: "images/compcard/m1-03.jpg", ratio: "1599/2400", caption: "" },
          { src: "images/compcard/m1-04.jpg", ratio: "1598/2400", caption: "" },
          { src: "images/compcard/m1-05.jpg", ratio: "1599/2400", caption: "" }
      ] },
      { label: "Model 02", images: [
          { src: "images/compcard/m2-01.jpg", ratio: "1714/2400", caption: "" },
          { src: "images/compcard/m2-02.jpg", ratio: "1714/2400", caption: "" },
          { src: "images/compcard/m2-03.jpg", ratio: "1714/2400", caption: "" },
          { src: "images/compcard/m2-04.jpg", ratio: "1714/2400", caption: "" },
          { src: "images/compcard/m2-05.jpg", ratio: "1598/2400", caption: "" }
      ] },
      { label: "Model 03", images: [
          { src: "images/compcard/m3-01.jpg", ratio: "1920/2400", caption: "" },
          { src: "images/compcard/m3-02.jpg", ratio: "1920/2400", caption: "" },
          { src: "images/compcard/m3-03.jpg", ratio: "1919/2400", caption: "" },
          { src: "images/compcard/m3-04.jpg", ratio: "1902/2400", caption: "" },
          { src: "images/compcard/m3-05.jpg", ratio: "1920/2400", caption: "" }
      ] }
    ]
  },
  {
    id: "14",
    title: "몸",
    titleKr: "Body",
    field: "portrait",
    year: 2025,
    date: "2025. 12.",
    location: "Studio, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/body/body-01.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/body/body-02.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/body/body-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/body/body-04.jpg", ratio: "2400/1714", caption: "" }
    ]
  },
  {
    id: "15",
    title: "서둘러, 우린 꿈을 꾸고 있어",
    titleKr: "Hurry, We Are Dreaming",
    field: "portrait",
    year: 2026,
    date: "2026. 4.",
    location: "Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[작업 설명이 들어갑니다.]",
      "<span class=\"mute\">[English text]</span>"
    ],
    images: [
      { src: "images/dream/dream-01.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/dream/dream-02.jpg", ratio: "2400/1920", caption: "" },
      { src: "images/dream/dream-03.jpg", ratio: "1714/2400", caption: "" },
      { src: "images/dream/dream-04.jpg", ratio: "2400/1598", caption: "" },
      { src: "images/dream/dream-05.jpg", ratio: "1920/2400", caption: "" },
      { src: "images/dream/dream-06.jpg", ratio: "2400/1598", caption: "" },
      { src: "images/dream/dream-07.jpg", ratio: "2400/1349", caption: "" },
      { src: "images/dream/dream-08.jpg", ratio: "2400/1920", caption: "" },
      { src: "images/dream/dream-09.jpg", ratio: "2400/1598", caption: "" },
      { src: "images/dream/dream-10.jpg", ratio: "1920/2400", caption: "" }
    ]
  },
  {
    id: "16",
    title: "Outside the National Assembly",
    titleKr: "국회 앞",
    field: "other",
    year: 2024,
    date: "2024. 12.",
    location: "Yeouido, Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "2024년 12월, 비상계엄 선포 이후 서울 여의도 국회 앞에서 대통령 탄핵 촉구 집회가 열렸다.",
      "<span class=\"mute\">December 2024 — A rally calling for the president’s impeachment was held outside the National Assembly in Yeouido, Seoul, following the declaration of martial law.</span>"
    ],
    images: [
      { src: "images/news/assembly-01.jpg", ratio: "1714/2400", caption: "국회의사당을 배경으로 깃발이 나부끼고 있다.", captionEn: "Flags fly in front of the National Assembly building." },
      { src: "images/news/assembly-02.jpg", ratio: "2400/1714", caption: "탄핵을 요구하는 손팻말을 든 시민이 국회 앞 도로를 걷고 있다.", captionEn: "A man carries placards calling for impeachment along the road outside the Assembly." },
      { src: "images/news/assembly-03.jpg", ratio: "1714/2400", caption: "바닥에 붙은 ‘윤석열 체포’ 전단.", captionEn: "Leaflets calling for the president's arrest, stuck to the pavement." },
      { src: "images/news/assembly-04.jpg", ratio: "2400/1714", caption: "발밑에 밟힌 손팻말과 신문.", captionEn: "Placards and newspapers underfoot." },
      { src: "images/news/assembly-05.jpg", ratio: "1714/2400", caption: "낮은 햇빛 속, 목도리와 마스크로 얼굴을 가린 집회 참가자들.", captionEn: "Protesters wrapped in scarves and masks in the low winter sun." },
      { src: "images/news/assembly-06.jpg", ratio: "2400/1600", caption: "‘내란동조 탄핵거부’ 전광판을 든 참가자.", captionEn: "A protester holds up an LED sign." }
    ]
  },
  {
    id: "17",
    title: "Hannam-dong",
    titleKr: "한남동 관저 앞",
    field: "other",
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
      { src: "images/news/hannam-03.jpg", ratio: "1714/2400", caption: "햇빛을 받으며 구호를 외치는 참가자들.", captionEn: "Participants chant in the afternoon light." },
      { src: "images/news/hannam-04.jpg", ratio: "1714/2400", caption: "손팻말을 든 중절모 차림의 노인과 사람들.", captionEn: "An elderly man in a fedora holds a placard among the crowd." },
      { src: "images/news/hannam-05.jpg", ratio: "2400/1021", caption: "관저 앞 도로 양옆으로 늘어선 경찰.", captionEn: "Police officers line both sides of the road near the residence." },
      { src: "images/news/hannam-06.jpg", ratio: "1714/2400", caption: "성조기와 태극기를 꽂은 채 걸어오는 참가자.", captionEn: "A protester walks with American and Korean flags on his back." },
      { src: "images/news/hannam-07.jpg", ratio: "2400/1600", caption: "버스 창밖으로 보이는 관저 앞 집회.", captionEn: "The rally outside the residence, seen through a bus window." },
      { src: "images/news/hannam-08.jpg", ratio: "2400/1600", caption: "이태원역 표지판 아래 줄지어 선 경찰.", captionEn: "Police stand in line beneath the Itaewon Station sign." }
    ]
  },
  {
    id: "18",
    title: "Olympic Handball Arena",
    titleKr: "올림픽 핸드볼경기장 앞",
    field: "other",
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
      { src: "images/news/olympic-04.jpg", ratio: "1598/2400", caption: "계단을 메운 참가자들 앞에서 한 남성이 주먹을 들어 올리고 있다.", captionEn: "A man raises his fist in front of participants filling the steps." },
      { src: "images/news/olympic-05.jpg", ratio: "1599/2400", caption: "‘재선거 stop the steal’ 손팻말과 치켜든 주먹.", captionEn: "A raised fist and a ‘Stop the Steal’ sign outside the arena." },
      { src: "images/news/olympic-06.jpg", ratio: "1598/2400", caption: "KOREA 우산 아래 태극기를 든 참가자들.", captionEn: "Protesters with Korean flags under a KOREA umbrella." },
      { src: "images/news/olympic-07.jpg", ratio: "2400/1598", caption: "바닥에 펼쳐 놓은 손글씨 구호들.", captionEn: "Handwritten slogans laid out on the pavement." },
      { src: "images/news/olympic-08.jpg", ratio: "2400/1598", caption: "난간에 붙은 ‘재선거’ 손팻말들.", captionEn: "‘Re-election’ signs taped along a railing." },
      { src: "images/news/olympic-09.jpg", ratio: "2400/1598", caption: "창가에 붙은 구호를 읽는 사람.", captionEn: "A woman reads the notes taped to the windows." },
      { src: "images/news/olympic-10.jpg", ratio: "1599/2400", caption: "태극기를 메고 걸어가는 참가자.", captionEn: "A protester walks past carrying a Korean flag." }
    ]
  }
];

