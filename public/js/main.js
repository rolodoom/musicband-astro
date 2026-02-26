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

(function () {
  // =====================================================
  // NAVBAR CONTROLLER
  // Compatible with Astro <ClientRouter />
  //
  // Key principles:
  // - Do NOT use DOMContentLoaded (fires only once)
  // - Re-query page-dependent elements after navigation
  // - Avoid duplicate event listeners
  // - Handle scroll restoration correctly
  // =====================================================

  function initNavbar() {
    // -------------------------------------------------
    // CORE ELEMENT REFERENCES (persistent - Layout)
    // -------------------------------------------------
    const nav = document.getElementById("mainNav");
    const navContainer = document.getElementById("navContainer");
    const logoImg = document.getElementById("logoImg");

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");

    if (!nav || !navContainer || !logoImg) return;

    // -------------------------------------------------
    // Prevent duplicate initialization
    // (ClientRouter keeps JS runtime alive)
    // -------------------------------------------------
    if (nav.__navbarInitialized) return;
    nav.__navbarInitialized = true;

    // =================================================
    // MOBILE MENU
    // =================================================
    function openMenu() {
      mobileMenu.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    }

    menuBtn?.addEventListener("click", () => {
      mobileMenu.classList.contains("hidden") ? openMenu() : closeMenu();
    });

    mobileCloseBtn?.addEventListener("click", closeMenu);

    mobileMenu?.addEventListener("click", (e) => {
      if (e.target === mobileMenu) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        closeMenu();
      }
    });

    // =================================================
    // SCROLL BEHAVIOR (Shrink + Background)
    // =================================================
    function handleScrollAppearance() {
      if (window.scrollY > 50) {
        nav.classList.add("bg-dark/90", "backdrop-blur-sm");
        nav.classList.remove("bg-transparent");
        navContainer.classList.replace("h-20", "h-16");
        logoImg.classList.replace("h-8", "h-6");
      } else {
        nav.classList.remove("bg-dark/90", "backdrop-blur-sm");
        nav.classList.add("bg-transparent");
        navContainer.classList.replace("h-16", "h-20");
        logoImg.classList.replace("h-6", "h-8");
      }
    }

    // =================================================
    // ACTIVE LINK HIGHLIGHTING
    // IMPORTANT:
    // Sections are re-queried dynamically because
    // page content changes after navigation.
    // =================================================
    function updateActiveLink() {
      const navHeight = navContainer.offsetHeight;
      const sections = [...document.querySelectorAll("section[id]")];
      const navLinks = [
        ...document.querySelectorAll(".nav-link, .mobile-nav-link"),
      ];
      const scrollPos = window.scrollY + navHeight + 1;
      const pageBottom = window.scrollY + window.innerHeight;

      let current = null;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];

        // Check if we are past the top of the section
        if (scrollPos >= section.offsetTop) {
          current = section;
        }

        // Special check: if we reach the bottom of the page, always highlight last section
        if (pageBottom >= document.body.scrollHeight) {
          current = sections[sections.length - 1];
        }
      }

      // Reset all links
      navLinks.forEach((link) => {
        link.classList.remove("text-primary");
        if (link.classList.contains("nav-link"))
          link.classList.add("text-gray-300");
        if (link.classList.contains("mobile-nav-link"))
          link.classList.add("text-gray-400");
      });

      // Highlight current
      if (current) {
        navLinks.forEach((link) => {
          if (link.dataset.section === current.id) {
            link.classList.remove("text-gray-300", "text-gray-400");
            link.classList.add("text-primary");
          }
        });
      }
    }

    // =================================================
    // SMOOTH SCROLL
    // (Re-attaches automatically since links persist)
    // =================================================
    function initSmoothScroll() {
      const navHeight = () => navContainer.offsetHeight;

      document.body.addEventListener("click", (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;

        e.preventDefault();

        const offset =
          target.getBoundingClientRect().top +
          window.scrollY -
          navContainer.offsetHeight;

        window.scrollTo({ top: offset, behavior: "smooth" });

        // Close mobile menu if open
        if (typeof closeMenu === "function") closeMenu();

        // Optional: update URL hash without jumping
        window.history.pushState(null, "", anchor.getAttribute("href"));
      });
    }

    // =================================================
    // GLOBAL SCROLL LISTENER
    // =================================================
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        handleScrollAppearance();
        updateActiveLink();
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) closeMenu();
    });

    // Initial state evaluation
    handleScrollAppearance();
    updateActiveLink();
    initSmoothScroll();
  }

  // =====================================================
  // LIFECYCLE HOOKS
  // =====================================================

  // First page load
  initNavbar();

  // Every Astro navigation
  document.addEventListener("astro:page-load", () => {
    // Recalculate page-dependent state
    const nav = document.getElementById("mainNav");
    if (!nav) return;

    // Re-run only dynamic parts
    const event = new Event("scroll");
    window.dispatchEvent(event);
  });
})();
