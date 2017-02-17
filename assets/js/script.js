var sliderImages = document.getElementsByClassName('slider-item'),
    currentSlide = 1;



function changeSlide(step) {
    if (step === 1) {
        currentSlide++;
        if (currentSlide >= sliderImages.length) {
            currentSlide = 0;
        }
    } else {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = sliderImages.length - 1;
        }
    }
    
    
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.opacity = '0';
        //sliderImages[i].style.transition = 'all .5 ease';
        sliderImages[i].style.display = 'none';
        
    }
    sliderImages[currentSlide].style.display = 'block';
    //sliderImages[currentSlide].style.transition = 'all .5 ease';
    sliderImages[currentSlide].style.opacity = '1';
}
changeSlide(currentSlide);
