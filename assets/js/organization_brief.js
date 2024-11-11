// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
  });
  
  // Loader
  window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
  });
  
  // Countdown Timer with Circular Progress
  const countdownDuration = 5 * 60; // 5 minutes in seconds
  let remainingTime = countdownDuration;
  const timerElement = document.getElementById('countdown-timer');
  const progressCircle = document.querySelector('.progress');
  const totalDash = 251; // Circumference for r=40 (2 * π * 40 ≈ 251)
  
  function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
    // Update circular progress
    const progressOffset = totalDash - (remainingTime / countdownDuration) * totalDash;
    progressCircle.style.strokeDashoffset = progressOffset;
  
    // Change color based on time remaining
    if (remainingTime <= 60) {
      progressCircle.style.stroke = '#ff4e4e'; // Red
    } else if (remainingTime <= 3 * 60) {
      progressCircle.style.stroke = '#f1c40f'; // Yellow
    } else {
      progressCircle.style.stroke = '#4E67EB'; // Blue
    }
  
    if (remainingTime > 0) {
      remainingTime--;
    } else {
      clearInterval(timerInterval);
      clearInterval(progressInterval);
      alert('Time is up! The simulation will now end.');
      window.location.href = "index.html"; // Redirect to index or desired action
    }
  }
  
  // Initialize the timer
  progressCircle.style.strokeDasharray = totalDash;
  progressCircle.style.strokeDashoffset = totalDash;
  updateTimer(); // Initial call
  const timerInterval = setInterval(updateTimer, 1000);
  
  // Progress Bar Update synchronized with the countdown timer
  const progressBarInner = document.getElementById('progress-bar-inner');
  function updateProgressBar() {
    const elapsedTime = countdownDuration - remainingTime;
    const progressPercentage = (elapsedTime / countdownDuration) * 100;
    progressBarInner.style.width = `${progressPercentage}%`;
  }
  
  // Initialize the progress bar
  updateProgressBar(); // Initial call
  const progressInterval = setInterval(updateProgressBar, 1000);
  
  // Expandable Rows in Tables with AOS
  const expandableRows = document.querySelectorAll('.expandable');
  expandableRows.forEach(row => {
    row.addEventListener('click', () => {
      const icon = row.querySelector('i');
      const nextRows = [];
      let sibling = row.nextElementSibling;
      while (sibling && sibling.classList.contains('hidden-row')) {
        nextRows.push(sibling);
        sibling = sibling.nextElementSibling;
      }
      nextRows.forEach(r => {
        if (r.style.display === 'table-row') {
          r.style.display = 'none';
          // Remove AOS animation class if any
          r.removeAttribute('data-aos');
        } else {
          r.style.display = 'table-row';
          // Add AOS animation attribute
          r.setAttribute('data-aos', 'fade-down');
          AOS.refresh(); // Refresh AOS to detect new elements
        }
      });
      // Toggle icon
      if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
      // Re-initialize AOS for dynamic content
      AOS.refreshHard();
    });
  });
  
  // Interactive Chart using Chart.js
  const ctx = document.getElementById('revenueChart').getContext('2d');
  const revenueChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Beginning of Simulation'],
      datasets: [{
        label: 'Revenue (INR Lakhs)',
        data: [400], // Initial data
        backgroundColor: ['#4E67EB']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 20,
            padding: 15
          }
        },
        title: {
          display: true,
          text: 'Values at the Beginning of Simulation'
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeInOutQuad'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Button Click Animations and Chart Updates
  document.querySelectorAll('.buttons .btn').forEach(button => {
    button.addEventListener('click', () => {
      // Example: Update chart data based on button clicked
      if (button.textContent === 'Beginner') {
        revenueChart.data.datasets[0].data[0] = 300;
      } else if (button.textContent === 'Intermediate') {
        revenueChart.data.datasets[0].data[0] = 400;
      } else if (button.textContent === 'Expert') {
        revenueChart.data.datasets[0].data[0] = 500;
      }
      revenueChart.update();
  
      // Update progress bar as an example
      progressBarInner.style.width = '10%';
    });
  });
  
  // Accessibility: Keyboard Navigation for Buttons
  const buttons = document.querySelectorAll('.buttons .btn');
  buttons.forEach(button => {
    button.setAttribute('tabindex', '0');
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
  