const fonts = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book");

fonts.forEach((el, index) => {
   el.addEventListener('click', (e) => {
      e.preventDefault();
      fonts.forEach((el) => el.classList.remove("font-size_active"));
      fonts[index].classList.add("font-size_active");

      if (fonts[index].classList.contains("font-size_small")) {
         removeClasses();
         book.classList.add("book_fs-small");
      } else if (fonts[index].classList.contains("font-size_big")) {
         removeClasses();
         book.classList.add("book_fs-big");
      } else {
         removeClasses(); 
      }
   })
})

function removeClasses() {
   book.classList.remove("book_fs-small", "book_fs-big");
}