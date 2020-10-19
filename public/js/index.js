// Loading Slider Animation

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".anime-text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
tl.fromTo(".main-animation", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 }, "-=1");
tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 0.25 }, "-=1");

tl.fromTo(
  ".project-container",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, stagger: 0.25 },
  "-=1"
);

// Scroll Animation

function scrollAppear() {
  var webTypes = document.querySelector(".web-types");
  var skills = document.querySelector(".tech-skills");

  var webTypesPosition = webTypes.getBoundingClientRect().top;
  var skillsPosition = skills.getBoundingClientRect().top;

  var screenPosition = window.innerHeight / 1.1;

  if (webTypesPosition < screenPosition) {
    webTypes.classList.add("appear-animation");
  }
  if (skillsPosition < screenPosition) {
    skills.classList.add("appear-animation");
  }
}

window.addEventListener("scroll", scrollAppear);

// Page Navigtion Section Handler

const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

// Split Scroll Function

// Add Remove Scroll Magic class

function scrollMagicAdd() {
  var screenWidth = window.innerWidth;

  if (screenWidth > 960) {
    function splitScroll() {
      const controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
        duration: "201%",
        triggerElement: ".main-container",
        triggerHook: -1,
      })
        .setPin(".main-container")
        .addTo(controller);
    }

    splitScroll();
  }
}

scrollMagicAdd();
// window.addEventListener("scroll", scrollMagicAdd);

// Contact Form Label handler

$(".js-input").keyup(function () {
  if ($(this).val()) {
    $(this).addClass("not-empty");
  } else {
    $(this).removeClass("not-empty");
  }
});
