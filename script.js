// Jam Real-time
function updateClock() {
    const now = new Date();
    document.getElementById('live-clock').innerText = now.toLocaleTimeString('en-GB');
}
setInterval(updateClock, 1000);
updateClock();

// Navigasi Slide & Ganti Background
function nextSlide(n) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    const next = document.getElementById('slide' + n);
    if(next) next.classList.add('active');
    
    // Ganti class background pada layer bg
    const bg = document.getElementById('bg-layer');
    bg.className = 'bg-transition slide' + n + '-bg';

    // Berhentikan video jika pindah slide
    const video = document.getElementById('birthday-video');
    if (n !== 2) video.pause();
}

// Efek Confetti & Slide Final
function celebrate() {
    confetti({ 
        particleCount: 150, 
        spread: 80, 
        origin: { y: 0.6 }, 
        colors: ['#5c0a0a', '#FFB6C1', '#D4AF37'] 
    });
    setTimeout(() => nextSlide(4), 1200);
}
function createHearts() {
    const symbols = ['🧡', 'j🩷'];
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Antara 2-5 detik
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}

// Panggil fungsi ini di dalam logika nextSlide kamu saat pindah ke Slide 3
// setInterval(createHearts, 500); 
function nextSlide(slideNumber) {
    // Sembunyikan semua slide
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    
    // Tampilkan slide yang dituju
    const currentSlide = document.getElementById('slide' + slideNumber);
    currentSlide.classList.add('active');

    // KHUSUS SLIDE 3: Jalankan hujan hati 🧡🩷
    if(slideNumber === 3) {
        const heartInterval = setInterval(createHearts, 300); // Muncul setiap 0.3 detik
        
        // Opsional: Berhenti saat pindah ke slide 4
        currentSlide.setAttribute('data-interval', heartInterval);
    }
}

// Fungsi pembuat hati (Pastikan ini ada di script.js)
function createHearts() {
    const symbols = ['🧡', '🩷'];
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-5vh';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}
