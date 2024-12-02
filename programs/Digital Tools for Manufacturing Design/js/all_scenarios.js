// Scenarios Data
const scenarios = [
  {
      title: "Scenario 1: Rapid Technological Advancements and Increased Competition",
      description: "This scenario explores the critical challenge of maintaining competitive advantage in a technological landscape characterized by unprecedented rapid innovation. Participants will analyze how manufacturing organizations can strategically respond to accelerating technological changes, balancing investment in emerging technologies with operational efficiency. The exercise focuses on developing adaptive strategies that allow organizations to remain competitive while managing the financial and operational risks associated with technological transformation."
  },
  {
      title: "Scenario 2: Integration of 3D Printing and Traditional Manufacturing",
      description: "A comprehensive examination of the transformative potential of additive manufacturing technologies within existing production ecosystems. Participants will navigate the complex process of integrating 3D printing technologies alongside traditional manufacturing methods. The scenario emphasizes strategic decision-making in technological adoption, evaluating cost-benefit analyses, understanding technological limitations and opportunities, and creating integrated manufacturing approaches that leverage the unique strengths of both traditional and additive manufacturing technologies."
  },
  {
    title: "Scenario 3: Balancing Design for Manufacturability (DFM) with Aesthetic Design",
    description: "This nuanced scenario challenges participants to resolve the inherent tension between functional manufacturability and aesthetic design requirements. Participants will develop sophisticated strategies that simultaneously optimize product design for manufacturing efficiency and visual appeal. The exercise explores the complex interdisciplinary approach required to create products that meet both technical manufacturing constraints and market-driven aesthetic expectations, emphasizing the critical role of integrated design thinking in modern manufacturing."
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