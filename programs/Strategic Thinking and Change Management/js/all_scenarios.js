// Scenarios Data
const scenarios = [
  {
    title: "Scenario 1: Strategic Partnership with a Non-Competing Manufacturer",
    description:
      "This scenario challenges participants to develop a strategic partnership with a non-competing manufacturer. Participants will analyze the potential benefits and risks of the partnership, including increased market share, improved competitiveness, and potential cultural and operational challenges. They will also evaluate the potential implications of the partnership on the company's overall business strategy and competitiveness.",
  },
  {
    title: "Scenario 2: International Competitor Entry",
    description:
      "In this scenario, participants are tasked with responding to the entry of an international competitor in the market. Participants will analyze the competitor's strengths and weaknesses, as well as the potential implications of their entry on the market and the company's business strategy. They will also develop strategies to compete effectively with the new entrant, including product differentiation, pricing strategies, and marketing campaigns.",
  },
  {
    title: "Scenario 3: Merger and Acquisition - Acquire a Smaller Competitor",
    description:
      "This scenario challenges participants to evaluate the strategic implications of acquiring a smaller competitor. Participants will analyze the potential benefits and risks of the acquisition, including increased market share, improved competitiveness, and potential cultural and operational challenges. They will also evaluate the potential implications of the acquisition on the company's overall business strategy and competitiveness.",
  },
  {
    title: "Scenario 4: Sales Demand Fluctuation Due to New Regulations",
    description:
      "In this scenario, participants are tasked with responding to fluctuations in sales demand due to new regulations. Participants will analyze the potential implications of the new regulations on the company's sales and revenue, as well as the potential opportunities and challenges presented by the changes. They will also develop strategies to adapt to the new regulations, including product redesign, pricing strategies, and marketing campaigns.",
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
