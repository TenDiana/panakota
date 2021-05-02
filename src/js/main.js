var i = 0;
var timer;
var stop;

function autoCarousel (){
    timer = setInterval(function () {
        let img = document.querySelectorAll('.carousel__item');
        ++i
        if (i >= img.length){
            img[i - 1].classList.remove('active')
            i = 0;
            img[i].classList.add('active')
        }else{
            img[i - 1].classList.remove('active')
            img[i].classList.add('active')
        }
    }, 4500)

     stop = setInterval(function () {
        clearInterval(timer)
    }, 30000)
}
autoCarousel();

