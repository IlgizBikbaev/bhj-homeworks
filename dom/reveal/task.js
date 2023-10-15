const reveal = document.querySelectorAll(".reveal")
document.addEventListener('scroll', () => {
    reveal.forEach ((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        console.log(top, bottom);
        if ((top >= 0 && top < window.innerHeight) && (bottom >=0 && bottom < window.innerHeight)) {
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    })
});