// Scenarios Data
const scenarios = [
  {
      title: "Scenario 1: Bidding for New Projects",
      description: "This scenario explores the complex strategic process of competitive project bidding. Participants will analyze how to develop compelling, financially viable proposals that balance competitive pricing with profitability. The exercise focuses on evaluating project risks, understanding client requirements, leveraging competitive intelligence, and constructing a bid strategy that maximizes the likelihood of winning while protecting the organization's financial interests."
  },
  {
      title: "Scenario 2: Sudden Decrease in Sales Due to Market Competition",
      description: "A critical examination of organizational resilience and adaptive strategies when facing unexpected market challenges. Participants will diagnose the root causes of sales decline, assess competitive dynamics, and develop comprehensive recovery strategies. The scenario emphasizes rapid market analysis, strategic repositioning, potential product/service modifications, and implementing targeted marketing and sales interventions to counteract competitive pressures."
  },
  {
    title: "Scenario 3: Capital Investment - New Machinery",
    description: "This strategic decision-making scenario centers on evaluating and executing significant capital investments in technological infrastructure. Participants will navigate the complex decision-making process of assessing new machinery's potential through financial, operational, and strategic lenses. Key considerations include return on investment, technological obsolescence, operational efficiency gains, long-term competitive advantages, and aligning capital expenditure with broader organizational strategic objectives."
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