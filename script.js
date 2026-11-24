/**
 * ==============================================================================
 * NABILA'S CUTE SPACE - SKRIP UTAMA (script.js)
 * Mata Kuliah: Manajemen dan Sistem Informasi Perikanan (MSIP)
 * Mahasiswi: Nabila Revalia Andini - Fakultas Perikanan dan Ilmu Kelautan ULM
 * ==============================================================================
 */

// Menunggu dokumen HTML siap sebelum inisialisasi aplikasi
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTasksModule();
  initBiodataModule();
  initGalleryModule();
});

/* ==============================================================================
   1. MODUL NAVIGASI & PERPINDAHAN HALAMAN (SPA)
   ============================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link, .nav-brand");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinksList = document.getElementById("navLinks");
  const btnScrollToTasks = document.getElementById("btnScrollToTasks");

  // Toggle Menu Hamburger di Layar HP
  if (hamburgerBtn && navLinksList) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navLinksList.classList.toggle("active");
      hamburgerBtn.classList.toggle("active");
      hamburgerBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  // Event klik link navigasi (Home, Biodata, Gallery)
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = link.getAttribute("data-page");
      if (targetPage) {
        navigateToPage(targetPage);
      }
    });
  });

  // Tombol Hero: "Lihat Daftar Tugas" (scroll halus ke bagian tugas)
  if (btnScrollToTasks) {
    btnScrollToTasks.addEventListener("click", () => {
      const tasksSection = document.getElementById("tasksSection");
      if (tasksSection) {
        tasksSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Cek hash di URL browser saat halaman dimuat
  const initialHash = window.location.hash.replace("#", "");
  if (["home", "biodata", "gallery"].includes(initialHash)) {
    navigateToPage(initialHash);
  } else {
    navigateToPage("home");
  }
}

/**
 * Berpindah halaman tanpa reload dengan animasi fade halus
 * @param {string} pageId - 'home', 'biodata', atau 'gallery'
 */
function navigateToPage(pageId) {
  const allSections = document.querySelectorAll(".page-section");
  allSections.forEach((sec) => sec.classList.remove("active"));

  const targetSection = document.getElementById(`page-${pageId}`);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  const allNavLinks = document.querySelectorAll(".nav-links .nav-link");
  allNavLinks.forEach((link) => {
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinksList = document.getElementById("navLinks");
  if (hamburgerBtn && navLinksList) {
    hamburgerBtn.classList.remove("active");
    navLinksList.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  window.history.replaceState(null, "", `#${pageId}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==============================================================================
   2. MODUL TUGAS SAYA (HOME)
   - Tugas 1: Biodata Diri (Hasil tugas: Folder & Index Website Sistem Nabs)
   - Tugas 2: Formulir Data Diri Teman (3 bagian: GForm, Spreadsheet, Looker Studio)
   - Tugas 3: Analisis Kepuasan ShopeePay & PIECES (5 bagian: GForm, Spreadsheet, Visualisasi, PIECES, Excel)
   - Tugas 4: Tugas Akhir Mandiri (3 Bagian Utama, masing-masing 3 Sub-Bagian)
   - Tugas 5: Tugas Akhir Kelompok (POKDAKAN)
   ============================================================================== */
const STORAGE_KEY_TASKS = "nabila_tasks_msip_v13";

const defaultTasks = [
  {
    id: "task-1",
    number: "Tugas 1",
    title: "Biodata Diri",
    desc: "Isinya tentang data diriku, terlampir website online GitHub Pages dan index data diri yang dapat dibuka langsung.",
    notes: "Tugas 1: Pembuatan biodata diri interaktif mahasiswa MSIP ULM. Hasil tugas di-hosting online di GitHub Pages (https://nabilaandini28.github.io/Nabila-Revalia-Andini/) serta terintegrasi pada sistem lokal ini.",
    status: "Selesai",
    badgeInfo: "🌐 2 Bagian: GitHub Pages & Index Biodata",
    parts: [
      {
        title: "🌐 Bagian 1: Buka Website Tugas 1 (GitHub Pages)",
        desc: "Membuka website online biodata diri di GitHub Pages (Klik untuk membuka ↗)",
        actionType: "link",
        url: "https://nabilaandini28.github.io/Nabila-Revalia-Andini/"
      },
      {
        title: "📄 Bagian 2: Buka Index Biodata Diri Lokal",
        desc: "Membuka halaman index profil biodata diri lengkap pada sistem ini",
        actionType: "biodata"
      }
    ]
  },
  {
    id: "task-2",
    number: "Tugas 2",
    title: "Formulir Data Diri Teman & Spreadsheet",
    desc: "GForm formulir data diri teman, lembar spreadsheet hasil rekapitulasi data, serta visualisasi data diri interaktif (3 bagian siap dibuka langsung).",
    notes: "Pengumpulan kuesioner data diri rekan mahasiswa via Google Form, pengolahan rekap data spreadsheet, serta visualisasi data interaktif menggunakan Google Looker Studio.",
    status: "Selesai",
    badgeInfo: "📊 3 Bagian: GForm, Spreadsheet & Visualisasi Data",
    parts: [
      {
        title: "📋 Bagian 1: Buka Google Form (Formulir Data Diri Teman)",
        desc: "Tautan kuesioner formulir data diri teman (Klik untuk membuka langsung ↗)",
        actionType: "link",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfPPy07XdBjWNvOQRVjJ-RGY4T0AvWy4w4R68wv3zNihSM0Mg/viewform"
      },
      {
        title: "📊 Bagian 2: Buka Spreadsheet Hasil Google Form",
        desc: "Tautan dokumen Google Sheets rekap respons teman (Klik untuk membuka langsung ↗)",
        actionType: "link",
        url: "https://docs.google.com/spreadsheets/d/1nb_HUhnjYVDa2JzcSBq2GgBi4Jj4rWfRGr7JJKWgs9s/edit"
      },
      {
        title: "📈 Bagian 3: Visualisasi Data Diri",
        desc: "Dashboard Looker Studio Visualisasi Data Diri Teman (Klik untuk membuka langsung ↗)",
        actionType: "link",
        url: "https://datastudio.google.com/reporting/66f0d8ff-0a47-46c5-a738-05ce7f562a94"
      }
    ]
  },
  {
    id: "task-3",
    number: "Tugas 3",
    title: "Analisis Kepuasan Penggunaan E-Wallet ShopeePay",
    desc: "Survei kepuasan ShopeePay, data spreadsheet respon, visualisasi Looker Studio, dashboard metode PIECES (82.06% - Puas), dan berkas Excel perhitungan asli.",
    notes: "Riset analisis kepuasan responden pengguna dompet digital ShopeePay menggunakan Google Form, Google Sheets, visualisasi data Looker Studio, evaluasi komprehensif 6 dimensi metode PIECES, serta berkas spreadsheet Excel asli (.xlsx).",
    status: "Selesai",
    badgeInfo: "📑 5 Bagian: GForm, Spreadsheet, Visualisasi, PIECES & Excel Asli",
    parts: [
      {
        title: "📋 Bagian 1: Buka Google Form (Survei ShopeePay)",
        desc: "Analisis Tingkat Kepuasan Responden dalam Penggunaan Dompet Digital ShopeePay (Klik untuk membuka ↗)",
        actionType: "link",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdweRWMeRkTwj4-hYV7gxNtWcL59GA4QtgWCTpwmKbuBKO9kQ/viewform"
      },
      {
        title: "📊 Bagian 2: Buka Spreadsheet Hasil Survei ShopeePay",
        desc: "Analisis Tingkat Kepuasan Responden ShopeePay (Jawaban) - Google Spreadsheet (Klik untuk membuka ↗)",
        actionType: "link",
        url: "https://docs.google.com/spreadsheets/d/1Set28auDIRU5tSAYzW_AOiihMWFkcgv_SuP1BO2KMT8/edit?gid=2146027661#gid=2146027661"
      },
      {
        title: "📈 Bagian 3: Visualisasi Data Analisis Tingkat Kepuasan Penggunaan Dompet Digital ShopeePay",
        desc: "Dashboard Looker Studio Visualisasi Kepuasan ShopeePay (Klik untuk membuka langsung ↗)",
        actionType: "link",
        url: "https://datastudio.google.com/reporting/c006706b-a175-48d5-aa8e-0d752ffe09cd"
      },
      {
        title: "📑 Bagian 4: Hasil Analisis Framework PIECES",
        desc: "Tabel dan rekapitulasi lengkap hasil perhitungan 6 dimensi PIECES (Skor 4.10 / 82.06% - Kategori: Puas)",
        actionType: "pieces"
      },
      {
        title: "📊 Bagian 5: Berkas Excel Analisis & Diagram Asli (.xlsx)",
        desc: "Unduh / buka berkas Excel asli (.xlsx) hasil analisis kepuasan ShopeePay beserta grafik diagram dan formulasi lengkap",
        actionType: "download",
        fileUrl: "Analisis_PIECES_Kepuasan_Penggunaan_Dompet_Digital_ShopeePay.xlsx",
        fileName: "Analisis_PIECES_Kepuasan_Penggunaan_Dompet_Digital_ShopeePay.xlsx"
      }
    ]
  },
  {
    id: "task-4",
    number: "Tugas 4",
    title: "Tugas Akhir Mandiri",
    desc: "Tugas Akhir Mandiri terdiri atas 3 bagian utama: Data Tamu Kelompok, Data Agenda Surat, dan Data Notulen Rapat Kelompok (masing-masing memiliki 3 sub-bagian: GForm, Spreadsheet, & Visualisasi Data).",
    notes: "Tugas Akhir Mandiri Nabila Revalia Andini. Terdiri dari 3 bagian data utama dan 9 sub-bagian instrumen pengumpulan data, rekapitulasi spreadsheet, serta dashboard visualisasi interaktif.",
    status: "Sedang Dikerjakan",
    badgeInfo: "📂 3 Bagian Utama & 9 Sub-Bagian Lengkap",
    parts: [
      {
        groupTitle: "📁 Bagian 1: Data Tamu Kelompok",
        subparts: [
          {
            title: "📋 1.1 Google Form Tamu Kelompok",
            desc: "Formulir kuesioner pendataan tamu kelompok (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Google Form Tamu Kelompok",
            viewerContent: "Tautan formulir Google Form pendataan Tamu Kelompok (akan segera disusul oleh Nabila)."
          },
          {
            title: "📊 1.2 Spreadsheet Data Tamu Kelompok",
            desc: "Lembar Google Sheets respon data tamu kelompok (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Spreadsheet Data Tamu Kelompok",
            viewerContent: "Lembar kerja spreadsheet hasil respon pendataan tamu kelompok (akan segera disusul oleh Nabila)."
          },
          {
            title: "📈 1.3 Visualisasi Data Tamu Kelompok",
            desc: "Dashboard Looker Studio visualisasi data tamu kelompok (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Visualisasi Data Tamu Kelompok",
            viewerContent: "Dashboard visualisasi interaktif data tamu kelompok (akan segera disusul oleh Nabila)."
          }
        ]
      },
      {
        groupTitle: "📁 Bagian 2: Data Agenda Surat",
        subparts: [
          {
            title: "📋 2.1 Google Form Agenda Surat",
            desc: "Formulir kuesioner pendataan agenda surat masuk/keluar (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Google Form Agenda Surat",
            viewerContent: "Tautan kuesioner Google Form pendataan agenda surat masuk/keluar (akan segera disusul oleh Nabila)."
          },
          {
            title: "📊 2.2 Spreadsheet Data Agenda Surat",
            desc: "Lembar Google Sheets rekap data agenda surat (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Spreadsheet Data Agenda Surat",
            viewerContent: "Lembar spreadsheet rekapitulasi data agenda surat (akan segera disusul oleh Nabila)."
          },
          {
            title: "📈 2.3 Visualisasi Data Agenda Surat",
            desc: "Dashboard Looker Studio visualisasi agenda surat (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Visualisasi Data Agenda Surat",
            viewerContent: "Dashboard visualisasi interaktif agenda surat (akan segera disusul oleh Nabila)."
          }
        ]
      },
      {
        groupTitle: "📁 Bagian 3: Data Notulen Rapat Kelompok",
        subparts: [
          {
            title: "📋 3.1 Google Form Notulen Rapat Kelompok",
            desc: "Formulir pencatatan notulen rapat kelompok (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Google Form Notulen Rapat Kelompok",
            viewerContent: "Tautan formulir pencatatan notulen rapat kelompok (akan segera disusul oleh Nabila)."
          },
          {
            title: "📊 3.2 Spreadsheet Data Notulen Rapat Kelompok",
            desc: "Lembar Google Sheets hasil rekapitulasi notulen rapat (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Spreadsheet Data Notulen Rapat Kelompok",
            viewerContent: "Lembar spreadsheet dokumentasi notulen rapat kelompok (akan segera disusul oleh Nabila)."
          },
          {
            title: "📈 3.3 Visualisasi Data Notulen Rapat Kelompok",
            desc: "Dashboard Looker Studio visualisasi notulen rapat kelompok (Klik untuk membuka ↗)",
            actionType: "preview",
            viewerTitle: "Visualisasi Data Notulen Rapat Kelompok",
            viewerContent: "Dashboard visualisasi interaktif notulen rapat kelompok (akan segera disusul oleh Nabila)."
          }
        ]
      }
    ]
  },
  {
    id: "task-5",
    number: "Tugas 5",
    title: "Tugas Akhir Kelompok (POKDAKAN)",
    desc: "Tugas akhir riset berkelompok mengenai POKDAKAN (Kelompok Pembudidaya Ikan). Berisi 1 bagian berkas laporan proyek.",
    notes: "Laporan proyek tugas akhir riset berkelompok mengenai POKDAKAN (Kelompok Pembudidaya Ikan) di Kalimantan Selatan. Belum dikerjakan dan akan segera disusul.",
    status: "Belum Dikerjakan",
    badgeInfo: "👥 1 Bagian: Laporan Proyek POKDAKAN (Menyusul)",
    parts: [
      {
        title: "👥 Bagian 1: Laporan Proyek POKDAKAN (Menyusul)",
        desc: "Tugas akhir kelompok belum dikerjakan, tautan/laporan akan segera disusul",
        actionType: "preview",
        viewerTitle: "Tugas Akhir Kelompok (POKDAKAN)",
        viewerContent: "Laporan tugas akhir kelompok mengenai POKDAKAN (Kelompok Pembudidaya Ikan) saat ini belum dikerjakan dan akan segera disusul oleh kelompok Nabila."
      }
    ]
  }
];

let tasksData = [];

function initTasksModule() {
  loadTasksData();
  renderTaskCards();
  initTaskModalEvents();
  initDataViewerEvents();
}

function loadTasksData() {
  const saved = localStorage.getItem(STORAGE_KEY_TASKS);
  if (saved) {
    try {
      tasksData = JSON.parse(saved);
    } catch (e) {
      tasksData = [...defaultTasks];
    }
  } else {
    tasksData = [...defaultTasks];
    saveTasksData();
  }
}

function saveTasksData() {
  localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasksData));
}

function renderTaskCards() {
  const tasksGrid = document.getElementById("tasksGrid");
  if (!tasksGrid) return;

  tasksGrid.innerHTML = "";

  tasksData.forEach((task) => {
    const isCompleted = task.status === "Selesai";
    const statusClass = isCompleted ? "selesai" : "proses";
    const statusIcon = isCompleted ? "✅" : "⏳";

    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <div>
        <div class="task-card-header">
          <span class="task-number-pill">📌 ${escapeHTML(task.number)}</span>
          <span class="task-status-pill ${statusClass}">${statusIcon} ${escapeHTML(task.status)}</span>
        </div>
        <h3 class="task-title">${escapeHTML(task.title)}</h3>
        <p class="task-desc">${escapeHTML(task.desc)}</p>
        
        <div class="task-parts-badge">
          <span>${escapeHTML(task.badgeInfo || "📂 Data Siap Dibuka")}</span>
        </div>
      </div>
      <div class="task-footer">
        <button class="btn-open-task" onclick="openTaskModal('${task.id}')">
          <span>Buka Tugas</span>
          <span style="font-size: 1.05rem;">📂</span>
        </button>
      </div>
    `;
    tasksGrid.appendChild(card);
  });
}

function openTaskModal(taskId) {
  const task = tasksData.find((t) => t.id === taskId);
  if (!task) return;

  document.getElementById("editTaskId").value = task.id;
  document.getElementById("modalTaskBadge").textContent = task.number;
  document.getElementById("modalTaskHeading").textContent = `Detail ${task.number}`;
  document.getElementById("editTaskTitle").value = task.title;
  document.getElementById("editTaskDesc").value = task.desc;
  document.getElementById("editTaskNotes").value = task.notes || "";
  document.getElementById("editTaskStatus").value = task.status || "Selesai";

  // Render tombol-tombol berkas yang bisa dibuka
  const linksContainer = document.getElementById("taskActionLinksList");
  linksContainer.innerHTML = "";

  if (task.parts && task.parts.length > 0) {
    task.parts.forEach((part) => {
      // Jika part memiliki subparts (seperti Tugas 4 dengan 3 bagian & per bagian ada 3 sub-bagian)
      if (part.subparts && Array.isArray(part.subparts)) {
        const groupEl = document.createElement("div");
        groupEl.className = "task-part-group";

        const groupHeader = document.createElement("div");
        groupHeader.className = "task-part-group-header";
        groupHeader.innerHTML = `<span>${escapeHTML(part.groupTitle || "Bagian Tugas")}</span>`;
        groupEl.appendChild(groupHeader);

        const sublistEl = document.createElement("div");
        sublistEl.className = "task-part-sublist";

        part.subparts.forEach((sub) => {
          const subBtn = document.createElement("button");
          subBtn.type = "button";
          subBtn.className = "btn-open-subitem";

          let subBadge = "👉 Buka";
          if (sub.actionType === "link") subBadge = "🌐 Buka Tautan ↗";
          else if (sub.actionType === "download") subBadge = "📥 Unduh";

          subBtn.innerHTML = `
            <div style="text-align: left; padding-right: 8px;">
              <div style="font-weight: 700; color: #1E3A8A; font-size: 0.88rem;">${escapeHTML(sub.title)}</div>
              <small style="color: #64748B; font-weight: 500; font-size: 0.8rem;">${escapeHTML(sub.desc)}</small>
            </div>
            <span class="item-arrow" style="font-size: 0.8rem; font-weight: 700; color: #2563EB; white-space: nowrap;">${subBadge}</span>
          `;

          subBtn.addEventListener("click", () => {
            handleTaskPartClick(sub, task);
          });

          sublistEl.appendChild(subBtn);
        });

        groupEl.appendChild(sublistEl);
        linksContainer.appendChild(groupEl);
      } else {
        // Flat part biasa (Tugas 1, 2, 3, 5)
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-open-section-item";
        
        let badgeTag = "👉 Klik untuk Buka";
        if (part.actionType === "link") badgeTag = "🌐 Buka Tautan Eksternal ↗";
        else if (part.actionType === "download") badgeTag = "📥 Unduh Berkas Asli 💾";
        else if (part.actionType === "pieces") badgeTag = "📊 Buka Dashboard PIECES ✨";

        btn.innerHTML = `
          <div style="text-align: left; padding-right: 10px;">
            <div style="color: #1E3A8A; font-weight: 700;">${escapeHTML(part.title)}</div>
            <small style="color: #64748B; font-weight: 500; font-size: 0.82rem;">${escapeHTML(part.desc)}</small>
          </div>
          <span class="item-arrow" style="font-size: 0.85rem; font-weight: 700; color: #2563EB; white-space: nowrap;">${badgeTag}</span>
        `;

        btn.addEventListener("click", () => {
          handleTaskPartClick(part, task);
        });

        linksContainer.appendChild(btn);
      }
    });
  }

  const modal = document.getElementById("taskModal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function handleTaskPartClick(part, task) {
  if (part.actionType === "biodata") {
    closeTaskModal();
    navigateToPage("biodata");
    showToast("Membuka Index Biodata Diri Nabila 🌸", "success");
  } else if (part.actionType === "link" && part.url) {
    // Buka link asli Google Form / Spreadsheet di tab baru
    window.open(part.url, "_blank");
    showToast("Membuka tautan di tab baru! 🚀", "success");
  } else if (part.actionType === "pieces") {
    closeTaskModal();
    openPiecesAnalysisModal();
    showToast("Menampilkan Hasil Analisis PIECES ShopeePay 📊✨", "success");
  } else if (part.actionType === "download") {
    const a = document.createElement("a");
    a.href = part.fileUrl || "Analisis_PIECES_Kepuasan_Penggunaan_Dompet_Digital_ShopeePay.xlsx";
    a.download = part.fileName || "Analisis_PIECES_Kepuasan_Penggunaan_Dompet_Digital_ShopeePay.xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Mengunduh berkas Excel Analisis PIECES ShopeePay! 📥📊", "success");
  } else {
    // Tinjauan berkas
    openDataViewer(
      part.viewerTitle || part.title,
      part.viewerContent || `Berkas ${part.title} siap diakses.`
    );
  }
}

function closeTaskModal() {
  const modal = document.getElementById("taskModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

function initTaskModalEvents() {
  const modal = document.getElementById("taskModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const cancelBtn = document.getElementById("modalCancelBtn");
  const saveBtn = document.getElementById("modalSaveTaskBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeTaskModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeTaskModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeTaskModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeTaskModal();
      closeLightbox();
      closeDataViewer();
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const taskId = document.getElementById("editTaskId").value;
      const title = document.getElementById("editTaskTitle").value.trim();
      const desc = document.getElementById("editTaskDesc").value.trim();
      const notes = document.getElementById("editTaskNotes").value.trim();
      const status = document.getElementById("editTaskStatus").value;

      if (!title || !desc) {
        showToast("Judul dan deskripsi tidak boleh kosong yaa!", "danger");
        return;
      }

      const taskIndex = tasksData.findIndex((t) => t.id === taskId);
      if (taskIndex !== -1) {
        tasksData[taskIndex].title = title;
        tasksData[taskIndex].desc = desc;
        tasksData[taskIndex].notes = notes;
        tasksData[taskIndex].status = status;

        saveTasksData();
        renderTaskCards();
        closeTaskModal();
        showToast("Tugas berhasil diperbarui! 💙", "success");
      }
    });
  }
}

/* ==============================================================================
   DATA VIEWER MODAL
   ============================================================================== */
function initDataViewerEvents() {
  const viewerModal = document.getElementById("dataViewerModal");
  const closeBtn = document.getElementById("dataViewerCloseBtn");
  const actionBtn = document.getElementById("dataViewerActionBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeDataViewer);
  if (actionBtn) actionBtn.addEventListener("click", closeDataViewer);

  if (viewerModal) {
    viewerModal.addEventListener("click", (e) => {
      if (e.target === viewerModal) {
        closeDataViewer();
      }
    });
  }
}

function openDataViewer(title, content) {
  const heading = document.getElementById("dataViewerHeading");
  const body = document.getElementById("dataViewerBody");
  const modal = document.getElementById("dataViewerModal");
  const badge = document.getElementById("dataViewerBadge");
  const modalContent = document.getElementById("dataViewerModalContent");

  if (modalContent) modalContent.style.maxWidth = "600px";
  if (badge) badge.textContent = "Berkas Terbuka";
  if (heading) heading.textContent = title;
  if (body) {
    body.innerHTML = `
      <div style="font-size: 2.8rem; margin-bottom: 14px;">📂</div>
      <p style="font-size: 1rem; color: #1E293B; line-height: 1.7; margin-bottom: 16px;">${escapeHTML(content)}</p>
      <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 12px; font-size: 0.85rem; color: #1D4ED8;">
        💡 <em>Kamu bisa mengubah atau menambahkan link kustom kapan saja melalui tombol Edit Tugas!</em>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function closeDataViewer() {
  const modal = document.getElementById("dataViewerModal");
  const modalContent = document.getElementById("dataViewerModalContent");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
  if (modalContent) {
    modalContent.style.maxWidth = "600px";
  }
}

/* ==============================================================================
   MODAL ANALISIS FRAMEWORK PIECES (TUGAS 3 SHOPEEPAY)
   - Sampel: 11 Responden
   - 30 Butir Pertanyaan (5 Pertanyaan x 6 Dimensi)
   - Skor Total (JSK): 1.354 / 1.650
   - Rata-rata Skor: 4.10 / 5.00 (82.06%) -> Kategori: PUAS
   ============================================================================== */
function openPiecesAnalysisModal() {
  const heading = document.getElementById("dataViewerHeading");
  const body = document.getElementById("dataViewerBody");
  const modal = document.getElementById("dataViewerModal");
  const badge = document.getElementById("dataViewerBadge");
  const modalContent = document.getElementById("dataViewerModalContent");

  if (modalContent) modalContent.style.maxWidth = "880px";
  if (badge) badge.textContent = "📑 Framework PIECES";
  if (heading) heading.textContent = "Hasil Analisis Kepuasan E-Wallet ShopeePay";

  if (body) {
    body.innerHTML = `
      <div class="pieces-container">
        <!-- Hero Card Ringkasan -->
        <div class="pieces-hero-card">
          <div class="pieces-hero-header">
            💳 Rekapitulasi Analisis Kepuasan Pengguna E-Wallet ShopeePay
          </div>
          <div class="pieces-hero-meta">
            Mata Kuliah: Manajemen dan Sistem Informasi Perikanan (MSIP) &bull; Sampel: 11 Responden &bull; 30 Butir Pertanyaan Likert (1 - 5)
          </div>
          <div class="pieces-stats-grid">
            <div class="pieces-stat-box">
              <div class="pieces-stat-label">Total Skor (JSK)</div>
              <div class="pieces-stat-value">1.354 <span style="font-size: 0.8rem; font-weight: normal;">/ 1.650</span></div>
            </div>
            <div class="pieces-stat-box">
              <div class="pieces-stat-label">Rata-Rata (Mean)</div>
              <div class="pieces-stat-value">4.10 <span style="font-size: 0.8rem; font-weight: normal;">/ 5.00</span></div>
            </div>
            <div class="pieces-stat-box">
              <div class="pieces-stat-label">Persentase (%)</div>
              <div class="pieces-stat-value">82.06%</div>
            </div>
            <div class="pieces-stat-box">
              <div class="pieces-stat-label">Kategori Akhir</div>
              <div class="pieces-stat-value" style="color: #6EE7B7;">PUAS ✅</div>
            </div>
          </div>
        </div>

        <!-- Tabel 6 Dimensi PIECES -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h4 style="color: #1E3A8A; font-weight: 800; font-size: 1rem; margin: 0;">
            📊 Rekapitulasi 6 Dimensi Framework PIECES
          </h4>
          <span style="font-size: 0.8rem; color: #64748B;">N = 11 Responden</span>
        </div>

        <div class="pieces-table-wrapper">
          <table class="pieces-table">
            <thead>
              <tr>
                <th style="width: 45px; text-align: center;">No</th>
                <th>Dimensi / Variabel</th>
                <th style="text-align: center;">JSK (Skor)</th>
                <th style="text-align: center;">Rata-rata</th>
                <th style="min-width: 140px;">Capaian (%)</th>
                <th style="text-align: center;">Kategori</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 700;">1</td>
                <td>
                  <strong>Performance (Kinerja)</strong><br>
                  <small style="color: #64748B;">Kecepatan akses, kelancaran transaksi, performa aplikasi</small>
                </td>
                <td style="text-align: center; font-weight: 700;">222</td>
                <td style="text-align: center; font-weight: 700; color: #1D4ED8;">4.04</td>
                <td>
                  <div class="pieces-bar-wrapper">
                    <div class="pieces-bar-bg"><div class="pieces-bar-fill" style="width: 80.73%;"></div></div>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #1E293B;">80.73%</span>
                  </div>
                </td>
                <td style="text-align: center;"><span class="pieces-badge pieces-badge-puas">Puas</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 700;">2</td>
                <td>
                  <strong>Information (Informasi)</strong><br>
                  <small style="color: #64748B;">Kejelasan riwayat transaksi, akurasi saldo, promo & notifikasi</small>
                </td>
                <td style="text-align: center; font-weight: 700;">234</td>
                <td style="text-align: center; font-weight: 700; color: #1D4ED8;">4.25</td>
                <td>
                  <div class="pieces-bar-wrapper">
                    <div class="pieces-bar-bg"><div class="pieces-bar-fill" style="width: 85.09%; background: linear-gradient(90deg, #60A5FA, #1D4ED8);"></div></div>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #1E293B;">85.09%</span>
                  </div>
                </td>
                <td style="text-align: center;"><span class="pieces-badge pieces-badge-sangat-puas">Sangat Puas</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 700;">3</td>
                <td>
                  <strong>Economics (Ekonomi)</strong><br>
                  <small style="color: #64748B;">Biaya admin terjangkau, promo & cashback, efisiensi pengeluaran</small>
                </td>
                <td style="text-align: center; font-weight: 700;">218</td>
                <td style="text-align: center; font-weight: 700; color: #1D4ED8;">3.96</td>
                <td>
                  <div class="pieces-bar-wrapper">
                    <div class="pieces-bar-bg"><div class="pieces-bar-fill" style="width: 79.27%;"></div></div>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #1E293B;">79.27%</span>
                  </div>
                </td>
                <td style="text-align: center;"><span class="pieces-badge pieces-badge-puas">Puas</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 700;">4</td>
                <td>
                  <strong>Control & Security (Pengendalian & Keamanan)</strong><br>
                  <small style="color: #64748B;">Keamanan PIN/biometrik, perlindungan privasi & kontrol limit</small>
                </td>
                <td style="text-align: center; font-weight: 700;">225</td>
                <td style="text-align: center; font-weight: 700; color: #1D4ED8;">4.09</td>
                <td>
                  <div class="pieces-bar-wrapper">
                    <div class="pieces-bar-bg"><div class="pieces-bar-fill" style="width: 81.82%;"></div></div>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #1E293B;">81.82%</span>
                  </div>
                </td>
                <td style="text-align: center;"><span class="pieces-badge pieces-badge-puas">Puas</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 700;">5</td>
                <td>
                  <strong>Efficiency (Efisiensi)</strong><br>
                  <small style="color: #64748B;">Kemudahan scan QRIS, top-up praktis, integrasi Shopee & transfer</small>
                </td>
                <td style="text-align: center; font-weight: 700;">232</td>
                <td style="text-align: center; font-weight: 700; color: #1D4ED8;">4.22</td>
                <td>
                  <div class="pieces-bar-wrapper">
                    <div class="pieces-bar-bg"><div class="pieces-bar-fill" style="width: 84.36%; background: linear-gradient(90deg, #60A5FA, #1D4ED8);"></div></div>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #1E293B;">84.36%</span>
                  </div>
                </td>
                <td style="text-align: center;"><span class="pieces-badge pieces-badge-sangat-puas">Sangat Puas</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 700;">6</td>
                <td>
                  <strong>Service (Layanan)</strong><br>
                  <small style="color: #64748B;">Bantuan CS responsif, pusat bantuan/FAQ, penanganan refund</small>
                </td>
                <td style="text-align: center; font-weight: 700;">223</td>
                <td style="text-align: center; font-weight: 700; color: #1D4ED8;">4.05</td>
                <td>
                  <div class="pieces-bar-wrapper">
                    <div class="pieces-bar-bg"><div class="pieces-bar-fill" style="width: 81.09%;"></div></div>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #1E293B;">81.09%</span>
                  </div>
                </td>
                <td style="text-align: center;"><span class="pieces-badge pieces-badge-puas">Puas</span></td>
              </tr>
              <tr class="total-row">
                <td colspan="2" style="text-align: right; padding-right: 18px;">TOTAL & RATA-RATA KESELURUHAN:</td>
                <td style="text-align: center;">1.354</td>
                <td style="text-align: center; font-size: 0.95rem; color: #1E3A8A;">4.10</td>
                <td>
                  <div class="pieces-bar-wrapper">
                    <div class="pieces-bar-bg"><div class="pieces-bar-fill" style="width: 82.06%; background: linear-gradient(90deg, #10B981, #059669);"></div></div>
                    <span style="font-size: 0.8rem; font-weight: 800; color: #065F46;">82.06%</span>
                  </div>
                </td>
                <td style="text-align: center;"><span class="pieces-badge pieces-badge-puas" style="font-weight: 800;">PUAS ✅</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Tombol Buka/Tutup Rincian 30 Butir Pertanyaan -->
        <div style="text-align: center; margin: 12px 0 16px;">
          <button type="button" class="pieces-details-btn" id="piecesToggleDetailsBtn" onclick="togglePiecesBreakdown()">
            <span>🔍 Tampilkan Rincian 30 Butir Pertanyaan (P1 - P5)</span>
          </button>
        </div>

        <!-- Rincian 30 Pertanyaan (Collapsible) -->
        <div id="piecesBreakdownDetails" style="display: none; margin-top: 10px;">
          <div style="background: #F8FAFC; border: 1.5px solid var(--border-cute); border-radius: var(--radius-md); padding: 18px; margin-bottom: 16px;">
            <h5 style="color: #1E3A8A; font-weight: 800; margin-bottom: 12px; font-size: 0.95rem;">
              📋 Rincian Skor Tiap Butir Pertanyaan per Dimensi (N = 11)
            </h5>
            
            <!-- Dimensi 1 -->
            <div class="pieces-subtable-block">
              <div class="pieces-subtable-title">1. Dimensi Performance (Kinerja) - Total Skor: 222 (Mean: 4.04 - Puas)</div>
              <ul style="font-size: 0.82rem; color: #334155; padding-left: 20px; margin: 0; line-height: 1.6;">
                <li><strong>P1:</strong> Kemudahan dan kelancaran akses aplikasi &bull; Skor: 46 &bull; Mean: 4.18 (Puas)</li>
                <li><strong>P2:</strong> Kecepatan pemrosesan transaksi pembayaran &bull; Skor: 46 &bull; Mean: 4.18 (Puas)</li>
                <li><strong>P3:</strong> Kestabilan sistem tanpa hambatan/kendala sering &bull; Skor: 42 &bull; Mean: 3.82 (Puas)</li>
                <li><strong>P4:</strong> Performa saat event promo / transaksi padat &bull; Skor: 41 &bull; Mean: 3.73 (Puas)</li>
                <li><strong>P5:</strong> Kecepatan respon perpindahan menu/fitur &bull; Skor: 47 &bull; Mean: 4.27 (Sangat Puas)</li>
              </ul>
            </div>

            <!-- Dimensi 2 -->
            <div class="pieces-subtable-block">
              <div class="pieces-subtable-title">2. Dimensi Information (Informasi) - Total Skor: 234 (Mean: 4.25 - Sangat Puas)</div>
              <ul style="font-size: 0.82rem; color: #334155; padding-left: 20px; margin: 0; line-height: 1.6;">
                <li><strong>P1:</strong> Kejelasan riwayat dan bukti rincian transaksi &bull; Skor: 49 &bull; Mean: 4.45 (Sangat Puas)</li>
                <li><strong>P2:</strong> Akurasi tampilan saldo dan koin ShopeePay &bull; Skor: 48 &bull; Mean: 4.36 (Sangat Puas)</li>
                <li><strong>P3:</strong> Notifikasi konfirmasi transaksi masuk & keluar &bull; Skor: 48 &bull; Mean: 4.36 (Sangat Puas)</li>
                <li><strong>P4:</strong> Kejelasan panduan dan petunjuk fitur &bull; Skor: 44 &bull; Mean: 4.00 (Puas)</li>
                <li><strong>P5:</strong> Informasi promo & voucher mudah dipahami &bull; Skor: 45 &bull; Mean: 4.09 (Puas)</li>
              </ul>
            </div>

            <!-- Dimensi 3 -->
            <div class="pieces-subtable-block">
              <div class="pieces-subtable-title">3. Dimensi Economics (Ekonomi) - Total Skor: 218 (Mean: 3.96 - Puas)</div>
              <ul style="font-size: 0.82rem; color: #334155; padding-left: 20px; margin: 0; line-height: 1.6;">
                <li><strong>P1:</strong> Tarif biaya admin transaksi yang terjangkau &bull; Skor: 45 &bull; Mean: 4.09 (Puas)</li>
                <li><strong>P2:</strong> Keberadaan promo, diskon, dan cashback &bull; Skor: 45 &bull; Mean: 4.09 (Puas)</li>
                <li><strong>P3:</strong> Efisiensi biaya dibanding pembayaran tunai &bull; Skor: 45 &bull; Mean: 4.09 (Puas)</li>
                <li><strong>P4:</strong> Kebijakan bebas biaya transfer sesuai kuota &bull; Skor: 39 &bull; Mean: 3.55 (Puas)</li>
                <li><strong>P5:</strong> Kesesuaian nilai manfaat dengan pengeluaran &bull; Skor: 44 &bull; Mean: 4.00 (Puas)</li>
              </ul>
            </div>

            <!-- Dimensi 4 -->
            <div class="pieces-subtable-block">
              <div class="pieces-subtable-title">4. Dimensi Control & Security (Pengendalian & Keamanan) - Total Skor: 225 (Mean: 4.09 - Puas)</div>
              <ul style="font-size: 0.82rem; color: #334155; padding-left: 20px; margin: 0; line-height: 1.6;">
                <li><strong>P1:</strong> Keamanan PIN dan otentikasi biometrik &bull; Skor: 47 &bull; Mean: 4.27 (Sangat Puas)</li>
                <li><strong>P2:</strong> Perlindungan kerahasiaan data pribadi &bull; Skor: 45 &bull; Mean: 4.09 (Puas)</li>
                <li><strong>P3:</strong> Verifikasi OTP transaksi mencurigakan &bull; Skor: 43 &bull; Mean: 3.91 (Puas)</li>
                <li><strong>P4:</strong> Pelacakan riwayat saat terjadi kekeliruan &bull; Skor: 46 &bull; Mean: 4.18 (Puas)</li>
                <li><strong>P5:</strong> Kendali pengguna atas limit dan rekening &bull; Skor: 44 &bull; Mean: 4.00 (Puas)</li>
              </ul>
            </div>

            <!-- Dimensi 5 -->
            <div class="pieces-subtable-block">
              <div class="pieces-subtable-title">5. Dimensi Efficiency (Efisiensi) - Total Skor: 232 (Mean: 4.22 - Sangat Puas)</div>
              <ul style="font-size: 0.82rem; color: #334155; padding-left: 20px; margin: 0; line-height: 1.6;">
                <li><strong>P1:</strong> Efisiensi waktu dibanding pembayaran tunai &bull; Skor: 46 &bull; Mean: 4.18 (Puas)</li>
                <li><strong>P2:</strong> Kepraktisan scan QRIS di merchant &bull; Skor: 46 &bull; Mean: 4.18 (Puas)</li>
                <li><strong>P3:</strong> Kemudahan proses top-up via e-banking &bull; Skor: 47 &bull; Mean: 4.27 (Sangat Puas)</li>
                <li><strong>P4:</strong> Integrasi langsung dengan checkout Shopee &bull; Skor: 47 &bull; Mean: 4.27 (Sangat Puas)</li>
                <li><strong>P5:</strong> Kemudahan transfer saldo ke rekening bank &bull; Skor: 46 &bull; Mean: 4.18 (Puas)</li>
              </ul>
            </div>

            <!-- Dimensi 6 -->
            <div class="pieces-subtable-block">
              <div class="pieces-subtable-title">6. Dimensi Service (Layanan) - Total Skor: 223 (Mean: 4.05 - Puas)</div>
              <ul style="font-size: 0.82rem; color: #334155; padding-left: 20px; margin: 0; line-height: 1.6;">
                <li><strong>P1:</strong> Kemudahan akses pusat bantuan & FAQ aplikasi &bull; Skor: 46 &bull; Mean: 4.18 (Puas)</li>
                <li><strong>P2:</strong> Kecepatan respon Customer Service &bull; Skor: 43 &bull; Mean: 3.91 (Puas)</li>
                <li><strong>P3:</strong> Kejelasan solusi penanganan masalah &bull; Skor: 45 &bull; Mean: 4.09 (Puas)</li>
                <li><strong>P4:</strong> Ketepatan penanganan keluhan dan refund &bull; Skor: 45 &bull; Mean: 4.09 (Puas)</li>
                <li><strong>P5:</strong> Sikap ramah dan profesionalisme CS &bull; Skor: 44 &bull; Mean: 4.00 (Puas)</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Interpretasi Skala Likert -->
        <div class="pieces-scale-box">
          <strong style="color: #1E3A8A;">📏 Pedoman Kategori Skala Likert (Interval 0.80):</strong><br>
          &bull; 1.00 &ndash; 1.80 = Sangat Tidak Puas (STP)<br>
          &bull; 1.81 &ndash; 2.60 = Tidak Puas (TP)<br>
          &bull; 2.61 &ndash; 3.40 = Cukup Puas / Netral (CP)<br>
          &bull; <strong>3.41 &ndash; 4.20 = Puas (P) &larr; Skor Keseluruhan: 4.10 (82.06%)</strong><br>
          &bull; 4.21 &ndash; 5.00 = Sangat Puas (SP) &larr; Dicapai pada dimensi <em>Information</em> (4.25) & <em>Efficiency</em> (4.22)
        </div>

        <!-- Berkas Excel Asli & Diagram Download Card -->
        <div style="background: #EFF6FF; border: 1.5px solid #93C5FD; border-radius: var(--radius-md); padding: 16px 20px; margin-top: 18px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
          <div style="text-align: left;">
            <div style="color: #1E3A8A; font-weight: 800; font-size: 1rem;">📊 Berkas Excel Asli (.xlsx) Beserta Diagram &amp; Formulasi</div>
            <small style="color: #475569; font-size: 0.84rem;">Berkas asli Microsoft Excel (.xlsx) hasil analisis kepuasan ShopeePay lengkap dengan seluruh grafik diagram batang dan tabel perhitungan.</small>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="Analisis_PIECES_Kepuasan_Penggunaan_Dompet_Digital_ShopeePay.xlsx" download="Analisis_PIECES_Kepuasan_Penggunaan_Dompet_Digital_ShopeePay.xlsx" class="btn btn-primary" style="font-size: 0.88rem; padding: 10px 20px;">
              <span>📥 Unduh Berkas Excel Asli (.xlsx)</span>
            </a>
          </div>
        </div>

        <!-- Tautan Terkait -->
        <div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdweRWMeRkTwj4-hYV7gxNtWcL59GA4QtgWCTpwmKbuBKO9kQ/viewform" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.82rem; padding: 7px 14px;">
            📋 Buka Google Form ↗
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1Set28auDIRU5tSAYzW_AOiihMWFkcgv_SuP1BO2KMT8/edit?gid=2146027661#gid=2146027661" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.82rem; padding: 7px 14px;">
            📊 Buka Spreadsheet Respon ↗
          </a>
          <a href="https://datastudio.google.com/reporting/c006706b-a175-48d5-aa8e-0d752ffe09cd" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.82rem; padding: 7px 14px;">
            📈 Buka Looker Studio ↗
          </a>
        </div>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function togglePiecesBreakdown() {
  const details = document.getElementById("piecesBreakdownDetails");
  const btn = document.getElementById("piecesToggleDetailsBtn");
  if (!details || !btn) return;

  if (details.style.display === "none" || !details.style.display) {
    details.style.display = "block";
    btn.innerHTML = "<span>🔼 Sembunyikan Rincian 30 Butir Pertanyaan</span>";
  } else {
    details.style.display = "none";
    btn.innerHTML = "<span>🔍 Tampilkan Rincian 30 Butir Pertanyaan (P1 - P5)</span>";
  }
}
window.togglePiecesBreakdown = togglePiecesBreakdown;

/* ==============================================================================
   3. MODUL BIODATA NABILA REVALIA ANDINI
   - Foto Profil Asli Nabila (media_1795090163666_099a2dfa.jpg)
   - Nama: Nabila Revalia Andini
   - TTL: Banjarbaru, 28 April 2006
   - Alamat: Komp. Pondok Kopi No. 6B Loktabat Selatan
   - Kampus: Universitas Lambung Mangkurat
   - Email: nabilaravalia008@gmail.com
   ============================================================================== */
const STORAGE_KEY_BIODATA = "nabila_biodata_msip_v7";

// Foto profil asli Nabila di dalam folder proyek
const REAL_PHOTO_PROFIL = "foto_profil_nabila.jpg";

const defaultBiodata = {
  nama: "Nabila Revalia Andini",
  ttl: "Banjarbaru, 28 April 2006",
  alamat: "Komp. Pondok Kopi No. 6B Loktabat Selatan",
  sekolah: "Universitas Lambung Mangkurat",
  email: "nabilaravalia008@gmail.com",
  avatar: REAL_PHOTO_PROFIL
};

let biodataData = {};

function initBiodataModule() {
  loadBiodataData();
  renderBiodataView();
  initBiodataEvents();
}

function loadBiodataData() {
  const saved = localStorage.getItem(STORAGE_KEY_BIODATA);
  if (saved) {
    try {
      biodataData = JSON.parse(saved);
      if (!biodataData.nama) biodataData.nama = defaultBiodata.nama;
      // Pastikan avatar mengarah ke foto profil asli
      if (!biodataData.avatar || biodataData.avatar.startsWith("data:image/svg")) {
        biodataData.avatar = REAL_PHOTO_PROFIL;
      }
    } catch (e) {
      biodataData = { ...defaultBiodata };
    }
  } else {
    biodataData = { ...defaultBiodata };
    saveBiodataData();
  }
}

function saveBiodataData() {
  localStorage.setItem(STORAGE_KEY_BIODATA, JSON.stringify(biodataData));
}

function renderBiodataView() {
  document.getElementById("viewBioNama").textContent = biodataData.nama || defaultBiodata.nama;
  document.getElementById("viewBioTTL").textContent = biodataData.ttl || defaultBiodata.ttl;
  document.getElementById("viewBioAlamat").textContent = biodataData.alamat || defaultBiodata.alamat;
  document.getElementById("viewBioSekolah").textContent = biodataData.sekolah || defaultBiodata.sekolah;
  document.getElementById("viewBioEmail").textContent = biodataData.email || defaultBiodata.email;

  const badgeName = document.getElementById("profileBadgeName");
  if (badgeName) badgeName.textContent = biodataData.nama || defaultBiodata.nama;

  const avatarImg = document.getElementById("biodataAvatarImg");
  if (avatarImg) {
    avatarImg.src = biodataData.avatar || REAL_PHOTO_PROFIL;
  }
}

function initBiodataEvents() {
  const btnEdit = document.getElementById("btnEditBiodata");
  const btnSave = document.getElementById("btnSaveBiodata");
  const btnCancel = document.getElementById("btnCancelBiodata");
  const viewMode = document.getElementById("biodataViewMode");
  const editMode = document.getElementById("biodataEditMode");
  const avatarInput = document.getElementById("avatarUploadInput");

  if (btnEdit) {
    btnEdit.addEventListener("click", () => {
      document.getElementById("inputBioNama").value = biodataData.nama || "";
      document.getElementById("inputBioTTL").value = biodataData.ttl || "";
      document.getElementById("inputBioAlamat").value = biodataData.alamat || "";
      document.getElementById("inputBioSekolah").value = biodataData.sekolah || "";
      document.getElementById("inputBioEmail").value = biodataData.email || "";

      viewMode.style.display = "none";
      editMode.style.display = "block";
      btnEdit.style.display = "none";
      btnSave.style.display = "inline-flex";
      btnCancel.style.display = "inline-flex";
    });
  }

  if (btnCancel) {
    btnCancel.addEventListener("click", () => {
      viewMode.style.display = "block";
      editMode.style.display = "none";
      btnEdit.style.display = "inline-flex";
      btnSave.style.display = "none";
      btnCancel.style.display = "none";
    });
  }

  if (btnSave) {
    btnSave.addEventListener("click", () => {
      biodataData.nama = document.getElementById("inputBioNama").value.trim() || defaultBiodata.nama;
      biodataData.ttl = document.getElementById("inputBioTTL").value.trim() || defaultBiodata.ttl;
      biodataData.alamat = document.getElementById("inputBioAlamat").value.trim() || defaultBiodata.alamat;
      biodataData.sekolah = document.getElementById("inputBioSekolah").value.trim() || defaultBiodata.sekolah;
      biodataData.email = document.getElementById("inputBioEmail").value.trim() || defaultBiodata.email;

      saveBiodataData();
      renderBiodataView();

      viewMode.style.display = "block";
      editMode.style.display = "none";
      btnEdit.style.display = "inline-flex";
      btnSave.style.display = "none";
      btnCancel.style.display = "none";

      showToast("Biodata Nabila berhasil disimpan! ✨", "success");
    });
  }

  if (avatarInput) {
    avatarInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        showToast("Harap pilih file gambar yaa!", "danger");
        return;
      }

      compressImageFile(file, 500, 500, 0.88, (base64Result) => {
        biodataData.avatar = base64Result;
        saveBiodataData();
        renderBiodataView();
        showToast("Foto profil baru berhasil dipasang! 📸💙", "success");
      });

      avatarInput.value = "";
    });
  }
}

/* ==============================================================================
   4. MODUL GALLERY KHUSUS (3 FOTO ASLI DARI NABILA)
   - Foto 1: IWAK KOCAK (media_1795090347501_314aa91c.jpg)
   - Foto 2: Foto Diri (media_1795090398196_ebc93fb6.jpg)
   - Foto 3: Foto Lingkungan Kampus FPIK ULM (media_1795090428418_35e9fef7.jpg)
   - Tanpa tanggal, tanpa tombol hapus, tidak bisa ditambah dari luar
   ============================================================================== */
const STORAGE_KEY_GALLERY = "nabila_gallery_msip_v7";

// 3 Foto Asli di dalam folder proyek
const REAL_PHOTO_IWAK_KOCAK = "iwak_kocak.jpg";
const REAL_PHOTO_DIRI = "foto_diri_nabila.jpg";
const REAL_PHOTO_KAMPUS_FPIK = "kampus_fpik_ulm.jpg";

const exclusiveNabilaGallery = [
  {
    id: "photo-1",
    src: REAL_PHOTO_IWAK_KOCAK,
    title: "IWAK KOCAK"
  },
  {
    id: "photo-2",
    src: REAL_PHOTO_DIRI,
    title: "Foto Diri"
  },
  {
    id: "photo-3",
    src: REAL_PHOTO_KAMPUS_FPIK,
    title: "Foto Lingkungan Kampus Fakultas Perikanan dan Ilmu Kelautan"
  }
];

let galleryData = [];

function initGalleryModule() {
  galleryData = [...exclusiveNabilaGallery];
  localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(galleryData));
  renderGalleryGrid();
  initGalleryEvents();
}

function renderGalleryGrid() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = "";

  galleryData.forEach((photo) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${photo.src}" alt="${escapeHTML(photo.title)}" class="gallery-img">
      <div class="gallery-overlay">
        <div class="gallery-info-bottom">
          <h4 class="gallery-photo-title">${escapeHTML(photo.title)}</h4>
          <span class="gallery-badge-hint">🔍 Klik untuk memperbesar</span>
        </div>
      </div>
    `;

    item.addEventListener("click", () => {
      openLightbox(photo.src, photo.title);
    });

    grid.appendChild(item);
  });
}

function initGalleryEvents() {
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxModal = document.getElementById("lightboxModal");

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }
}

function openLightbox(src, title) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");

  if (!modal || !img) return;

  img.src = src;
  if (caption) caption.textContent = title || "Foto Galeri";

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

/* ==============================================================================
   5. UTILITAS: KOMPRESI GAMBAR HTML5 CANVAS
   ============================================================================== */
function compressImageFile(file, maxWidth, maxHeight, quality, callback) {
  const reader = new FileReader();
  reader.onload = (readerEvent) => {
    const image = new Image();
    image.onload = () => {
      let width = image.width;
      let height = image.height;

      if (width > maxWidth || height > maxHeight) {
        if (width / height > maxWidth / maxHeight) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        } else {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, width, height);

      const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
      callback(compressedBase64);
    };
    image.src = readerEvent.target.result;
  };
  reader.readAsDataURL(file);
}

/* ==============================================================================
   6. UTILITAS: TOAST NOTIFIKASI & FORMAT
   ============================================================================== */
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : type === "danger" ? "toast-danger" : ""}`;
  
  let icon = "🐟";
  if (type === "success") icon = "💙";
  if (type === "danger") icon = "⚠️";

  toast.innerHTML = `<span>${icon}</span><span>${escapeHTML(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.parentElement.removeChild(toast);
    }
  }, 3000);
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
