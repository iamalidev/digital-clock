function timeShower() {
    let timeNow = new Date();

    document.querySelector(".hours").textContent = timeNow.getHours();
    document.querySelector(".minutes").textContent = timeNow.getMinutes();
    document.querySelector(".seconds").textContent = timeNow.getSeconds();
}

timeShower();

setInterval(function() {
    timeShower();
}, 1000);