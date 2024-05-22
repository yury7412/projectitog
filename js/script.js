document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger_menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tabItems = document.querySelectorAll('.tab__list li');
    const tabContents = document.querySelectorAll('.tab_content');

    tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabNumber = tab.getAttribute('data-tab');

            tabItems.forEach(item => item.classList.remove('active_tab'));
            tab.classList.add('active_tab');

            tabContents.forEach(content => {
                if (content.getAttribute('data-content') === tabNumber) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});