function showMenu() {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.nav__menu')

    nav.addEventListener('click', function (event) {
        if (event.target.closest('.btn__menu')) {
            menu.classList.toggle('show--menu')
        }

        if (event.target.closest('.nav__link')) {
            menu.classList.remove('show--menu')
        }

        if (event.target.closest('.btn__darkmode')) {
            menu.classList.remove('show--menu')
        }
    })

}

export default showMenu