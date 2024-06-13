const sizes = Array.from(document.querySelectorAll('.font-size'));
const content = document.querySelector('.book')
const backgrounds = Array.from(document.querySelector('.book__control_background').children).slice(1, 4);
const colors = Array.from(document.querySelector('.book__control_color').children).slice(1, 4);



sizes.forEach(size => {
    size.addEventListener('click', (e) => {
        // удаляем активный класс у всех элементов
        sizes.forEach(c => c.classList.remove('font-size_active'));
        // добавляем активный класс элементу, по которому совершен клик
        size.classList.add('font-size_active');
        e.preventDefault();

        // ищем индекс активного элемента
        let index = sizes.findIndex(e => {
            return e.classList.contains('font-size_active')
        });
        // присваиваем класс для изменения размера текста
        if (index == 0) {
            content.classList.add('book_fs-small')
        } else if (index == 2) {
            content.classList.remove('book_fs-small')
            content.classList.add('book_fs-big')
        } else {
            content.classList.remove('book_fs-small')
            content.classList.remove('book_fs-big')
        }
    });
});

backgrounds.forEach(background => {
    background.addEventListener('click', (e) => {
        // удаляем активный класс у всех элементов
        backgrounds.forEach(c => c.classList.remove('color_active'));
        // добавляем активный класс элементу, по которому совершен клик
        background.classList.add('color_active');
        e.preventDefault();

        // ищем индекс активного элемента
        let index = backgrounds.findIndex(e => {
            return e.classList.contains('color_active')
        });
        // присваиваем класс для изменения размера текста
        if (index == 0) {
            content.classList.remove('bg_color_white')
            content.classList.remove('bg_color_gray')
            content.classList.add('bg_color_black')
        } else if (index == 1) {
            content.classList.remove('bg_color_black')
            content.classList.remove('bg_color_white')
            content.classList.add('bg_color_gray')
        } else {
            content.classList.remove('bg_color_black')
            content.classList.remove('bg_color_gray')
            content.classList.add('bg_color_white')
        }
    });
})

colors.forEach(color => {
    color.addEventListener('click', (e) => {
        // удаляем активный класс у всех элементов
        colors.forEach(c => c.classList.remove('color_active'));
        // добавляем активный класс элементу, по которому совершен клик
        color.classList.add('color_active');
        e.preventDefault();

        // ищем индекс активного элемента
        let index = colors.findIndex(e => {
            return e.classList.contains('color_active')
        });
        // присваиваем класс для изменения размера текста
        if (index == 0) {
            content.classList.remove('book_color-whitesmoke')
            content.classList.remove('book_color-gray')
            content.classList.add('book_color-black')
        } else if (index == 1) {
            content.classList.remove('book_color-black')
            content.classList.remove('book_color-whitesmoke')
            content.classList.add('book_color-gray')
        } else {
            content.classList.remove('book_color-gray')
            content.classList.remove('book_color-black')
            content.classList.add('book_color-whitesmoke')
        }
    });
})

