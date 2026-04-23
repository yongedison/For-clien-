// 1. Fungsi Unlock (Gate QRIS)
function unlockSurprise() {
    const pass = document.getElementById('passcode').value.toLowerCase();
    if(pass === "piazza13") {
        document.getElementById('qris-gate').style.display = 'none';
        nextSlide(1); 
        createHeartAnimation(); 
    } else {
        alert("it's your name baby🩷");
    }
}

// 2. Jam Real-time
function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if(clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('en-GB');
    }
}
setInterval(updateClock, 1000);
updateClock();

// 3. Fungsi Hujan Hati (Slide 2)
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

// 4. Navigasi Slide
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
            initBirthdayButtons();
        } else {
            const slide2 = document.getElementById('slide2');
            if(slide2) {
                const prevInterval = slide2.getAttribute('data-interval');
                if(prevInterval) { clearInterval(prevInterval); slide2.removeAttribute('data-interval'); }
            }
        }
    }
}

// 5. Logika Tombol Birthday
function initBirthdayButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const finishBtn = document.getElementById('finishBtn');

    if (yesBtn) {
        yesBtn.onclick = function(e) {
            e.preventDefault(); 
            alert('I hope all your birthday wishes come true! 🎂🚀🩷');
            if (finishBtn) {
                finishBtn.style.display = 'block'; 
                finishBtn.classList.add('finish-goyang');
            }
        };
    }

    if (noBtn) {
        noBtn.onmouseover = noBtn.ontouchstart = function() {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        };
    }
}

// 6. Animasi Hati (UKURAN SEDANG-BESAR + PAS DI LAYAR)
function createHeartAnimation() {
    const container = document.getElementById('heart-container');
    const total = 14; 
    if(container) {
        container.innerHTML = ''; 
        for (let i = 0; i < total; i++) {
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = 'piazza1.jpg'; 
                img.className = 'heart-photo';
                const angle = (i / total) * 2 * Math.PI;
                const x = 16 * Math.pow(Math.sin(angle), 3);
                const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
                
                // SKALA DIKECILIN DIKIT BIAR GAK KELUAR LAYAR
                const skala = 11; 
                img.style.left = `calc(50% + ${x * skala}px)`;
                img.style.top = `calc(50% + ${y * skala}px)`;
                container.appendChild(img);
            }, i * 200);
        }
    }
}

// 7. Efek Akhir
function celebrate() {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#5c0a0a', '#FFB6C1', '#D4AF37'] });
    setTimeout(() => nextSlide(3), 1200);
}
