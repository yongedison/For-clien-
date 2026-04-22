// 1. Jam Real-time
function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if(clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('en-GB');
    }
}
setInterval(updateClock, 1000);
updateClock();

// 2. Fungsi Hujan Hati 🧡🩷
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

// 3. Navigasi Slide
function nextSlide(n) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    const next = document.getElementById('slide' + n);
    if(next) {
        next.classList.add('active');
        const bg = document.getElementById('bg-layer');
        if(bg) {
            if(n === 1) bg.className = 'bg-transition slide1-bg';
            if(n === 2) bg.className = 'bg-transition slide3-bg'; 
            if(n === 3) bg.className = 'bg-transition slide4-bg'; 
        }
        if(n === 2) {
            const heartInterval = setInterval(createHearts, 300);
            next.setAttribute('data-interval', heartInterval);
            initBirthdayButtons(); // Panggil fungsi tombol birthday
        } else {
            const slide2 = document.getElementById('slide2');
            if(slide2) {
                const prevInterval = slide2.getAttribute('data-interval');
                if(prevInterval) { clearInterval(prevInterval); slide2.removeAttribute('data-interval'); }
            }
        }
    }
}

// 4. Logika Tombol Birthday (Ganti dari Valentine)
function initBirthdayButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const finishBtn = document.getElementById('finishBtn');

    if (yesBtn) {
        yesBtn.onclick = function(e) {
            e.preventDefault(); 
            alert('I hope all your birthday wishes come true! 🎂🚀🩷'); // Teks Birthday
            if (finishBtn) {
                finishBtn.style.display = 'block'; 
                finishBtn.classList.add('finish-goyang');
            }
        };
    }

    if (noBtn) {
        noBtn.onmouseover = function() {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        };
    }
}

// 5. Animasi Intro Hati
function createHeartAnimation() {
    const container = document.getElementById('heart-container');
    const total = 14; 
    if(container) {
        for (let i = 0; i < total; i++) {
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = 'piazza1.jpg'; 
                img.className = 'heart-photo';
                const angle = (i / total) * 2 * Math.PI;
                const x = 16 * Math.pow(Math.sin(angle), 3);
                const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
                img.style.left = `calc(50% + ${x * 8}px)`;
                img.style.top = `calc(50% + ${y * 8}px)`;
                container.appendChild(img);
            }, i * 200);
        }
    }
}

// 6. Efek Confetti Akhir
function celebrate() {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#5c0a0a', '#FFB6C1', '#D4AF37'] });
    setTimeout(() => nextSlide(3), 1200);
}

window.onload = createHeartAnimation;
