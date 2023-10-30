const tasks = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');
const form = document.querySelector(".tasks__control");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = input.value.trim();
  if (input.value === '') return;
  addTasks(text);
  form.reset();
});

function addTasks(text) {
  tasks.insertAdjacentHTML('beforeend',
    `<div class="task">
    <div class="task__title">${text}</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`);
}

 tasks.addEventListener('click', (e) => {
     if (e.target.classList.contains('task__remove')) {
       e.preventDefault();
       let delEl = e.target.closest('.task');
       if (delEl) {
        delEl.remove();
       } else {
        return;
       }
    }
   });
