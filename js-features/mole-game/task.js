const deadHole = document.getElementById("dead");
const lost = document.getElementById("lost");
let countDead = 0;
let countLost = 0;
for (let index = 1; index < 10; index++) {
    const hole = document.getElementById(`hole${index}`);
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            countDead += 1;
            deadHole.textContent = countDead;
        } else {
            countLost += 1;
            lost.textContent = countLost;
        }

        if (countDead === 10) {
            alert("Вы выиграли!");
            deadHole.textContent = 0;
            lost.textContent = 0;
        }
         
        if (countLost === 5) {
            alert("Вы проиграли!");
            deadHole.textContent = 0;
            lost.textContent = 0;
        }
    }
};
