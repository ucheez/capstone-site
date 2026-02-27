document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ORIENTATION CHART
  ========================= */

  const ctx = document.getElementById("orientationChart");

  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Horizontal", "Vertical", "Diagonal"],
        datasets: [{
          label: "Percentage (%)",
          data: [43.46, 22.65, 33.90],
          backgroundColor: [
            "#38bdf8",
            "#00ffc8",
            "#7a5cff"
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: "#ffffff" }
          }
        },
        scales: {
          x: { ticks: { color: "#ccc" } },
          y: {
            beginAtZero: true,
            ticks: { color: "#ccc" }
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