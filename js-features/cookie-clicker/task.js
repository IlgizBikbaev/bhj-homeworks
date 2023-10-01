const clicker = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
count = 0;
image.onclick = function () {
    count += 1;
    clicker.textContent = count;
    if (count % 2 == 0) {
        image.width = 150;
    } else {
        image.width = 200;
    }
};



