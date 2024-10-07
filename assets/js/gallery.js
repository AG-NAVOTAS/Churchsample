var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
        autoplay:{

    delay:3000,
    disableOnInteraction:false,
  }

});



