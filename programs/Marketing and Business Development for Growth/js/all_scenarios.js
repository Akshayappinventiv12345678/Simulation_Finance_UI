// Scenarios Data
const scenarios = [
  {
    title: "Scenario 1: Capturing Seasonal Sales Demand",
    description:
      "This scenario challenges participants to develop a marketing strategy to capture seasonal sales demand. Participants will analyze market trends, customer behavior, and competitor activity to inform their strategy. They will also evaluate the potential benefits of implementing a seasonal sales demand capture strategy, including increased revenue, improved customer satisfaction, and enhanced brand loyalty.",
  },
  {
    title: "Scenario 2: Capturing Market Share from Competitors",
    description:
      "In this scenario, participants are tasked with developing a competitive strategy to capture market share from competitors. Participants will analyze competitor activity, market trends, and customer behavior to inform their strategy. They will also evaluate the potential benefits of implementing a competitive strategy, including increased revenue, improved market positioning, and enhanced brand reputation.",
  },
  {
    title: "Scenario 3: Reactivating Dormant Sales Channels",
    description:
      "This scenario challenges participants to develop a strategy to reactivate dormant sales channels. Participants will analyze sales channel performance, customer behavior, and market trends to inform their strategy. They will also evaluate the potential benefits of reactivating dormant sales channels, including increased revenue, improved customer satisfaction, and enhanced brand loyalty.",
  }
];

const scenarioListContainer = document.querySelector(".scenario-list");

// Dynamically generate scenario content
scenarios.forEach((scenario) => {
  const scenarioSection = document.createElement("div");
  scenarioSection.classList.add("scenario-section");

  const scenarioTitle = document.createElement("h3");
  scenarioTitle.textContent = scenario.title;
  scenarioSection.appendChild(scenarioTitle);

  const scenarioDescription = document.createElement("p");
  scenarioDescription.textContent = scenario.description;
  scenarioSection.appendChild(scenarioDescription);

  scenarioListContainer.appendChild(scenarioSection);
});

// Chatbot Widget Functionality
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotPopup = document.getElementById("chatbot-popup");

chatbotIcon.addEventListener("click", () => {
  chatbotPopup.style.display =
    chatbotPopup.style.display === "block" ? "none" : "block";
});

// Countdown Timer Logic
const countdownDuration = 5 * 60;
let remainingTime = countdownDuration;
const timerElement = document.getElementById("countdown-timer");
const progressCircle = document.querySelector(".progress");
const totalDash = 251;

function updateTimer() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const progressOffset =
    totalDash - (remainingTime / countdownDuration) * totalDash;
  progressCircle.style.strokeDashoffset = progressOffset;

  if (remainingTime > 0) {
    remainingTime--;
  } else {
    alert("Time is up! Redirecting...");
    window.location.href = "index.html";
  }
}

progressCircle.style.strokeDasharray = totalDash;
progressCircle.style.strokeDashoffset = totalDash;
setInterval(updateTimer, 1000);
