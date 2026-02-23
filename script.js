const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('music');
const mapBtn = document.getElementById('mapBtn');

musicBtn.addEventListener('click', function() {
    if (this.textContent === 'Әуенді қосу') {
        music.currentTime = 20;
        music.play();
        this.textContent = 'Сөндіру';
        this.classList.add('active');
    } else {
        music.pause();
        this.textContent = 'Әуенді қосу';
        this.classList.remove('active');
    }
});

mapBtn.addEventListener('click', function() {
    window.open('https://go.2gis.com/Ljidp', '_blank');
});

// Timer
const targetDate = new Date('2026-04-11').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        document.getElementById('timerContainer').innerHTML = '<div style="font-size: 20px;">Той басталды!</div>';
    }
}

updateTimer();
setInterval(updateTimer, 1000);
