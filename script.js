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