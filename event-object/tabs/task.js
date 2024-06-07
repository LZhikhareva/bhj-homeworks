const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const prevActiveTab = document.querySelector('.tab_active');
        // Получаем предыдущую активную вкладку
        const prevActiveContent = document.querySelector('.tab__content_active');



        if (prevActiveContent) {
            //Удаляем класс _active у предыдущей кнопки если она есть
            prevActiveContent.classList.remove('tab__content_active');
        }

        if (prevActiveTab) {
            prevActiveTab.classList.remove('tab_active')
        }
        const tabsArray = Array.from(tabs);
        index = tabsArray.indexOf(tab)
        tab.classList.add('tab_active');

        const contentsArray = Array.from(tabContent);
        contentsArray[index].classList.add('tab__content_active')

    })
})