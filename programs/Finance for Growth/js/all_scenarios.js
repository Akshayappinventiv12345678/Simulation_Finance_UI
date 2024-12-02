// Scenarios Data
const scenarios = [
  {
    title: "Scenario 1: Reaching Out to Old Inactive Customer",
    description:
      "This scenario explores the strategic financial approach to customer reactivation. Participants will analyze the potential economic value of reconnecting with dormant customer relationships, developing targeted communication strategies, and creating financial incentives that can reignite business interactions. The exercise emphasizes the cost-effectiveness of customer retention versus acquisition and the nuanced financial approaches required to successfully re-engage past clients. ",
  },
  {
    title: "Scenario 2: Organizing Sales Day at Customer Location ",
    description:
      "A comprehensive examination of innovative customer engagement strategies from a financial perspective. Participants will develop a strategic plan for organizing an on-site sales event, analyzing the financial investments required, potential revenue generation opportunities, and the long-term relationship-building value of direct customer interactions. The scenario challenges participants to create a financially viable approach to customer engagement that balances direct costs with potential strategic benefits.",
  },
  {
    title: "Scenario 3: Expanding the Sales Team for New Business Development",
    description:
      "This scenario addresses the critical financial considerations involved in organizational growth through sales team expansion. Participants will navigate the complex decision-making process of team scaling, including financial analysis of recruitment costs, potential revenue generation, performance metrics, and long-term strategic implications of expanding sales capabilities. The exercise emphasizes the delicate balance between investment in human capital and expected financial returns.",
  },
  {
    title: "Scenario 4: Bid for a New Contract",
    description:
      "A strategic exploration of the financial complexities involved in competitive contract bidding. Participants will develop sophisticated approaches to creating financially viable and competitive contract proposals, analyzing risk factors, potential profitability, and strategic long-term value. The scenario challenges participants to balance aggressive pricing strategies with maintaining financial sustainability and organizational profitability.",
  },
  {
    title: "Scenario 5: Cash Flow Crisis - Pursue External Financing",
    description:
      "A critical examination of financial crisis management and external financing strategies. Participants will navigate the challenging process of addressing significant cash flow challenges, exploring various external financing options, and developing comprehensive strategies for financial stabilization. The scenario emphasizes strategic financial problem-solving, understanding different financing mechanisms, and creating robust financial recovery plans.",
  },
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
