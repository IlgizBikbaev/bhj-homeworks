const rotator = Array.from(document.querySelectorAll(".rotator__case"));

let roundTime = setInterval(roundRotator, 1000);
let counter = 0;
function roundRotator() {
   rotator[counter].classList.remove("rotator__case_active");
   counter++;
   if(counter > rotator.length -1) {
    counter=0;
   }
   rotator[counter].classList.add("rotator__case_active");
   rotator[counter].style.color = rotator[counter].dataset.color;
}

