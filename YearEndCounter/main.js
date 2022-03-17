const body = document.body;
const endTime = new Date('December 31 2022 23:59:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const updateCountdown = () => {
    const startTime = new Date();
    const diff = endTime - startTime;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

const createSnowFlake = () => {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas', 'fa-snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 +  2 + 's';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 2 + 'em';
    document.body.appendChild(snow_flake);
    setTimeout(() => {
        snow_flake.remove();
    }, 5000)
}

setInterval(updateCountdown, 1000);
setInterval(createSnowFlake, 50);