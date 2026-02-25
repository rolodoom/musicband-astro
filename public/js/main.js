(function () {
  AOS.init({
    // once: true,
    duration: 800,
  });
})();

(function () {
  Fancybox.bind("[data-fancybox]");
})();

(function () {
  const sliders = document.querySelectorAll(".swiper");

  sliders.forEach((slider) => {
    if (slider.swiper) {
      slider.swiper.destroy(true, true);
    }

    new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });
})();
