$(document).ready(function () {
  let $slids = $(".example__slids");

  $slids.slick({
    arrows: true,
    infinite: false,
    touchThreshold: 1000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: $(".example-next"),
    prevArrow: $(".example-prev"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
    variableWidth: true,
  });
});

const slids = document.querySelectorAll(".slide-example");

slids.forEach((elem, i) => {
  elem.addEventListener("click", () => {
    slids.forEach((el) => el.classList.remove("slide-example--active"));
    elem.classList.add("slide-example--active");
    showTabContent(i);
  });
});

const tabContents = document.querySelectorAll(".example__info");

function hideAllTabContents() {
  tabContents.forEach((elem) => {
    elem.classList.remove("example__info-active");
  });
}

function showTabContent(index) {
  hideAllTabContents();
  tabContents[index].classList.add("example__info-active");
}

$(document).ready(function () {
  $(".steps__slids").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    touchThreshold: 1000,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    nextArrow: $(".steps-next"),
    prevArrow: $(".steps-prev"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Добавляем классы "active" и "up" к первому элементу при загрузке страницы
$(document).ready(function () {
  var $firstItem = $(".questions__item").first();
  var $firstAnswer = $firstItem.find(".questions__item-answer");
  var $firstArrow = $firstItem.find("svg");

  $firstItem.addClass("active");
  $firstArrow.addClass("up");
  $firstAnswer.slideDown(200);
});

// Обработчик события для клика по элементу
$(".questions__item-parent").click(function () {
  var $parent = $(this).closest(".questions__item");
  var $items = $parent.find(".questions__item-answer");
  var $arrow = $(this).find("svg");

  $parent.toggleClass("active");
  $items.slideToggle(200);

  if ($parent.hasClass("active")) {
    $arrow.addClass("up");
  } else {
    $arrow.removeClass("up");
  }

  $(".questions__item")
    .not($parent)
    .removeClass("active")
    .find(".questions__item-answer")
    .slideUp(200);
});

// бургер

$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger-wrapper").toggleClass("header__burger-wrapper--active");
    $(".header__burger").toggleClass("header__burger--active");
  });
});

// модалка

$(".modal-wrap").on("click", function (event) {
  event.stopPropagation();
});

$(".fancybox").fancybox();


let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-image");
let closeBtn = document.getElementsByClassName("close")[0];

$(".fancyimage").on("click", function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  setTimeout(function() {
    modal.classList.add("show");
  }, 50); // Добавляем задержку для анимации
});

closeBtn.onclick = function() {
  modal.classList.remove("show");
  setTimeout(function() {
    modal.style.display = "none";
  }, 300); // Добавляем задержку для анимации
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    setTimeout(function() {
      modal.style.display = "none";
    }, 300); // Добавляем задержку для анимации
  }
};