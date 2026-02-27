const ctx = document.getElementById('orientationChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Horizontal', 'Vertical', 'Diagonal'],
    datasets: [{
      label: 'Percentage (%)',
      data: [45, 35, 20],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});
// Scroll reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  section.classList.add("section-hidden");
  observer.observe(section);
});
// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
function toggleImage(type) {
  const img = document.getElementById("orientationImg");

  if (type === "all") {
    img.src = "assets/images/orientation_timeseries.png";
  } else if (type === "vertical") {
    img.src = "assets/images/orientation_vertical.png";
  } else if (type === "horizontal") {
    img.src = "assets/images/orientation_horizontal.png";
  } else if (type === "diagonal") {
    img.src = "assets/images/orientation_diagonal.png";
  }
}