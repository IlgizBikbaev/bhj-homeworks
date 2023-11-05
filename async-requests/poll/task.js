let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('load', () => {
    
    const title = xhr.response.data.title;
    console.log(title);
    
    const pollEl = document.getElementById("poll__title"); 
    pollEl.innerText = title;

    const answers = xhr.response.data.answers;
    for (let i = 0; i < answers.length; i++) {
       let answersEl= answers[i];
       const answersItem = document.getElementById('poll__answers');
        answersItem.insertAdjacentHTML('beforeend',
            `<button class="poll__answer">${answersEl}</button>`);
    } 
    });

window.addEventListener('click', (e) => {
    if (e.target.classList.contains("poll__answer")) {
        alert('Спасибо, ваш голос засчитан!');
    }
});