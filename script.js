document.addEventListener("DOMContentLoaded", () => {

  /* =========================
   ORIENTATION DISTRIBUTION CHART
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
      animation: {
        duration: 1500
      },
      plugins: {
        title: {
          display: true,
          text: "Column-like Particle Orientation Distribution",
          color: "#ffffff",
          font: {
            size: 18,
            weight: "bold"
          }
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
            color: "#ffffff",
            font: {
              size: 14
            }
          },
          ticks: {
            color: "#ccc",
            callback: function(value) {
              return value + "%";
            }
          }
        }
      }
    }
  });
}

  /* =========================
     SCROLL REVEAL ANIMATION
  ========================= */

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

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
   ACTIVE NAVBAR HIGHLIGHT
========================= */

window.addEventListener("scroll", () => {

  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section[id]");

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120; // match navbar height
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }

  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });

});

  /* =========================
     IMAGE ZOOM LIGHTBOX
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


/* =========================
   ORIENTATION IMAGE TOGGLE
========================= */

function toggleImage(type) {
  const img = document.getElementById("orientationImg");
  if (!img) return;

  if (type === "all") {
    img.src = "assets/images/Time_resolved_column_like_particle_counts_by_orientation.png";
  } else if (type === "vertical") {
    img.src = "assets/images/verticalcolumn.png";
  } else if (type === "horizontal") {
    img.src = "assets/images/horizontal_column.png";
  } else if (type === "diagonal") {
    img.src = "assets/images/diagonal_column.png";
  }
}