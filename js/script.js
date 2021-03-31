 $(document).ready(function() {
   $('.slider').slick({
      arrows: true, //Нужны ли кнопки
      dots: true,    //Pagination
      //  adaptiveHeight:true, //Задает кнопок под размер разного слайда
       slidesToShow:1,  //Указывает сколько фото за один раз в экране  
       slidesToScroll:1, //Указывает сколько фото за один скролл
       speed: 1000, //Скорость пролистывания
       cssEase: 'linear',  //тип анимации
       infinite: true,  //infinite
       initialSlide: 0, //при включении какой слайд будет стоять
       autoplay: true, //Самостоятельно играет
       autoplaySpeed: 5000, // Скорость Self playing
       pauseOnFocus: true, // Pause during Focusing
       pauseOnHover: true, //Pause during hovering
       pauseOnDotsHover: true, //Pause during dot hovering
       draggable: true, //For PC swipe function with mouse
       swipe: true, //For mobile swipe function with mouse
       touchThreshold:5, //Controlling swiper
       touchMove: true,
       waitForAnimate: false, //Скорость прокрутки каждого нажатия
       centerMode: false, // Центрирование
       mobileFirst: true
   });
 });


