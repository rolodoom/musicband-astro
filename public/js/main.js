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
      autoplay: {
        delay: 5000,
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },
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

(function () {
  // Listen for Escape key presses
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Try to restore scrolling
      document.body.style.overflow = "";

      // Make sure page can receive pointer events again
      document.body.style.pointerEvents = "auto";

      // Optional: focus on the body so keyboard works again
      document.body.focus?.();
    }
  });
})();
