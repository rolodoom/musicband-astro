import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.js";

export function initFancybox() {
  Fancybox.destroy();
  Fancybox.bind("[data-fancybox]");
}
