(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 950) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Слайдер в about

    new Swiper('.about-slider', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 50,
        pagination: {
            el: '.about__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}" data-index="${index + 1}"></span>`;
            },
        },
        on: {
            init: function () {
                updatePagination(this.realIndex);
            },
            slideChange: function () {
                updatePagination(this.realIndex);
            },
        },
    });

    function updatePagination(activeIndex) {
        const bullets = document.querySelectorAll('.about__pagination .swiper-pagination-bullet');
        bullets.forEach((bullet, index) => {
            bullet.textContent = index === activeIndex ? index + 1 : '';
        });
    }

    // Табы total

    const tabs = document.querySelectorAll(".tabs__item");
    const blocks = document.querySelectorAll(".tabs__block");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove("active"));
            blocks.forEach(b => b.classList.remove("active"));

            this.classList.add("active");
            const targetId = this.getAttribute("href").replace("#", "");
            const targetBlock = document.getElementById(targetId);
            if (targetBlock) {
                targetBlock.classList.add("active");
            }
        });
    });

    // Активируем первый таб по умолчанию
    if (tabs.length > 0) {
        tabs[0].click();
    }

    // Табы schedule

    const tabs2 = document.querySelectorAll(".schedule__item");
    const blocks2 = document.querySelectorAll(".schedule__block");

    tabs2.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            tabs2.forEach(t => t.classList.remove("active"));
            blocks2.forEach(b => b.classList.remove("active"));

            this.classList.add("active");
            const targetId = this.getAttribute("href").replace("#", "");
            const targetBlock = document.getElementById(targetId);
            if (targetBlock) {
                targetBlock.classList.add("active");
            }
        });
    });

    // Активируем первый таб по умолчанию
    if (tabs2.length > 0) {
        tabs2[0].click();
    }

    // Табы adress

    const tabs3 = document.querySelectorAll(".adress__item");
    // const blocks3 = document.querySelectorAll(".adress__block");

    tabs3.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            tabs3.forEach(t => t.classList.remove("active"));
            // blocks3.forEach(b => b.classList.remove("active"));

            this.classList.add("active");
            // const targetId = this.getAttribute("href").replace("#", "");
            // const targetBlock = document.getElementById(targetId);
            // if (targetBlock) {
            //     targetBlock.classList.add("active");
            // }
        });
    });

    // Активируем первый таб по умолчанию
    if (tabs3.length > 0) {
        tabs3[0].click();
    }

})()