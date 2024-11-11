// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Loader functionality
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  });
  
  // Timer functionality
  class CountdownTimer {
    constructor(duration, display) {
      this.duration = duration;
      this.display = display;
      this.timer = null;
      this.startTime = null;
      this.remaining = duration;
    }
  
    start() {
      this.startTime = Date.now();
      this.timer = setInterval(() => this.update(), 1000);
    }
  
    update() {
      const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
      this.remaining = this.duration - elapsed;
  
      if (this.remaining <= 0) {
        clearInterval(this.timer);
        this.display.textContent = "00:00";
        this.updateProgress(0);
        return;
      }
  
      const minutes = Math.floor(this.remaining / 60);
      const seconds = this.remaining % 60;
      this.display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      // Update progress circle
      const progress = (this.remaining / this.duration) * 226; // 226 is the circumference of the circle
      this.updateProgress(progress);
    }
  
    updateProgress(progress) {
      const circle = document.querySelector('.progress');
      circle.style.strokeDashoffset = 226 - progress;
    }
  }
  
  // Initialize timer when document is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('countdown-timer');
    const timer = new CountdownTimer(300, display); // 300 seconds = 5 minutes
    timer.start();
  });
  
  // Efficiency Chart
  const ctx = document.getElementById('efficiencyChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Operational Efficiency (%)',
        data: [65, 70, 75, 82, 85, 88],
        borderColor: '#3498db',
        tension: 0.4,
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
  
  // Expandable Table Functionality
  document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');
      const expandableRow = row.nextElementSibling;
      
      if (expandableRow.style.display === 'none' || !expandableRow.style.display) {
        expandableRow.style.display = 'table-row';
        button.textContent = 'View Less';
      } else {
        expandableRow.style.display = 'none';
        button.textContent = 'View More';
      }
    });
  });