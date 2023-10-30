const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();

        let tooltipText = el.getAttribute('title');
        if (!tooltipText) return;
        const nextEl = el.nextElementSibling;

        if (!nextEl || !nextEl.classList.contains('tooltip')) {
            const tooltipElem = document.createElement('div');
            tooltipElem.className = 'tooltip tooltip_active';
            tooltipElem.textContent = tooltipText;
            el.after(tooltipElem);
            let coords = el.getBoundingClientRect();
            let left = coords.left + (el.offsetWidth - tooltipElem.offsetWidth) / 2;
            if (left < 0) left = 0;
            let top = coords.top + tooltipElem.offsetHeight + 5;
            if (top < 0) {
                top = coords.top + el.offsetHeight + 5;
            }
            tooltipElem.style.left = left + 'px';
            tooltipElem.style.top = top + 'px';
        }

        if (nextEl && nextEl.classList.contains('tooltip')) {
            nextEl.classList.toggle('tooltip_active');
        }
    })
});