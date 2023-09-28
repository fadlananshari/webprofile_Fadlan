document.addEventListener('DOMContentLoaded', function () {
  // Ambil referensi ke elemen yang akan dipengaruhi oleh scroll
  const elemen = document.getElementById('navbar');

  // Tambahkan event listener untuk meng-handle pergerakan scroll
  window.addEventListener('scroll', function () {
    // Ambil nilai scroll Y saat ini
    const scrollY = window.scrollY;

    // Cek jika scroll Y lebih dari 20px
    if (scrollY > 20) {
      // Tambahkan kelas "shadow" ke elemen
      elemen.classList.add('shadow');
    } else {
      // Hapus kelas "shadow" jika scroll Y kurang dari atau sama dengan 20px
      elemen.classList.remove('shadow');
    }
  });
});

