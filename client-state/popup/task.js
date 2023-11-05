const modal = document.getElementById('subscribe-modal');
//console.log(document.cookie);

if (!document.cookie) {
    modal.classList.add('modal_active');
}



const close = document.querySelector('.modal__close');
close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=false';
    console.log(document.cookie);
});


    
