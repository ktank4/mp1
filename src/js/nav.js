
window.addEventListener('scroll', ()=> {
    const sectionsArray = Array.from(document.querySelectorAll('section'));
    const navSections = Array.from(document.querySelectorAll('.navSection'));
    const navHeight = document.querySelector('nav').offsetHeight;
    for (let i=0; i < sectionsArray.length; i++){
        const rect = sectionsArray[i].getBoundingClientRect()
        console.log(sectionsArray[i].id, 'top:', rect.top, 'bottom:', rect.bottom);
        if (rect.top <= navHeight && rect.bottom > navHeight) {
            const activeLink = navSections.find(link => link.dataset.section === sectionsArray[i].id);
            navSections.forEach(link => link.classList.remove('active'));
            if (activeLink) activeLink.classList.add('active');
            break;
        }
    }
})
