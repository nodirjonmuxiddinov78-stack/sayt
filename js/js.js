localStorage.setItem("name", "alibek");
localStorage.setItem("parol", "alibek123");

function handleLogin() {
  const inp_name = document.querySelector(".inp_name");
  const parol_name = document.querySelector(".parol_name");
  if (!inp_name || !parol_name) return;

  const name = localStorage.getItem("name");
  const parol = localStorage.getItem("parol");
  const user = localStorage.getItem("user");
  const password = localStorage.getItem("password");

  hideEl("alert-error");

  if ((inp_name.value === name && parol_name.value === parol) || (inp_name.value === user && parol_name.value === password)) {
    const displayName = (inp_name.value === user) ? user : "Alibek Tursunov";
    localStorage.setItem("loggedUser", displayName);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "welcome.html";
  } else {
    showEl("alert-error");
  }
}

let btn_add = document.querySelector(".btn_add");
if (btn_add) {
  btn_add.addEventListener("click", handleLogin);
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}

function initWelcome() {
  const name = localStorage.getItem("loggedUser") || "Foydalanuvchi";
  const greetEl = document.getElementById("user-greeting");
  const navEl = document.getElementById("user-name-nav");
  const cabName = document.getElementById("cabinet-name");
  const cabId = document.getElementById("cabinet-id");
  const cabAvatar = document.getElementById("cabinet-avatar");

  if (greetEl) greetEl.textContent = name;
  if (navEl) navEl.textContent = name;
  if (cabName) cabName.textContent = name;
  if (cabId) cabId.textContent = "ID: " + Math.floor(10000 + Math.random() * 89999) + "-USR";
  if (cabAvatar) cabAvatar.textContent = name.charAt(0).toUpperCase();
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("open");
}
document.addEventListener("click", (e) => {
  const menu = document.getElementById("mobile-menu");
  const burger = document.querySelector(".burger");
  if (menu && burger && !menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove("open");
  }
  document.querySelectorAll(".mega-panel.open").forEach(p => {
    if (!p.contains(e.target) && !e.target.closest(".mega-trigger")) {
      p.classList.remove("open");
    }
  });
});

function toggleMega(e, id) {
  e.preventDefault();
  const panel = document.getElementById(id);
  const isOpen = panel.classList.contains("open");
  document.querySelectorAll(".mega-panel").forEach(p => p.classList.remove("open"));
  if (!isOpen) panel.classList.add("open");
}

function initNavActive() {
  document.querySelectorAll(".navlinks > li > a, .dash-nav a, .mobilemenu a").forEach(link => {
    link.addEventListener("click", function () {
      const group = this.closest(".navlinks") || this.closest(".dash-nav") || this.closest(".mobilemenu");
      if (group && group.tagName !== "UL") {
        // dash-nav case
      }
      if (this.closest(".dash-nav") || this.closest(".navlinks")) {
        const scope = this.closest(".navlinks") ? document.querySelectorAll(".navlinks > li > a") : document.querySelectorAll(".dash-nav a");
        scope.forEach(a => a.classList.remove("cur"));
        this.classList.add("cur");
      }
      const menu = document.getElementById("mobile-menu");
      if (menu) menu.classList.remove("open");
    });
  });
}

function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Berkit";
  } else {
    input.type = "password";
    btn.textContent = "Ko'rsat";
  }
}

function filterCourses(group, el) {
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("on"));
  el.classList.add("on");
  document.querySelectorAll(".course-card").forEach(card => {
    const show = group === "all" || card.getAttribute("data-group") === group;
    card.style.display = show ? "" : "none";
  });
}

function goToProfessionCourses(group) {
  const chip = document.querySelector(`.filter-chip[onclick*="filterCourses('${group}'"]`);
  const target = document.getElementById("courses");
  if (chip) {
    filterCourses(group, chip);
  }
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function quickSearchSample(term) {
  const input = document.getElementById("searchInput");
  if (input) {
    input.value = term;
    renderSearchResults(term);
  }
}

function doSearch() {
  const input = document.getElementById("searchInput");
  const query = input ? input.value.trim() : "";
  renderSearchResults(query);
}

function initLiveSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  input.addEventListener("input", () => {
    renderSearchResults(input.value.trim());
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });
}

function renderSearchResults(query) {
  const section = document.getElementById("search-results-section");
  const list = document.getElementById("resultsList");
  const noResult = document.getElementById("no-result");
  const heading = document.getElementById("results-heading");
  if (!section || !list) return;

  if (!query) {
    section.style.display = "none";
    return;
  }

  section.style.display = "block";
  const results = typeof findStudents === "function" ? findStudents(query) : [];

  heading.textContent = results.length
    ? results.length + " ta natija topildi"
    : "Qidiruv natijalari";

  if (!results.length) {
    list.innerHTML = "";
    noResult.style.display = "block";
    return;
  }

  noResult.style.display = "none";

  list.innerHTML = results.map(s => `
    <div class="cert-result" onclick="window.location.href='vacancy.html?id=${s.id}'">
      <div class="cert-result-photos">
        <img class="cert-result-photo" src="${s.photos[0]}" alt="${s.name}">
        <img class="cert-result-photo" src="${s.photos[1]}" alt="${s.name}">
      </div>
      <div>
        <div class="cert-result-name disp">${s.name}</div>
        <div class="cert-result-course">${s.course}</div>
        <div class="cert-result-grid">
          <div>
            <div class="cert-result-stat-label">Sertifikat ID</div>
            <div class="cert-result-stat-val">${s.id}</div>
          </div>
          <div>
            <div class="cert-result-stat-label">Baholash</div>
            <div class="cert-result-stat-val">${s.grade}</div>
          </div>
          <div>
            <div class="cert-result-stat-label">Davomiyligi</div>
            <div class="cert-result-stat-val">${s.startDate} - ${s.endDate}</div>
          </div>
        </div>
        <span class="cert-result-badge">Tasdiqlangan sertifikat</span>
        <button class="cert-result-batafsil" onclick="event.stopPropagation(); openStudentModal('${s.id}')">Batafsil →</button>
      </div>
    </div>
  `).join("");

  setTimeout(() => {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

function renderTopStudents() {
  const grid = document.getElementById("topStudentsGrid");
  if (!grid || typeof studentsData === "undefined") return;
  const top = studentsData.slice(0, 6);
  grid.innerHTML = top.map((s, i) => `
    <div class="top-student-card">
      <div class="top-student-rank">${i + 1}</div>
      <img src="${s.photos[0]}" alt="${s.name}" onerror="this.style.display='none'">
      <h4>${s.name}</h4>
      <div class="crs">${s.course}</div>
      <span class="cert-result-badge">${s.grade}</span>
      <button class="batafsil-btn" onclick="openStudentModal('${s.id}')">Batafsil \u2192</button>
    </div>
  `).join("");
}

function renderGalleryStudents() {
  const grid = document.getElementById("galleryStudentsGrid");
  if (!grid || typeof galleryStudents === "undefined") return;
  grid.innerHTML = galleryStudents.map(s => `
    <div class="top-student-card">
      <img src="${s.photos[0]}" alt="${s.name}" onerror="this.style.display='none'">
      <h4>${s.name}</h4>
      <div class="crs">${s.course}</div>
      <span class="cert-result-badge">${s.photos.length} ta surat</span>
      <button class="batafsil-btn" onclick="openGalleryModal('${s.id}')">Barcha suratlar \u2192</button>
    </div>
  `).join("");
}

function openGalleryModal(id) {
  const s = (typeof getGalleryStudentById === "function") ? getGalleryStudentById(id) : null;
  if (!s) return;
  let modal = document.getElementById("gallery-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "gallery-modal";
    modal.innerHTML = `<div class="smodal-backdrop" onclick="closeGalleryModal()"></div><div class="smodal-box gallery-box"><button class="smodal-close" onclick="closeGalleryModal()">\u2715</button><div class="smodal-inner" id="gallery-modal-content"></div></div>`;
    document.body.appendChild(modal);
  }
  document.getElementById("gallery-modal-content").innerHTML = `
    <div class="gallery-modal-head">
      <h2 class="smodal-name disp">${s.name}</h2>
      <div class="smodal-course">\uD83D\uDCDA ${s.course}</div>
      <p class="smodal-about">${s.about || ""}</p>
      <div class="smodal-stats">
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83C\uDF82 Tug'ilgan yili</div><div class="smodal-stat-val">${s.birthYear || "\u2014"}</div></div>
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83D\uDCC5 Sertifikat sanasi</div><div class="smodal-stat-val">${s.issueDate || "\u2014"}</div></div>
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83D\uDD16 Sertifikat ID</div><div class="smodal-stat-val mono" style="font-size:0.78rem">${s.id}</div></div>
      </div>
    </div>
    <div class="gallery-modal-grid">
      ${s.photos.map(p => `<img src="${p}" alt="${s.name}" class="gallery-modal-photo" onerror="this.style.display='none'">`).join("")}
    </div>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeGalleryModal(); });

function openStudentModal(id) {
  const s = getStudentById(id);
  if (!s) return;
  let modal = document.getElementById("student-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "student-modal";
    modal.innerHTML = `<div class="smodal-backdrop" onclick="closeStudentModal()"></div><div class="smodal-box"><button class="smodal-close" onclick="closeStudentModal()">\u2715</button><div class="smodal-inner" id="smodal-content"></div></div>`;
    document.body.appendChild(modal);
  }
  const gradeColor = (typeof scoreToColor === "function" && s.score) ? scoreToColor(s.score) : (s.grade && s.grade.startsWith("A'lo") ? "#34d399" : "#fbbf24");
  const fallbackSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%232c2745' width='100' height='100'/%3E%3Ctext fill='%238b5cf6' font-size='40' x='50' y='65' text-anchor='middle' font-family='sans-serif'%3E" + s.initials + "%3C/text%3E%3C/svg%3E";
  document.getElementById("smodal-content").innerHTML = `
    <div class="smodal-photos">
      <img src="${s.photos[0]}" alt="${s.name}" class="smodal-photo" onerror="this.src='${fallbackSvg}'">
      ${s.photos[1] ? `<img src="${s.photos[1]}" alt="${s.name}" class="smodal-photo smodal-photo2" onerror="this.style.display='none'">` : ""}
    </div>
    <div class="smodal-info">
      <div class="smodal-badge-row">
        <span class="smodal-rank-badge">\uD83C\uDFC6 TOP O'quvchi</span>
        <span class="smodal-grade" style="background:${gradeColor}22;color:${gradeColor};border:1px solid ${gradeColor}44">${s.grade}</span>
      </div>
      <h2 class="smodal-name disp">${s.name}</h2>
      <div class="smodal-course">\uD83D\uDCDA ${s.course}</div>
      <p class="smodal-about">${s.about || ""}</p>
      <div class="smodal-stats">
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83C\uDF82 Yoshi</div><div class="smodal-stat-val">${s.age || "\u2014"} yosh</div></div>
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83D\uDCCD Shahar</div><div class="smodal-stat-val">${s.city || "\u2014"}</div></div>
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83D\uDCC5 Boshlangan</div><div class="smodal-stat-val">${s.startDate}</div></div>
        <div class="smodal-stat"><div class="smodal-stat-label">\u2705 Tugatilgan</div><div class="smodal-stat-val">${s.endDate}</div></div>
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83D\uDCDC Guvohnoma \u2116</div><div class="smodal-stat-val">${s.guvohnoma}</div></div>
        <div class="smodal-stat"><div class="smodal-stat-label">\uD83D\uDD16 Sertifikat ID</div><div class="smodal-stat-val mono" style="font-size:0.78rem">${s.id}</div></div>
      </div>
      <a href="vacancy.html?id=${s.id}" class="smodal-cert-btn">\uD83D\uDCC4 Sertifikatni ko'rish</a>
    </div>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeStudentModal() {
  const modal = document.getElementById("student-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeStudentModal(); });

function loadCertificateDetail() {
  const nameEl = document.getElementById("c-name");
  if (!nameEl || typeof getStudentById !== "function") return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "40781104-BMX";
  const s = getStudentById(id);

  document.getElementById("c-name").textContent = s.name;
  document.getElementById("c-course").textContent = '"' + s.course + '"';
  document.getElementById("c-start").textContent = s.startDate;
  document.getElementById("c-end").textContent = s.endDate;
  document.getElementById("c-id").textContent = s.id;
  document.getElementById("c-guvohnoma").textContent = s.guvohnoma;
  document.getElementById("c-grade").textContent = s.grade;
  document.getElementById("c-issue").textContent = s.issueDate;

  const photoRow = document.getElementById("c-photos");
  if (photoRow) {
    photoRow.innerHTML = s.photos.map(p => `<img src="${p}" alt="${s.name}">`).join("");
  }

  document.title = s.name + " — Sertifikat";
}

function toggleFaq(el) {
  const wasOpen = el.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(f => f.classList.remove("open"));
  if (!wasOpen) el.classList.add("open");
}

function initDashboardTabs() {
  const navLinks = document.querySelectorAll(".dash-nav a[data-tab], .navlinks a[data-tab], .mobilemenu a[data-tab]");
  if (!navLinks.length) return;

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = link.getAttribute("data-tab");
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  document.querySelectorAll(".dash-tab").forEach(t => t.style.display = "none");
  const target = document.getElementById("tab-" + tab);
  if (target) target.style.display = "block";

  document.querySelectorAll("[data-tab]").forEach(a => a.classList.remove("cur"));
  document.querySelectorAll(`[data-tab="${tab}"]`).forEach(a => a.classList.add("cur"));

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function submitTest() {
  showEl("test-success");
  setTimeout(() => hideEl("test-success"), 5000);
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBox");
  if (!input || !box || !input.value.trim()) return;

  const bubble = document.createElement("div");
  bubble.className = "msg-bubble out";
  bubble.textContent = input.value.trim();
  box.appendChild(bubble);
  box.scrollTop = box.scrollHeight;
  input.value = "";

  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "msg-bubble in";
    reply.textContent = "Xabaringiz qabul qilindi, tez orada javob beraman.";
    box.appendChild(reply);
    box.scrollTop = box.scrollHeight;
  }, 900);
}

function handleResumeUpload(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("resumePreview");
  const dropZone = document.getElementById("dropZone");
  if (!file || !preview) return;

  dropZone.classList.add("drag");

  const sizeKb = Math.round(file.size / 1024);
  preview.innerHTML = `
    <div class="row-item" style="margin-top:14px; border:1px solid var(--line); border-radius:11px; padding:12px 16px">
      <div class="row-item-main">
        <div class="row-icon">F</div>
        <div>
          <div class="row-title">${file.name}</div>
          <div class="row-sub">${sizeKb} KB</div>
        </div>
      </div>
      <span class="badge badge-ok">Tayyor</span>
    </div>
  `;
}

function submitResume() {
  const fileInput = document.getElementById("resumeFile");
  if (!fileInput || !fileInput.files.length) return;
  showEl("resume-success");
  setTimeout(() => hideEl("resume-success"), 5000);
}

function initDropZone() {
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("resumeFile");
  if (!dropZone || !fileInput) return;

  dropZone.addEventListener("dragover", (e) => { e.preventDefault(); dropZone.classList.add("drag"); });
  dropZone.addEventListener("dragleave", () => dropZone.classList.remove("drag"));
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      fileInput.files = e.dataTransfer.files;
      handleResumeUpload({ target: fileInput });
    }
  });
}

function showEl(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "block";
}
function hideEl(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("cabinet-name")) initWelcome();
  if (document.getElementById("c-name")) loadCertificateDetail();
  if (document.getElementById("topStudentsGrid")) renderTopStudents();
  if (document.getElementById("galleryStudentsGrid")) renderGalleryStudents();

  initNavActive();
  initLiveSearch();
  initDropZone();
  initDashboardTabs();
});
