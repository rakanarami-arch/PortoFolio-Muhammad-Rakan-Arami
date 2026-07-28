
// Tunggu sampai seluruh halaman dimuat
document.addEventListener('DOMContentLoaded', (event) => {
    // Mengambil elemen-elemen yang dibutuhkan
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactBtn");
    const span = document.getElementsByClassName("close-button")[0];

    // Ketika pengguna klik tombol CONTACT ME, buka modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // Ketika pengguna klik tanda (X), tutup modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Ketika pengguna klik di luar area modal, tutup modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});

// Tunggu sampai semua elemen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Pastikan tombol ditemukan
    if (!themeToggleBtn) return;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️'; 
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }
    });
});

// === FITUR TOMBOL DARK MODE ===
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Saat tombol diklik
    themeToggleBtn.addEventListener('click', () => {
        // Tambahkan atau hapus class 'dark-theme' pada body
        body.classList.toggle('dark-theme');
        
        // Ubah ikon tombol (Bulan / Matahari)
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️'; // Matahari jika mode gelap
        } else {
            themeToggleBtn.textContent = '🌙'; // Bulan jika mode terang
        }
    });
});