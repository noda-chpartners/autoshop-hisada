import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type MotionWindow = Window & { __hisadaMotion?: boolean };

function initSnaps() {
  const scroller = document.querySelector<HTMLElement>("[data-snaps]");
  const prev = document.querySelector<HTMLButtonElement>("[data-snaps-prev]");
  const next = document.querySelector<HTMLButtonElement>("[data-snaps-next]");
  if (!scroller || !prev || !next) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior: ScrollBehavior = reduced ? "auto" : "smooth";

  const sync = () => {
    const max = scroller.scrollWidth - scroller.clientWidth - 2;
    prev.disabled = scroller.scrollLeft <= 2;
    next.disabled = scroller.scrollLeft >= max;
  };

  prev.addEventListener("click", () => {
    scroller.scrollBy({ left: -scroller.clientWidth * 0.78, behavior });
  });
  next.addEventListener("click", () => {
    scroller.scrollBy({ left: scroller.clientWidth * 0.78, behavior });
  });
  scroller.addEventListener("scroll", sync, { passive: true });
  sync();
}

export function initMotion() {
  const root = window as MotionWindow;
  if (root.__hisadaMotion) return;
  root.__hisadaMotion = true;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    autoRaf: false,
    anchors: { offset: -84 },
    duration: 1.05,
    stopInertiaOnNavigate: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const header = document.querySelector(".site-header");
  const syncHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  syncHeader();
  lenis.on("scroll", syncHeader);

  initSnaps();

  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
    hero
      .from(".hero__line > span", {
        yPercent: 110,
        duration: 1.05,
        stagger: 0.08,
      })
      .from(
        ".hero__reveal",
        {
          opacity: 0,
          y: 18,
          duration: 0.75,
          stagger: 0.06,
        },
        0.28,
      )
      .from(
        ".hero__img",
        {
          scale: 1.1,
          duration: 1.5,
          ease: "power2.out",
        },
        0,
      );

    gsap.to(".hero__img", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.set(".stock__grid .card", { opacity: 0, y: 32 });
    ScrollTrigger.batch(".stock__grid .card", {
      start: "top 90%",
      once: true,
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
          overwrite: true,
        });
      },
    });

    gsap.utils.toArray<HTMLElement>(".reveal:not(.card)").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 28,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 86%",
          once: true,
        },
      });
    });
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  document.fonts?.ready.then(() => {
    ScrollTrigger.refresh();
  });
}

initMotion();
