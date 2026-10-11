// Data Project Detail untuk Modal Popup
const projectDetails = {
  project1: {
    title: "Design Item Kebutuhan Event Employee Gathering PLN 2025",
    category: "Desain Grafis Event",
    overview: "Perancangan komprehensif seluruh kebutuhan materi visual dan cetak untuk kelancaran pelaksanaan agenda Employee Gathering PLN 2025.",
    problem: "Acara berskala korporat membutuhkan materi grafis yang beragam (promosi, seremonial panggung, dan operasional lapangan) yang harus serasi serta mudah dibaca oleh ratusan peserta dan panitia.",
    solution: "Menerapkan prinsip hierarki desain yang ketat pada setiap materi agar alur informasi tersampaikan jelas, pemilihan tipografi terbaca dari kejauhan, serta layout yang selaras dengan tema acara.",
    features: [
      "Flyer publikasi & pengumuman agenda",
      "Mockup awarding / plakat penghargaan apresiasi",
      "Cue card MC untuk pemandu acara",
      "Papan petunjuk informasi & signage rute kegiatan"
    ],
    technology: ["Adobe Photoshop", "Adobe Illustrator"],
    role: "Graphic Designer",
    process: "Analisis brief & susunan acara -> Penentuan hierarki teks dan elemen visual -> Layouting aset di Illustrator & Photoshop -> Finalisasi file siap cetak dan mockup presentasi.",
    result: "Seluruh kebutuhan materi cetak dan visual pendukung event selesai tepat waktu dan siap digunakan saat acara berlangsung.",
    demoLink: "[Belum diisi - Tautkan link Google Drive / Behance]"
  },
  project2: {
    title: "Dokumentasi Fotografi Event GreenSM Run Surabaya",
    category: "Fotografi Event",
    overview: "Dokumentasi resmi untuk merekam aktivitas peserta, aksi pelari, dan atmosfer kegiatan olahraga GreenSM Run di Surabaya.",
    problem: "Karakteristik event lari yang dinamis dan berkecepatan tinggi menuntut fotografer untuk sigap menangkap ekspresi dan momen tanpa celah di tengah kondisi pencahayaan luar ruangan yang berubah-ubah.",
    solution: "Mengambil foto on-event menggunakan kamera mirrorless dengan penempatan posisi strategis (titik start, track, dan garis finish), diikuti proses pascaproduksi (color correction & retouching).",
    features: [
      "Perekaman aksi pelari dengan fokus tajam",
      "Dokumentasi panggung, seremoni, dan interaksi peserta",
      "Post-processing warna dan pencahayaan yang konsisten"
    ],
    technology: ["Kamera Mirrorless", "Adobe Photoshop", "Adobe Lightroom"],
    role: "Event Photographer & Photo Editor",
    process: "Standby di spot lintasan strategis -> Perekaman aksi dan candid -> Kurasi foto terbaik -> Post-processing di Adobe Lightroom/Photoshop untuk hasil akhir yang seragam.",
    result: "Kumpulan arsip foto dokumentasi event dengan kualitas warna dan pencahayaan yang rapi untuk kebutuhan publikasi dan rekapitulasi panitia.",
    demoLink: "[Belum diisi - Tautkan link album Google Drive]"
  },
  project3: {
    title: "Dokumentasi Videografi Event Trial Run Extreme Fest",
    category: "Videografi & Mobile Editing",
    overview: "Produksi video dokumentasi dan rekap cepat kegiatan Trial Run Extreme Fest yang dinamis dan siap tayang untuk kebutuhan media sosial.",
    problem: "Kondisi medan yang berat dan mobilitas rute menuntut alat yang lincah dan alur kerja cepat agar video dokumentasi segera siap dipublikasikan pasca-acara.",
    solution: "Memaksimalkan perangkat mobile (iPhone) untuk fleksibilitas pengambilan footage ekstrem on-site, dilanjutkan dengan editing ritmis menggunakan CapCut.",
    features: [
      "Footage dinamis di jalur medan ekstrem",
      "Pemilihan klip terbaik mengikuti tempo musik latar",
      "Format video siap publikasi platform digital"
    ],
    technology: ["iPhone", "CapCut"],
    role: "Videographer & Video Editor",
    process: "Pengambilan rekaman video on-the-go di titik rintangan -> Kurasi footage langsung di smartphone -> Editing timeline, pacing, dan penataan transisi di CapCut -> Ekspor video siap tayang.",
    result: "Video dokumentasi dinamis siap tayang yang merepresentasikan keseruan dan tantangan event.",
    demoLink: "[Belum diisi - Tautkan link Instagram Reels / TikTok / YouTube]"
  }
};

// Navigasi Mobile Menu Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = navToggle.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Tutup menu saat nav item diklik
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = navToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
}

// Modal Handler
const projectModal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openProjectModal(projectId) {
  const data = projectDetails[projectId];
  if (!data) return;

  const featuresHtml = data.features.map(f => `<li><i class="fa-solid fa-check text-accent"></i> ${f}</li>`).join("");
  const techHtml = data.technology.map(t => `<span class="tech-badge">${t}</span>`).join(" ");

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="tag-pill category-tag">${data.category}</span>
      <h3 style="font-size: 1.45rem; color: var(--dark-navy); margin-top: 10px; margin-bottom: 6px;">${data.title}</h3>
      <p style="font-size: 0.95rem; color: var(--text-muted);">${data.overview}</p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
      <div style="background: var(--bg-page); padding: 16px; border-radius: var(--radius-sm);">
        <strong style="display:block; font-size: 0.85rem; color: var(--dark-navy); margin-bottom: 4px;">
          <i class="fa-solid fa-circle-exclamation text-accent"></i> Problem
        </strong>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">${data.problem}</p>
      </div>

      <div style="background: var(--bg-page); padding: 16px; border-radius: var(--radius-sm);">
        <strong style="display:block; font-size: 0.85rem; color: var(--dark-navy); margin-bottom: 4px;">
          <i class="fa-solid fa-lightbulb text-accent"></i> Solution
        </strong>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">${data.solution}</p>
      </div>

      <div>
        <strong style="display:block; font-size: 0.88rem; color: var(--dark-navy); margin-bottom: 8px;">Key Features / Deliverables:</strong>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px; font-size: 0.9rem; color: var(--text-muted);">
          ${featuresHtml}
        </ul>
      </div>

      <div style="border-top: 1px solid var(--border-color); padding-top: 16px;">
        <strong style="display:block; font-size: 0.88rem; color: var(--dark-navy); margin-bottom: 4px;">Peran Saya (My Role):</strong>
        <p style="font-size: 0.9rem; color: var(--primary); font-weight: 600; margin: 0;">${data.role}</p>
      </div>

      <div>
        <strong style="display:block; font-size: 0.88rem; color: var(--dark-navy); margin-bottom: 4px;">Proses Kerja:</strong>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">${data.process}</p>
      </div>

      <div>
        <strong style="display:block; font-size: 0.88rem; color: var(--dark-navy); margin-bottom: 4px;">Hasil (Result):</strong>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">${data.result}</p>
      </div>

      <div>
        <strong style="display:block; font-size: 0.88rem; color: var(--dark-navy); margin-bottom: 6px;">Teknologi & Tools:</strong>
        <div class="tech-stack">${techHtml}</div>
      </div>

      <div style="margin-top: 8px; padding-top: 16px; border-top: 1px solid var(--border-color);">
        <strong style="display:block; font-size: 0.85rem; color: var(--dark-navy); margin-bottom: 4px;">Tautan Bukti / Demo / Drive:</strong>
        <span style="font-size: 0.88rem; color: var(--text-muted);">${data.demoLink}</span>
      </div>
    </div>
  `;

  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

if (modalClose) {
  modalClose.addEventListener("click", () => {
    projectModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

// Tutup modal jika klik di luar box
if (projectModal) {
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("active")) {
    projectModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Set Dynamic Year di Footer
const yearElem = document.getElementById("year");
if (yearElem) {
  yearElem.textContent = new Date().getFullYear();
}
