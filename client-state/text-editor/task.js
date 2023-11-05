const area = document.getElementById('editor');
area.insertAdjacentHTML('afterend',
  `<button class="clear">Очистить</button>`);

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value)
};

const button = document.querySelector('.clear');
button.addEventListener('click', () => {
  localStorage.removeItem('area');
  area.value = ''
})

