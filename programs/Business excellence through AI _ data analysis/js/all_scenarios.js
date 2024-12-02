// Scenarios Data
const scenarios = [
  {
      title: "Scenario 1: Shifts in Sales Profile Towards Customization and Niche Markets",
      description: "This scenario explores the evolving landscape of sales strategies in the age of AI-driven personalization. Participants will analyze how businesses can leverage data analysis to identify and target increasingly specific customer segments, developing tailored product offerings and marketing approaches that respond to niche market demands."
  },
  {
      title: "Scenario 2: Integration of New Production Processes and Technologies",
      description: "Participants will examine the transformative potential of AI and advanced data analytics in manufacturing. The scenario focuses on how intelligent technologies can optimize production workflows, predict maintenance needs, enhance quality control, and create more flexible, responsive manufacturing ecosystems."
  }
];

const scenarioListContainer = document.querySelector('.scenario-list');

// Dynamically generate scenario content
scenarios.forEach(scenario => {
  const scenarioSection = document.createElement('div');
  scenarioSection.classList.add('scenario-section');

  const scenarioTitle = document.createElement('h3');
  scenarioTitle.textContent = scenario.title;
  scenarioSection.appendChild(scenarioTitle);

  const scenarioDescription = document.createElement('p');
  scenarioDescription.textContent = scenario.description;
  scenarioSection.appendChild(scenarioDescription);

  scenarioListContainer.appendChild(scenarioSection);
});

// Chatbot Widget Functionality
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotPopup = document.getElementById('chatbot-popup');

chatbotIcon.addEventListener('click', () => {
  chatbotPopup.style.display = chatbotPopup.style.display === 'block' ? 'none' : 'block';
});

// Countdown Timer Logic
const countdownDuration = 5 * 60;
let remainingTime = countdownDuration;
const timerElement = document.getElementById('countdown-timer');
const progressCircle = document.querySelector('.progress');
const totalDash = 251;

function updateTimer() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const progressOffset = totalDash - (remainingTime / countdownDuration) * totalDash;
  progressCircle.style.strokeDashoffset = progressOffset;

  if (remainingTime > 0) {
      remainingTime--;
  } else {
      alert('Time is up! Redirecting...');
      window.location.href = "index.html";
  }
}

progressCircle.style.strokeDasharray = totalDash;
progressCircle.style.strokeDashoffset = totalDash;
setInterval(updateTimer, 1000);