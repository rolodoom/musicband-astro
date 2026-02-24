import { initAOS } from "./aos.js";
import { initSwipers } from "./swiper.js";
import { initFancybox } from "./fancybox.js";

export function initUI() {
  initAOS();
  initSwipers();
  initFancybox();
}
