"use strict";

//smooth scroll//
//about//
document.addEventListener("DOMContentLoaded", function () {
  var aboutSection = document.getElementById('about');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        aboutSection.classList.add('visible');
        observer.unobserve(aboutSection);
      }
    });
  });
  observer.observe(aboutSection);
});
//# sourceMappingURL=portfolio.dev.js.map
