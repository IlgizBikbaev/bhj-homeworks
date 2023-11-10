const form = document.getElementById('signin__form');
const cardForm = document.getElementById('signin');
const welcome = document.querySelector(".welcome");
const user = document.getElementById('user_id');

function welcomeActive() {
    cardForm.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
}

const userName = localStorage.getItem('userId');
if(userName) {
    welcomeActive();
    user.textContent = userName;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    
    
    
    xhr.addEventListener('load', () => {
        const response = xhr.response;
        
        if (response.success) {
            const userId = response.user_id;
            localStorage.setItem('userId', userId);
            user.textContent = userId;
            welcomeActive();
        } else {
            alert('Неверный логин или пароль')
            form.reset();
        }
    })
    });



