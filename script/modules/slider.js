function slider() {

    const sliderLink = document.querySelectorAll('.home__slider-item');
    const sliderImg = document.querySelectorAll('.home__slider-bg');
    const sliderTitle = document.querySelectorAll('.home__slider-content');
    const sliderDescr = document.querySelectorAll('.home__footer-descr');

    // Скрыть не активные элементы
    function hide() {
        sliderLink.forEach(item => {
            item.classList.remove('active');
        })
        sliderImg.forEach(item => {
            item.classList.remove('active');
        })

        sliderTitle.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = 0;
        })

        sliderDescr.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = 0;
        })
    }

    // Показать активный
    function show(i) {
        sliderLink[i].classList.add('active');
        sliderImg[i].classList.add('active');
        sliderTitle[i].classList.add('active');
        sliderDescr[i].classList.add('active');
        setTimeout(() => {
            sliderTitle[i].style.opacity = 1;
            sliderDescr[i].style.opacity = 1;
        }, 100)

    }
    sliderLink.forEach((item, i) => {
        item.addEventListener('mouseenter', function () {
            hide();
            show(i)
        });
    })


}

export default slider;