const tittles = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));

tittles.forEach((el, index) => {
    el.addEventListener('click', () => {
        tittles.forEach((el) => el.classList.remove("tab_active")); 
        tittles[index].classList.add("tab_active");
        contents.forEach((el) => el.classList.remove("tab__content_active"));
        contents[index].classList.add("tab__content_active");
    })
})
