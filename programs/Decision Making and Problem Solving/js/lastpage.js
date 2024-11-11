// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 800,
      once: true,
    });
  });
  
  // Loader
  window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
    
    // Initialize Confetti after loader is hidden
    launchConfetti();
    // Optional: Launch multiple bursts
    setTimeout(launchConfetti, 1000);
    setTimeout(launchConfetti, 2000);
  });
  
  // Initialize Confetti
  function launchConfetti() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  // Countdown Timer with Circular Progress
  const countdownDuration = 5 * 60; // 5 minutes in seconds
  let remainingTime = countdownDuration;
  const timerElement = document.getElementById('countdown-timer');
  const progressCircle = document.querySelector('.progress');
  const totalDash = 2 * Math.PI * 36; // Circumference for r=36
  
  // Initialize the timer
  progressCircle.style.strokeDasharray = totalDash;
  progressCircle.style.strokeDashoffset = totalDash;
  progressCircle.style.stroke = '#4E67EB'; // Initial color
  updateTimer(); // Initial call
  const timerInterval = setInterval(updateTimer, 1000);
  
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
      alert('Time is up! The simulation will now end.');
      window.location.href = "index.html"; // Redirect to index or desired action
    }
  }
  
  // Accessibility: Keyboard Navigation for Buttons
  const buttons = document.querySelectorAll('.footer-buttons .button');
  buttons.forEach(button => {
    button.setAttribute('tabindex', '0');
    button.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
  