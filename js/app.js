gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
});

// Hero section animation
gsap.fromTo(
  ".hero-section",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "center",
      end: "900",

      scrub: true,
    },
  }
);

// Left gallery block
const itemsL = gsap.utils.toArray(
  ".portfolio__gallery__left .portfolio__gallery__item"
);

itemsL.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: -100,
      y: -200,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",

        scrub: true,
      },
    }
  );
});

// Left gallery block
const itemsR = gsap.utils.toArray(
  ".portfolio__gallery__right .portfolio__gallery__item"
);

itemsR.forEach((item) => {
  gsap.fromTo(
    item,
    {
      x: 100,
      y: -200,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",

        scrub: true,
      },
    }
  );
});
