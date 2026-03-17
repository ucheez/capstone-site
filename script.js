document.addEventListener("DOMContentLoaded", () => {

  /* =========================
   ERI GAUGE
========================= */

  const eriCtx = document.getElementById("eriChart");

  if (eriCtx) {
    new Chart(eriCtx, {
      type: "doughnut",
      data: {
        labels: ["Low", "Moderate", "High"],
        datasets: [{
          data: [60, 25, 15], 
          backgroundColor: [
            "#38bdf8",
            "#facc15",
            "#ef4444"
          ],
          borderWidth: 0
        }]
      },
      options: {
        cutout: "70%",
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "Electrification Risk Level",
            color: "#ffffff",
            font: { size: 18 }
          }
        }
      }
    });
  }

  /* =========================
   ORIENTATION DISTRIBUTION
========================= */

  const distCtx = document.getElementById("orientationDistributionChart");

  if (distCtx) {
    new Chart(distCtx, {
      type: "bar",
      data: {
        labels: ["Horizontal", "Diagonal", "Vertical"],
        datasets: [{
          label: "Percentage of Column-like Particles (%)",
          data: [43.46, 33.90, 22.65],
          backgroundColor: [
            "#38bdf8",
            "#7a5cff",
            "#00ffc8"
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 1500 },
        plugins: {
          title: {
            display: true,
            text: "Column-like Particle Orientation Distribution",
            color: "#ffffff",
            font: { size: 18, weight: "bold" }
          },
          legend: {
            labels: { color: "#ffffff" }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.raw + "%";
              }
            }
          }
        },
        scales: {
          x: {
            ticks: { color: "#ccc" }
          },
          y: {
            beginAtZero: true,
            max: 50,
            title: {
              display: true,
              text: "Percentage of Column-like Particles (%)",
              color: "#ffffff"
            },
            ticks: {
              color: "#ccc",
              callback: value => value + "%"
            }
          }
        }
      }
    });
  }

  /* =========================
   SCROLL REVEAL
========================= */

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    section.classList.add("section-hidden");
    observer.observe(section);
  });

  /* =========================
   NAVBAR HIGHLIGHT (FIXED)
========================= */

  const navLinks = document.querySelectorAll("nav a");
  const navSections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {

    let current = "";

    navSections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.id;
      }
    });

    // Fix bottom edge case
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
      current = navSections[navSections.length - 1].id;
    }

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

  });

  /* =========================
   LIGHTBOX
========================= */

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  if (lightbox && lightboxImg) {

    document.querySelectorAll("img").forEach(img => {
      img.addEventListener("click", () => {
        if (img.closest(".lightbox")) return;

        lightboxImg.src = img.src;
        lightbox.classList.add("active");
      });
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.classList.remove("active");
      }
    });
  }

});