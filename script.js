// Fungsi Pindah Slide
function nextSlide(slideNumber) {
    // Sembunyikan semua slide
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    // Tampilkan slide yang dipilih
    document.getElementById('slide' + slideNumber).classList.add('active');
}

// Fungsi tombol 'No' kabur
function moveNoButton() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Fungsi saat klik 'Yes'
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    nextSlide(4); // Pindah ke slide terakhir
}
