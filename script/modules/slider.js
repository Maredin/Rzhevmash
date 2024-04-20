function slider() {

    const sliderLink = document.querySelectorAll('.home__slider-item');
    const sliderImg = document.querySelectorAll('.home__slider-bg');
    const sliderTitle = document.querySelectorAll('.home__slider-content');
    const sliderDescr = document.querySelectorAll('.home__footer-descr');

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

    /*     item.addEventListener('mouseenter', function () {
            document.querySelector('.child').classList.add('hover-effect');
        });
    
        document.querySelector('.parent').addEventListener('mouseleave', function () {
            document.querySelector('.child').classList.remove('hover-effect');
        });
    
     */





}

export default slider;