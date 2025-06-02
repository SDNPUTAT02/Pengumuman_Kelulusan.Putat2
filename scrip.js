const dataSiswa = [
  { nama: "AFIKA MUTIARA PUTRI RIANI", nisn: "3137333046" },
  { nama: "ARDAN GILANG ZAHDANANTA", nisn: "0131450226" },
  { nama: "AULIA ATINA NABILLA", nisn: "0131721287" },
  { nama: "BAGUS FEBRIAN SAPUTRA", nisn: "0129147291" },
  { nama: "BAYU SAMUDRA ASMORO", nisn: "0127443041" },
  { nama: "ERLYTA  ARDINA EKA FEBRIYANTI", nisn: "3136618112" },
  { nama: "FERDI ARDIANSYAH SUGIYONO", nisn: "0143264512" },
  { nama: "FICO DWI ADI NUGROHO", nisn: "3125887897" },
  { nama: "JESICA HERA AULIA", nisn: "0122569097" },
  { nama: "MESYA TOMI ANGGRAINY PUTRI", nisn: "3128360033" },
  { nama: "RAFKA FEBRIANOFA", nisn: "3136387173" },
  { nama: "RISKI ADITIYA SAPUTRA", nisn: "3121248488" },
  { nama: "SHERLYNA PUTRI HARDINI", nisn: "0127381462" },
  { nama: "VALLIANT ACHMADI TSANY FIRDAUS", nisn: "0128002234" },
  { nama: "ASYFANING TYAS", nisn: "0138097060" },
  { nama: "YASSI'I NUR GHIFFARI", nisn: "0135546917" },
];

function cekKelulusan(event) {
  event.preventDefault();

  const waktuSekarang = new Date();
  const waktuRilis = new Date("2025-06-02T13:00:00+07:00");

  if (waktuSekarang < waktuRilis) {
    alert("Pengumuman belum dapat diakses. Silakan cek kembali pada 2 Juni 2025 pukul 13.00 WIB.");
    return false;
  }

  const nama = document.getElementById("nama").value.trim().toUpperCase();
  const nisn = document.getElementById("nisn").value.trim();

  const siswa = dataSiswa.find(
    (s) => s.nama === nama && s.nisn === nisn
  );

  document.getElementById("loading").style.display = "flex";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";

    if (siswa) {
      localStorage.setItem("namaSiswa", siswa.nama);
      localStorage.setItem("statusKelulusan", "Selamat! Anda dinyatakan LULUS.");
      window.location.href = "selamat.html";
    } else {
      alert("Data tidak ditemukan. Periksa kembali nama dan NISN Anda.");
    }
  }, 3000);
}

if (window.location.pathname.includes("selamat.html")) {
  const namaSiswa = localStorage.getItem("namaSiswa");
  const status = localStorage.getItem("statusKelulusan");

  if (namaSiswa && status) {
    document.getElementById("judulKelulusan").textContent = status;
    document.getElementById("pesanKelulusan").textContent = `Selamat, ${namaSiswa}! Anda dinyatakan lulus.`;
    document.getElementById("pesanSelamat").textContent = `${namaSiswa}, "Selamat! Anda telah menyelesaikan pendidikan di SDN Putat 02 dengan sangat baik. Semoga kesuksesan selalu menyertai langkah Anda ke depan."`;
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  } else {
    window.location.href = "index.html";
  }
}

// Jam real-time
function updateTime() {
  const timeElement = document.getElementById("time");
  if (timeElement) {
    const now = new Date();
    const options = {
      weekday: "long", year: "numeric", month: "long",
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
    };
    timeElement.textContent = now.toLocaleDateString("id-ID", options);
  }
}
setInterval(updateTime, 1000);
updateTime();
