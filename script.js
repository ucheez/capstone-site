/* =========================
   ORIENTATION CHART
========================= */

const ctx = document.getElementById('orientationChart');

if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Horizontal', 'Vertical', 'Diagonal'],
      datasets: [{
        label: 'Percentage (%)',
        data: [45, 35, 20],
        backgroundColor: [
          '#4db8ff',
          '#00ffc8',
          '#7a5cff'
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#ffffff'
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#ccc' }
        },
        y: {
          beginAtZero: true,
          ticks: { color: '#ccc' }
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
   ACTIVE NAV HIGHLIGHT
========================= */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* =========================
   LIGHTBOX (SAFE VERSION)
========================= */

/******** IMAGE ZOOM FUNCTIONALITY ********/

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && lightboxImg) {

  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", (e) => {
      // Prevent clicking the lightbox image from reopening it
      if (img.closest(".lightbox")) return;

      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });

  // Click outside image to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // ESC key closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });

  // Close button
  if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }
}

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