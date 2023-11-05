let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();


xhr.addEventListener('load', () => {

    const loader = document.querySelector('.loader');
    if (loader.classList.contains('loader_active')) {
        loader.classList.remove('loader_active');
    }

    const name = xhr.response;
    const valute = name.response.Valute;

    for (let value of Object.values(valute)) {

    const itemEl = document.getElementById("items");

    itemEl.insertAdjacentHTML('beforeend',
        `<div class="item">
        <div class="item__code">${value.CharCode}</div>
<div class="item__value">${value.Value}</div>
<div class="item__currency">руб.</div>`);  
    }
});