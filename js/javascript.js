$(document).ready(function(){
    $('.next').click(function(){
        var currentImage = $('.text-slider.curry');
        var currentImageIndex = $('.text-slider.curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.text-slider').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');

        if(nextImageIndex == ($('.text-slider:last').index()+1)){
            $('.text-slider').eq(0).fadeIn(1000);
            $('.text-slider').eq(0).addClass('.curry');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('curry');
        }
    }
};