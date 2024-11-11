// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
  });
  
  // Loader
  window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
  });
  
  // Countdown Timer with Circular Progress
  const countdownDuration = 5 * 60; // 5 minutes in seconds
  let remainingTime = countdownDuration;
  const timerElement = document.getElementById('countdown-timer');
  const progressCircle = document.querySelector('.progress');
  const totalDash = 2 * Math.PI * 36; // Circumference for r=36
  
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
      window.location.href = "index.html";
    }
  }
  
  // Initialize the timer
  progressCircle.style.strokeDasharray = totalDash;
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
  