scroll(0, 1);
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].parentElement.getBoundingClientRect().top;

    var revealpoint = 250;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal1);
function reveal1() {
  var reveals1 = document.querySelectorAll(".reveal1");
  for (var i = 0; i < reveals1.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals1[i].parentElement.getBoundingClientRect().top;

    var revealpoint = 250;

    if (revealtop < windowheight - revealpoint) {
      reveals1[i].classList.add("active1");
    } else {
      reveals1[i].classList.remove("active1");
    }
  }
}
window.addEventListener("scroll", revealup);
function revealup() {
  var revealsup = document.querySelectorAll(".revealup");
  for (var i = 0; i < revealsup.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = revealsup[i].parentElement.getBoundingClientRect().top;

    var revealpoint = 250;

    if (revealtop < windowheight - revealpoint) {
      revealsup[i].classList.add("active1");
    } else {
      revealsup[i].classList.remove("active1");
    }
  }
}

var swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.2,
    },
    850: {
      slidesPerView: 2.1,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper1 = new Swiper(".swiper1", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 4,
    },
  },
});
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
var p = document.getElementById("one1");
var d = document.getElementById("two2");
var html1 = document.getElementsByTagName("html")[0];
const hamburger = document.querySelector(".hamburger");
p.onclick = function () {
  d.classList.toggle("active");
  html1.classList.toggle("at");

  hamburger.classList.toggle("active");
};
