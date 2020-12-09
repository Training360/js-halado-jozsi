(function() {
    // Megkeresem a szükséges elemeket.
    const clock = document.querySelector('.clock');
    const btnGroup = document.querySelector('.btn-group');
    const playBtn = btnGroup.querySelector('.timer-start');
    const pauseBtn = btnGroup.querySelector('.timer-pause');
    const resetBtn = btnGroup.querySelector('.timer-reset');

    // Események beállítása.
    let isTiming = false;
    let currentTime = 0;
    playBtn.addEventListener('click', () => isTiming = true );
    pauseBtn.addEventListener('click', () => isTiming = false );
    resetBtn.addEventListener('click', () => {
        currentTime = 0;
        showTime();
    });

    // Idő megjelenítése.
    const showTime = () => {
        let minutes = Math.floor( currentTime / 60 );
        let seconds = currentTime % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        clock.textContent = `${minutes}:${seconds}`;
    };

    // Idő frissítése.
    setInterval( () => {
        if (!isTiming) {
            return;
        }
        currentTime++;
        showTime();
    }, 1000 );


})();