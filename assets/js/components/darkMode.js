function darkMode() {
    const btnDarkMode = document.querySelector('.btn__darkmode');

    btnDarkMode.addEventListener('click', function (event) {
        if (event.target.closest('.btn__darkmode')) {
            document.body.classList.toggle('dark');
            btnDarkMode.classList.toggle('active');
        }
    });
}

export default darkMode