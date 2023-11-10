const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

function getCookie(modal) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + modal.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


if (getCookie('modal') !== closed) {
    modal.classList.add('modal_active');
}

close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=closed';
});  