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
