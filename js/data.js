const studentsData = [
  {
    id: "40781104-BMX",
    name: "Barotov Muhammadamin Xusniddin o'g'li",
    initials: "BM",
    course: "Python dasturlash",
    startDate: "14.10.2024",
    endDate: "14.04.2025",
    issueDate: "14.04.2025",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "27",
    age: new Date().getFullYear() - 2009,
    city: "Toshkent",
    about: "PYTHON dasturlash 27-guruh bitiruvchisi. Dasturlashga bo'lgan ishtiyoqi va izlanuvchanligi bilan ajralib turadi.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-04/1745903048_photo_2_2025-04-29_10-02-25.jpg",
      "https://sensorika.academy/uploads/posts/2025-04/1745903030_photo_1_2025-04-29_10-02-25.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/4139-barotov-muhammadamin.html"
  },
  {
    id: "47982309-EKJ",
    name: "Erkinov Komron Jaxongirovich",
    initials: "EK",
    course: "Front-End dasturlash",
    startDate: "29.03.2025",
    endDate: "29.09.2025",
    issueDate: "29.09.2025",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "46",
    age: new Date().getFullYear() - 2010,
    city: "Toshkent",
    about: "FRONT-END 46-guruh bitiruvchisi. Veb-interfeyslar yaratishda yuqori natijalarga erishgan iqtidorli o'quvchi.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-10/1759732326_photo_17_2025-10-06_11-12-08.jpg",
      "https://sensorika.academy/uploads/posts/2025-10/1759732327_photo_15_2025-10-06_11-12-08.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/4854-erkinov-komron.html"
  },
  {
    id: "47701609-XAF",
    name: "Xolmurotov Asliddinbek Fazlitdin o'g'li",
    initials: "XA",
    course: "Python dasturlash",
    startDate: "16.12.2024",
    endDate: "16.06.2025",
    issueDate: "16.06.2025",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "33",
    age: new Date().getFullYear() - 2005,
    city: "Toshkent",
    about: "PYTHON 33-guruh bitiruvchisi. Mashg'ulotlarga doimiy faol qatnashgan, sinfdoshlari orasida yetakchi o'quvchilardan biri.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-09/1758780275_photo_1_2025-09-25_11-00-47.jpg",
      "https://sensorika.academy/uploads/posts/2025-09/1758780270_photo_3_2025-09-25_11-00-47.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/4818-xolmurotov-asliddinbek.html"
  },
  {
    id: "43352805-HAS",
    name: "Hakimov Azizbek Saidovich",
    initials: "HA",
    course: "Python dasturlash",
    startDate: "28.11.2024",
    endDate: "28.05.2025",
    issueDate: "28.05.2025",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "29",
    age: new Date().getFullYear() - 2009,
    city: "Toshkent",
    about: "PYTHON dasturlash 29-guruh bitiruvchisi. Mantiqiy fikrlash va masala yechishda yuqori ko'rsatkichlarga ega.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-05/1748702226_photo_68_2025-05-31_19-12-24.jpg",
      "https://sensorika.academy/uploads/posts/2025-05/1748702246_photo_36_2025-05-31_19-12-24.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/4393-hakimov-azizbek.html"
  },
  {
    id: "43292805-RMJ",
    name: "Ramazonova Moxina Jurabek qizi",
    initials: "RM",
    course: "Python dasturlash",
    startDate: "28.11.2024",
    endDate: "28.05.2025",
    issueDate: "28.05.2025",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "29",
    age: new Date().getFullYear() - 2007,
    city: "Toshkent",
    about: "PYTHON dasturlash 29-guruh bitiruvchisi. Dasturlash asoslarini puxta o'zlashtirgan, ijodiy yondashuvi bilan ajralib turadi.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-05/1748701478_photo_46_2025-05-31_19-12-24.jpg",
      "https://sensorika.academy/uploads/posts/2025-05/1748701446_photo_16_2025-05-31_19-12-24.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/4387-ramazonova-moxina.html"
  },
  {
    id: "38140502-ASS",
    name: "Akramqulov Sardorjon Sunnatillo o'g'li",
    initials: "AS",
    course: "Front-End dasturlash",
    startDate: "06.08.2024",
    endDate: "06.02.2025",
    issueDate: "06.02.2025",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "34",
    age: new Date().getFullYear() - 2008,
    city: "Toshkent",
    about: "FRONT-END 34-guruh bitiruvchisi. Veb-dizayn va dasturlash bo'yicha mustahkam bilim va ko'nikmalarga ega.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-02/1740029804_photo_39_2025-02-20_10-03-41.jpg",
      "https://sensorika.academy/uploads/posts/2025-02/1740029779_photo_38_2025-02-20_10-03-41.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/3893-akramqulov-sardorjon.html"
  },
  {
    id: "38150502-BSS",
    name: "Bekpulatova Shabnam Sherbekovna",
    initials: "BS",
    course: "Front-End dasturlash",
    startDate: "06.08.2024",
    endDate: "06.02.2025",
    issueDate: "06.02.2025",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "34",
    age: new Date().getFullYear() - 2009,
    city: "Toshkent",
    about: "FRONT-END 34-guruh bitiruvchisi. Diqqatliligi va izchilligi bilan kursni yuksak natija bilan tugatdi.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-02/1740029878_photo_44_2025-02-20_10-03-41.jpg",
      "https://sensorika.academy/uploads/posts/2025-02/1740029970_photo_42_2025-02-20_10-03-41.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/3894-bekpulatova-shabnam.html"
  },
  {
    id: "30701106-NUG",
    name: "Norbutayev Umidjon Gofurjon o'g'li",
    initials: "NU",
    course: "Front-End dasturlash",
    startDate: "11.12.2023",
    endDate: "11.06.2024",
    issueDate: "11.06.2024",
    grade: "A'lo (95%)",
    score: 10,
    guvohnoma: "21",
    age: new Date().getFullYear() - 2009,
    city: "Toshkent",
    about: "FRONT-END 21-guruh bitiruvchisi. O'quv dasturini yuqori natijalar bilan muvaffaqiyatli yakunlagan.",
    photos: [
      "https://sensorika.academy/uploads/posts/2025-02/1740552071_photo_34_2025-02-26_11-28-31.jpg",
      "https://sensorika.academy/uploads/posts/2025-02/1740552022_photo_35_2025-02-26_11-28-31.jpg"
    ],
    sourceUrl: "https://sensorika.academy/topstudent/3139-norbutayev-umidjon.html"
  }
];

// ─── Boshqa yo'nalishlar bitiruvchilari (Galereya bo'limi) ─────────────────
const galleryStudents = [
  {
    id: "30013005-BMJ",
    name: "Bahodirov Muhammadali Jonibek o'g'li",
    initials: "BM",
    course: "Grafik dizayn (3DsMAX)",
    issueDate: "30.05.2024",
    birthYear: "2009",
    city: "Toshkent",
    about: "\"3DsMAX\" o'quv kursi bitiruvchisi. Grafik dizayn yo'nalishida ijodiy va sifatli ishlari bilan ajralib turadi.",
    photos: [
      "https://sensorika.academy/uploads/posts/2024-06/1717561337_img_2333-kopirovat.jpg",
      "https://sensorika.academy/uploads/posts/2024-06/1717560824_img_2338-kopirovat.jpg",
      "https://sensorika.academy/uploads/posts/2024-06/1717560819_img_2332-kopirovat.jpg",
      "https://sensorika.academy/uploads/posts/2024-06/1717483537_bahodirov-muhammadali-jonibek-ogli-kopirovat.png",
      "https://sensorika.academy/uploads/posts/2024-05/1717054962_photo_1_2024-05-30_12-40-46.jpg",
      "https://sensorika.academy/uploads/posts/2024-05/1717054973_kuhnjarender1.jpg",
      "https://sensorika.academy/uploads/posts/2024-05/1717054991_nout.jpg"
    ],
    sourceUrl: "https://sensorika.academy/students/grafik-dizayn/3072-bahodirov-muhammadali.html"
  },
  {
    id: "32023007-RMD",
    name: "Ravshanova Malika Dilshod qizi",
    initials: "RM",
    course: "Kompyuter savodxonligi",
    issueDate: "30.07.2024",
    birthYear: "2005",
    city: "Toshkent",
    about: "\"Kompyuter savodxonligi\" o'quv kursi bitiruvchisi. Zamonaviy dasturlardan foydalanish bo'yicha mustahkam bilimga ega.",
    photos: [
      "https://sensorika.academy/uploads/posts/2024-08/1723173810_photo_6_2024-08-09_08-20-06.jpg",
      "https://sensorika.academy/uploads/posts/2024-08/1723173821_photo_7_2024-08-09_08-20-06.jpg",
      "https://sensorika.academy/uploads/posts/2024-08/1722686046_ravshanova-malika-dilshod-qizi-kopirovat.png"
    ],
    sourceUrl: "https://sensorika.academy/students/kompyuter-savodxonligi/3268-ravshanova-malika.html"
  },
  {
    id: "9090107-ONI",
    name: "Obloberdiyev Nurmuhammad Ilhom o'g'li",
    initials: "ON",
    course: "Grafik dizayn (3DsMAX)",
    issueDate: "02.07.2022",
    birthYear: "2000",
    city: "Toshkent",
    about: "\"3DsMax\" o'quv kursi bitiruvchisi. 3D vizualizatsiya va render sohasida amaliy tajribaga ega.",
    photos: [
      "https://sensorika.academy/uploads/posts/2022-07/1656992366_photo_2022-07-05_08-33-42.jpg",
      "https://sensorika.academy/uploads/posts/2022-07/1656992401_photo_2022-07-05_08-33-42-3.jpg",
      "https://sensorika.academy/uploads/posts/2022-07/1656992393_photo_2022-07-05_08-33-40.jpg",
      "https://sensorika.academy/uploads/posts/2022-07/1656992405_photo_2022-07-05_08-33-38-2.jpg",
      "https://sensorika.academy/uploads/posts/2022-07/1658716423_obloberdiyev-nurmuhammad-ilhom-ogli-kopirovat.png"
    ],
    sourceUrl: "https://sensorika.academy/students/grafik-dizayn/986-obloberdiyev-nurmuhammad.html"
  },
  {
    id: "27841604-TDM",
    name: "Toirov Dinorbek",
    initials: "TD",
    course: "Python dasturlash",
    issueDate: "16.04.2024",
    birthYear: "2009",
    city: "Toshkent",
    about: "\"PYTHON\" dasturlash o'quv kursi bitiruvchisi. Dasturlash asoslarini puxta o'zlashtirgan.",
    photos: [
      "https://sensorika.academy/uploads/posts/2024-04/1713697233_photo_2024-04-20_20-26-32.jpg",
      "https://sensorika.academy/uploads/posts/2024-04/1713697255_photo_2024-04-20_20-26-30.jpg"
    ],
    sourceUrl: "https://sensorika.academy/students/python-dasturlash/2858-toirov-dinorbek.html"
  },
  {
    id: "29651805-ATN",
    name: "Ataullayev Timurbek Nodirjonovich",
    initials: "AT",
    course: "Python dasturlash",
    issueDate: "20.05.2024",
    birthYear: "2009",
    city: "Toshkent",
    about: "\"PYTHON\" dasturlash o'quv kursi bitiruvchisi. Mantiqiy fikrlash va masala yechishda yaxshi natijalarga erishgan.",
    photos: [
      "https://sensorika.academy/uploads/posts/2024-05/1716870269_photo_5_2024-05-28_09-10-50.jpg",
      "https://sensorika.academy/uploads/posts/2024-05/1716870266_photo_23_2024-05-28_09-10-50.jpg",
      "https://sensorika.academy/uploads/posts/2024-05/1716218438_ataullayev-timurbek-nodirjonovich-kopirovat.png"
    ],
    sourceUrl: "https://sensorika.academy/students/python-dasturlash/3036-ataullayev-timurbek.html"
  }
];

function getGalleryStudentById(id) {
  return galleryStudents.find(s => s.id === id) || galleryStudents[0];
}

function findStudents(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return studentsData.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.id.toLowerCase().includes(q) ||
    s.course.toLowerCase().includes(q)
  );
}

function getStudentById(id) {
  return studentsData.find(s => s.id === id) || studentsData[0];
}

// ─── 10 ballik baholash tizimi ─────────────────────────────
// score: 1-10 oraliqdagi son. Matnli "grade" shu balldan hosil bo'ladi.
function scoreToGradeLabel(score) {
  score = Math.max(1, Math.min(10, Number(score) || 0));
  const pct = score * 10;
  let label;
  if (score >= 9)      label = "A'lo";
  else if (score >= 7)  label = "Yaxshi";
  else if (score >= 5)  label = "Qoniqarli";
  else                  label = "Qoniqarsiz";
  return `${label} (${pct}%)`;
}

function scoreToColor(score) {
  score = Number(score) || 0;
  if (score >= 9) return '#34d399';
  if (score >= 7) return '#8b5cf6';
  if (score >= 5) return '#fbbf24';
  return '#f87171';
}

// Admin panelda saqlangan baholarni studentsData ustiga qo'llash
function applyStoredGrades() {
  try {
    const raw = localStorage.getItem('student_grades');
    if (!raw) return;
    const grades = JSON.parse(raw); // { "ID": score, ... }
    studentsData.forEach(s => {
      if (grades[s.id] !== undefined) {
        s.score = grades[s.id];
        s.grade = scoreToGradeLabel(s.score);
      }
    });
  } catch (e) { /* noop */ }
}

function saveStudentGrade(id, score) {
  score = Math.max(1, Math.min(10, Number(score) || 1));
  let grades = {};
  try {
    grades = JSON.parse(localStorage.getItem('student_grades') || '{}');
  } catch (e) {}
  grades[id] = score;
  localStorage.setItem('student_grades', JSON.stringify(grades));
  const s = getStudentById(id);
  if (s) { s.score = score; s.grade = scoreToGradeLabel(score); }
  return score;
}

// Sahifa yuklanganda saqlangan baholarni darhol qo'llaymiz
applyStoredGrades();
