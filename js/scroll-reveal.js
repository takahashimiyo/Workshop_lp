const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const sections = document.querySelectorAll("main > section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  });

  sections.forEach((section) => {
    // Keep sections already in view visible on initial load.
    if (section.getBoundingClientRect().top >= window.innerHeight) {
      section.classList.add("reveal-pending");
      observer.observe(section);
    }
  });
}