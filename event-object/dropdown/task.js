const selection  = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const listText = document.querySelectorAll(".dropdown__link");


selection.addEventListener('click', () =>{
    list.classList.toggle('dropdown__list_active');
});


listText.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let text = el.textContent;
        selection.textContent = text;
        list.classList.remove('dropdown__list_active');
    });
})
 
