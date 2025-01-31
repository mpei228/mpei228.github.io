    // JavaScript для фиксации меню
    const menu = document.getElementById('menu');
    const menuOffset = menu.offsetTop; // Позиция меню относительно страницы

    window.addEventListener('scroll', () => {
        if (window.scrollY >= menuOffset) {
            menu.classList.add('fixed'); // Закрепить меню
        } else {
            menu.classList.remove('fixed'); // Вернуть в исходное положение
        }
    });