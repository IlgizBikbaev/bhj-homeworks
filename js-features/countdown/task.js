let timer = document.getElementById("timer");
let stopTime = setInterval(updateCountdown, 1000);
function updateCountdown() {
    timer.textContent--;
    if (timer.textContent < 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(stopTime);
        document.getElementById("status").innerHTML = "Поздравляем!"
    }
}
