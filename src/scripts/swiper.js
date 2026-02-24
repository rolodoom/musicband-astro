import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function initSwipers() {
  const sliders = document.querySelectorAll(".swiper");

  sliders.forEach((slider) => {
    if (slider.swiper) {
      slider.swiper.destroy(true, true);
    }

    new Swiper(slider, {
      modules: [Navigation, Pagination],
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
}
