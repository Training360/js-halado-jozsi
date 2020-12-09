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
    resetBtn.addEventListener('click', () => currentTime = 0 );

    // Idő megjelenítése.
    setInterval( () => {
        currentTime++;
        clock.textContent = currentTime;
    }, 1000 );


})();