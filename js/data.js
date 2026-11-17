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
  email: "hello@seoharu.com",               // [예시]
  instagram: "https://instagram.com/",       // [예시]
  instagramHandle: "@seoharu",               // [예시]
  base: "Seoul, KR",
  edition: "Portfolio Vol. 01",
  year: 2026,

  // 첫 페이지 소개 문단 (HTML 사용 가능)
  intro: [
    "서하루(본명 전은서)는 서울을 기반으로 활동하는 사진가이자 이미지 에디터입니다. 뉴스와 다큐멘터리, 인물 사진을 찍고, 한 장의 사진이 지면과 화면에서 어떻게 읽히는지를 고민하며 셀렉과 크롭, 시퀀스를 편집합니다.",
    "<span class=\"mute\">SEO HARU (Eunseo Jeon) is a Seoul-based photographer and image editor working across news, documentary and portrait photography, with a focus on selection, cropping and sequencing for print and digital media.</span>"
  ],

  workIntro: [
    "현장에서 찍은 사진과, 찍은 사진을 고르고 다듬어 지면에 올린 작업을 함께 모았습니다.",
    "<span class=\"mute\">A selection of photographs made in the field, alongside work on how those photographs are chosen, cropped and placed.</span>"
  ],

  about: [
    "[예시] 서울에서 사진을 공부했고, 지역 일간지 사진부 인턴과 온라인 매체의 이미지 에디터로 일했습니다. 사건의 한가운데보다 그 주변에 남은 사람들의 얼굴과 손에 오래 머무는 편입니다.",
    "[예시] 마감 안에서 수백 장 가운데 한 장을 고르는 일, 그리고 그 한 장이 기사와 제목 옆에서 정확하게 읽히도록 다듬는 일을 좋아합니다.",
    "<span class=\"mute\">[Example] Studied photography in Seoul and has worked as a photo desk intern at a regional daily and as an image editor for an online publication.</span>"
  ],

  cv: [
    { en: "Education", ko: "학력", items: [
      ["2022 — 2026", "OO대학교 사진영상학과 졸업", "B.F.A. Photography, OO University"]
    ]},
    { en: "Experience", ko: "경력", items: [
      ["2026", "OO일보 사진부 인턴", "Photo desk intern, OO Daily"],
      ["2025", "OO매거진 온라인팀 이미지 에디터 (계약)", "Image editor, online, OO Magazine"],
      ["2024 — 2025", "교내 신문사 사진기자", "Staff photographer, university newspaper"]
    ]},
    { en: "Awards & Exhibitions", ko: "수상 · 전시", items: [
      ["2025", "OO 보도사진 공모전 입선", "Selected, OO Press Photo Award"],
      ["2025", "단체전 〈겨울 해안〉, 서울", "Group show, Winter Coast, Seoul"]
    ]},
    { en: "Publications", ko: "게재", items: [
      ["2026", "OO일보 1면 사진 게재 외 24건", "Front page, OO Daily, and 24 others"],
      ["2025", "OO매거진 인물 화보 3건", "Three portrait features, OO Magazine"]
    ]},
    { en: "Skills", ko: "역량", items: [
      ["Editing", "Photo Mechanic, Adobe Lightroom, Photoshop, Capture One", ""],
      ["Workflow", "IPTC 캡션 작성, 마감 셀렉, 지면·온라인 크롭, CMS 업로드", "IPTC captioning, deadline selection, print/web cropping, CMS"],
      ["Equipment", "Sony α7 IV, 24–70mm, 70–200mm, 35mm", ""],
      ["Language", "한국어 (모국어), 영어 (업무 가능)", "Korean (native), English (professional)"]
    ]}
  ]
};

// 분야 — key 는 영문 소문자로 유지하세요
window.FIELDS = {
  news:        { en: "News",        ko: "보도" },
  documentary: { en: "Documentary", ko: "다큐멘터리" },
  portrait:    { en: "Portrait",    ko: "인물" }
};

// 프로젝트 — 이 순서대로 Work 페이지에 놓입니다
window.PROJECTS = [
  {
    id: "01",
    title: "Outside the National Assembly",
    titleKr: "국회 앞",
    field: "news",
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
      { src: "images/news/assembly-01.jpg", ratio: "1714/2400", featured: true, caption: "국회의사당을 배경으로 깃발이 나부끼고 있다.", captionEn: "Flags fly in front of the National Assembly building." },
      { src: "images/news/assembly-02.jpg", ratio: "2400/1714", featured: true, caption: "탄핵을 요구하는 손팻말을 든 시민이 국회 앞 도로를 걷고 있다.", captionEn: "A man carries placards calling for impeachment along the road outside the Assembly." },
      { src: "images/news/assembly-03.jpg", ratio: "1714/2400", caption: "바닥에 붙은 ‘윤석열 체포’ 전단.", captionEn: "Leaflets calling for the president's arrest, stuck to the pavement." },
      { src: "images/news/assembly-04.jpg", ratio: "2400/1714", caption: "발밑에 밟힌 손팻말과 신문.", captionEn: "Placards and newspapers underfoot." }
    ]
  },
  {
    id: "02",
    title: "Hannam-dong",
    titleKr: "한남동 관저 앞",
    field: "news",
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
      { src: "images/news/hannam-01.jpg", ratio: "1714/2400", featured: true, caption: "태극기와 성조기를 든 지지자들이 관저 앞 거리를 걷고 있다.", captionEn: "Supporters carrying Korean and American flags walk outside the residence." },
      { src: "images/news/hannam-02.jpg", ratio: "1714/2400", featured: true, caption: "손팻말을 든 집회 참가자들.", captionEn: "Rally participants holding placards." },
      { src: "images/news/hannam-03.jpg", ratio: "1714/2400", caption: "햇빛을 받으며 구호를 외치는 참가자들.", captionEn: "Participants chant in the afternoon light." }
    ]
  },
  {
    id: "03",
    title: "Olympic Handball Arena",
    titleKr: "올림픽 핸드볼경기장 앞",
    field: "news",
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
      { src: "images/news/olympic-01.jpg", ratio: "1920/2400", featured: true, caption: "‘STOP THE STEAL! 재선거!’ 손팻말을 든 참가자.", captionEn: "A participant holds a sign reading “Stop the steal! Re-election!”" },
      { src: "images/news/olympic-02.jpg", ratio: "1599/2400", featured: true, caption: "닫힌 셔터 앞, 양산 뒤에 앉은 참가자들.", captionEn: "Participants seated behind umbrellas in front of a closed shutter." },
      { src: "images/news/olympic-03.jpg", ratio: "1598/2400", caption: "‘재선거’ 종이를 가슴에 건 참가자.", captionEn: "A participant wearing a “re-election” sign." },
      { src: "images/news/olympic-04.jpg", ratio: "1598/2400", caption: "계단을 메운 참가자들 앞에서 한 남성이 주먹을 들어 올리고 있다.", captionEn: "A man raises his fist in front of participants filling the steps." }
    ]
  },
  {
    id: "04",
    title: "Night Shift",
    titleKr: "야간 근무",
    field: "documentary",
    year: 2026,
    date: "2026. 1.–3.",
    location: "Seoul",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[예시] 서울의 밤을 지키는 사람들을 석 달 동안 따라다녔습니다. 편의점, 택시, 응급실, 새벽 시장. 도시가 잠든 시간에만 보이는 노동의 리듬을 기록했습니다.",
      "<span class=\"mute\">[Example] Three months with the people who keep Seoul running after midnight.</span>"
    ],
    images: [
      { src: "", ratio: "4/5", tone: "#2b2b29", caption: "새벽 2시, 마포의 편의점", captionEn: "2 a.m., a convenience store in Mapo" },
      { src: "", ratio: "3/2", tone: "#1d1e20", caption: "교대를 기다리는 택시 기사", captionEn: "A driver waiting for the shift change" },
      { src: "", ratio: "16/9", tone: "#3c3b38", caption: "응급실 앞 대기실", captionEn: "Emergency room waiting area" },
      { src: "", ratio: "2/3", tone: "#55534f", caption: "가락시장, 오전 4시", captionEn: "Garak Market, 4 a.m." },
      { src: "", ratio: "3/2", tone: "#232322", caption: "퇴근길", captionEn: "Going home" }
    ]
  },
  {
    id: "05",
    title: "Faces of the Market",
    titleKr: "시장의 얼굴",
    field: "portrait",
    year: 2025,
    date: "2025. 10.",
    location: "Mangwon, Seoul",
    role: "Photography, Interview",
    publication: "개인 작업",
    desc: [
      "[예시] 망원시장에서 30년 넘게 장사해 온 상인 열두 명의 초상. 같은 거리, 같은 높이, 같은 빛으로 찍었습니다.",
      "<span class=\"mute\">[Example] Twelve portraits of vendors who have worked at Mangwon Market for over thirty years.</span>"
    ],
    images: [
      { src: "", ratio: "4/5", tone: "#d8d4cc", caption: "떡집 사장 김OO 씨", captionEn: "Kim, rice cake shop" },
      { src: "", ratio: "4/5", tone: "#c9c4bb", caption: "생선가게 이OO 씨", captionEn: "Lee, fishmonger" },
      { src: "", ratio: "4/5", tone: "#bdb8ae", caption: "채소가게 박OO 씨", captionEn: "Park, greengrocer" },
      { src: "", ratio: "4/5", tone: "#e1ddd5", caption: "방앗간 최OO 씨", captionEn: "Choi, mill" }
    ]
  },
  {
    id: "06",
    title: "Winter Coast",
    titleKr: "겨울 해안",
    field: "documentary",
    year: 2025,
    date: "2025. 1.",
    location: "Gangneung",
    role: "Photography",
    publication: "개인 작업",
    desc: [
      "[예시] 관광객이 떠난 겨울 동해안. 문 닫은 횟집과 방파제, 남아 있는 사람들의 일상을 담았습니다.",
      "<span class=\"mute\">[Example] The east coast in winter, after the tourists have gone.</span>"
    ],
    images: [
      { src: "", ratio: "16/9", tone: "#a7a59f", caption: "주문진 방파제", captionEn: "Breakwater, Jumunjin" },
      { src: "", ratio: "3/2", tone: "#bcbab4", caption: "문 닫은 횟집", captionEn: "A closed restaurant" },
      { src: "", ratio: "2/3", tone: "#93918b", caption: "그물을 손질하는 어민", captionEn: "Mending nets" },
      { src: "", ratio: "3/2", tone: "#cfccc5", caption: "해변의 오후", captionEn: "Afternoon on the beach" }
    ]
  }
];

// Notes 페이지 — 한 프로젝트를 사진집으로 엮은 과정 [예시]
// photos 에 프레임 번호별로 실제 사진을 넣을 수 있습니다.  예) 4: { src: "images/ns-004.jpg" }
window.NOTES = {
  title: "Notes",
  titleKr: "작업 노트",
  project: "04",            // 어떤 프로젝트의 노트인지 (PROJECTS 의 id)
  shot: 1240,               // 실제로 찍은 컷 수
  frames: 36,               // 밀착 인화에 보여줄 컷 수
  selects: [2, 4, 7, 11, 12, 16, 19, 22, 25, 28, 31, 35],
  photos: {},
  desc: [
    "[예시] 〈야간 근무〉를 찍은 석 달 동안 1,240컷이 남았습니다. 그중 열두 장을 골라 작은 사진집으로 엮었습니다. 무엇을 남기고 무엇을 버렸는지, 어떤 순서로 놓았는지를 적어둡니다.",
    "<span class=\"mute\">[Example] Notes on turning 1,240 frames from Night Shift into a twelve-photograph book: what stayed, what was left out, and in what order.</span>"
  ],
  steps: {
    contact:  ["밀착 인화", "Contact Sheet", "[예시] 매일 밤 찍은 컷을 다음 날 아침에 훑어봅니다. 테두리가 있는 컷이 마지막까지 남은 열두 장입니다."],
    pairs:    ["남긴 컷과 버린 컷", "Kept & Left Out", "[예시] 거의 같은 순간을 찍은 두 장 가운데 하나만 남겼습니다. 버린 컷이 더 잘 찍힌 경우도 있었습니다."],
    sequence: ["순서", "Sequence", "[예시] 열두 장을 펼침면에 놓아 본 더미입니다. 빈 페이지는 쉬어 가는 자리입니다."],
    text:     ["글", "Text", "[예시] 사진집 맨 뒤에 넣은 짧은 글입니다."]
  },
  pairs: [
    { kept: 4,  left: 3,  note: "[예시] 초점은 왼쪽이 더 정확했지만, 남긴 컷에는 손님이 막 문을 나서는 순간의 빈자리가 있습니다." },
    { kept: 16, left: 17, note: "[예시] 기사님이 카메라를 의식하기 직전의 한 장. 바로 다음 컷부터는 표정이 달라졌습니다." },
    { kept: 28, left: 30, note: "[예시] 더 극적인 컷은 버렸습니다. 이 이야기에는 조용한 사진이 더 많이 필요했습니다." }
  ],
  // 펼침면 [왼쪽, 오른쪽] — null 은 빈 페이지, 숫자는 프레임 번호, { n, bleed: true } 는 페이지 가득
  sequence: [
    [null, 4],
    [7, null],
    [{ n: 11, bleed: true }, 12],
    [null, 16],
    [19, 22],
    [{ n: 25, bleed: true }, null],
    [28, 2],
    [null, 31],
    [35, null]
  ],
  essay: [
    "[예시] 자정이 넘으면 도시의 소리가 바뀝니다. 차 소리가 줄고, 냉장고 돌아가는 소리와 형광등 소리가 들리기 시작합니다. 석 달 동안 그 소리를 따라다녔습니다.",
    "[예시] 처음에는 일하는 사람들을 찍으려 했습니다. 그런데 찍을수록 사람보다 사람이 잠깐 비운 자리에 눈이 갔습니다. 계산대 위에 놓인 컵, 시동이 걸린 채 서 있는 택시, 아무도 앉지 않은 대기실 의자.",
    "[예시] 이 책은 그 빈자리에 대한 기록입니다.",
    "<span class=\"mute\">[Example] After midnight the city changes its sound. For three months I followed it, and found myself photographing the places people had just left.</span>"
  ]
};
