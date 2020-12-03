// Pontos dátum visszaadása.
const getCurrentTime = (startTime) => {
    // 1. Létrehozok egy dátum típusú objektumot.
    const currentDate = startTime ? new Date(startTime) : new Date();

    // 2. Kiolvasom a szükséges részeket a dátum objektumból.
    const year = currentDate.getFullYear();
    const month = padNumbers(currentDate.getMonth() + 1);
    const day = padNumbers(currentDate.getDate());
    const hours = padNumbers(currentDate.getHours());
    const minutes = padNumbers(currentDate.getMinutes());
    const seconds = padNumbers(currentDate.getSeconds());

    // Visszaadom a formázott időpontot.
    return `${[year, month, day].join('-')} ${[hours, minutes, seconds].join(':')}`;
};

// Tíznél kisebb számok kiegészítése 0 -val.
const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
};

// Meghívom a getCurrentTime függvényt másodpercenként.
setInterval( () => {
    const time = getCurrentTime();    
    const clockFace = document.querySelector('.clock-face');
    clockFace.textContent = time;
}, 1000 );

// Stopperóra.
let stopperTime = 0;
let stopperIsRunning = false;
setInterval( () => {
    if (!stopperIsRunning) {
        return;
    }
    
    stopperTime++;
    const seconds = padNumbers(stopperTime % 60);
    const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
    const hours = padNumbers(Math.floor(stopperTime / 3600));
    const time = `${[hours, minutes, seconds].join(':')}`;
    const stopperFace = document.querySelector('.stopper-face');
    stopperFace.textContent = time;
}, 1000);

document.querySelector('.start-stop-btn').addEventListener('click', () => {
    if (stopperIsRunning) {
        stopperIsRunning = false;
        stopperTime = 0;
    } else {
        stopperIsRunning = true;
    }
});
