document.addEventListener("DOMContentLoaded", () => {
  const menuBtns = document.querySelectorAll(".header__menu-btn");
  const drops = document.querySelectorAll(".header__dropdown");

  menuBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn
        .closest(".header__menu-item")
        .querySelector(".header__dropdown");

      menuBtns.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("header__menu-btn--active");
        }
      });

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("header__dropdown--active");
        }
      });

      drop.classList.toggle("header__dropdown--active");
      currentBtn.classList.toggle("header__menu-btn--active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header__menu")) {
      menuBtns.forEach((el) => {
        el.classList.remove("header__menu-btn--active");
      });

      drops.forEach((el) => {
        el.classList.remove("header__dropdown--active");
      });
    }
  });
});

// слайдер-hero
const swiperHero = new Swiper(".hero-sliger", {
  allowTouchMove: false,
  loop: true,
  effect: "fade",
  speed: 2000,

  autoplay: {
    delay: 2000,
  },
});

// слайдер
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".gallery-sliger", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 34,

    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },

    breakpoints: {
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
    },
  });
});

// слайдер-2
const swiperTwo = new Swiper(".events-slider", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 34,

  pagination: {
    el: ".events__pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".events__button-next",
    prevEl: ".events__button-prev",
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },

    990: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

// слайдер-3
const swiperThree = new Swiper(".projects-slider", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 34,
  loop: true,

  navigation: {
    nextEl: ".projects__button-next",
    prevEl: ".projects__button-prev",
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    990: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});

// Галерея селект

const element = document.querySelector(".gallery__select");
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

// аккордион
new Accordion(".accordion");

// табы

let howBtn = document.querySelectorAll(".tabs-nav__btn");
let howSlider = document.querySelectorAll(".catalog__tabs-item");

howBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    howBtn.forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    howSlider.forEach(function (element) {
      element.classList.remove("catalog__tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog__tabs-item--active");
  });
});

// тултип

(() => {
  tippy(".js-tooltip-btn", {
    theme: "projects-tooltip",
    maxWidth: 264,
  });
})();

// валидация форм

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");

im.mask(selector);

new JustValidate(".contacts__form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
  colorWrong: "#D11616",
  messages: {
    name: "Недопустимый формат",
    tel: "Недопустимый формат",
  },
});

// карта

let center = [55.75846806898367, 37.60108849999989];

type = "text/javascript" > ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("contacts__map", {
    center: center,
    zoom: 16,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/map-mark.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -11],
    }
  );
  myMap.geoObjects.add(myPlacemark);

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      float: "none",
      position: {
        bottom: 380,
        right: 5,
      },
    },
  });

  myMap.controls.add(zoomControl);

  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      float: "none",
      position: {
        bottom: 320,
        right: 5,
      },
    },
  });

  myMap.controls.add(geolocationControl);

  myMap.controls.remove("rulerControl");
  myMap.behaviors.disable(["scrollZoom"]);
}

// бургер
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav?.classList.toggle("header__content--visible");
  nav.style.transition = "transform 0.6s ease-in-out";
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav?.classList.remove("header__content--visible");
  });
});

nav.addEventListener("transitionend", function () {
  if (!nav.classList.contains("header__content--visible")) {
    nav.style.transition = "";
  }
});

// кнопка поиск
document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("open-search-form").addEventListener("click", (e) => {
    document
      .getElementById("header-search")
      .classList.add("header__search-show");
  });

  document
    .getElementById("header-search-close")
    .addEventListener("click", (e) => {
      document
        .getElementById("header-search")
        .classList.remove("header__search-show");
    });

  document.getElementById("header-search").addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
