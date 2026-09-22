const modals = document.querySelectorAll('.modal');
const xButton = document.querySelector('.x');
const popups = document.querySelectorAll('.popup'); 

modals.forEach(modal => {
    modal.addEventListener('click', () => {
        const id = modal.id;
        const matchingPopup = document.querySelector(`.popup[data-popup="${id}"]`);
        if (matchingPopup) {
            matchingPopup.classList.add('show');
        }
    });
});

popups.forEach(popup => {
    const x = popup.querySelector('.x');
    x.addEventListener('click', () => {
        popup.classList.remove('show');
    });
});