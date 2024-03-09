function showMenu() {
    const nav = document.querySelector('.logo');
    const menu = document.querySelector('.nav__menu')

    nav.addEventListener('click', function (event) {
        if (event.target.closest('.btn__menu')) {
            menu.classList.toggle('show--menu')
        }
    })

}

export default showMenu