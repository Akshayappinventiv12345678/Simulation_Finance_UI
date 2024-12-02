// Scenarios Data
const scenarios = [
  {
    title: "Scenario 1: Participating in RFQ for New Bids",
    description:
      "This scenario provides a comprehensive exploration of the financial intricacies involved in responding to Request for Quotation (RFQ) processes. Participants will develop advanced skills in developing financially competitive and strategically sound bid proposals. The exercise challenges professionals to balance precise cost calculations, competitive pricing strategies, and long-term profitability considerations while navigating the complex landscape of competitive bidding.",
  },
  {
    title: "Scenario 2: Optimize Pricing Strategy",
    description:
      "A sophisticated analysis of pricing strategy development that goes beyond simple cost-plus models. Participants will explore complex pricing methodologies that consider market dynamics, competitive positioning, customer perceived value, and organizational strategic objectives. The scenario emphasizes the delicate balance between maintaining competitive market positioning and ensuring robust financial performance through strategic pricing approaches.",
  },
  {
    title: "Scenario 3: Cash Flow Crisis - Due to Delays in Customer Payments",
    description:
      "This critical scenario addresses one of the most challenging financial management issues facing businesses: managing cash flow disruptions caused by payment delays. Participants will develop comprehensive strategies for mitigating financial risks, implementing effective accounts receivable management techniques, and creating proactive approaches to maintain financial stability in the face of unpredictable customer payment behaviors.",
  },
  {
    title: "Scenario 4: Cash Flow Crisis - Reduce Operational Costs",
    description:
      "A strategic examination of financial optimization through operational cost reduction. Participants will navigate the complex challenge of identifying and implementing cost-cutting measures without compromising organizational capabilities or long-term strategic potential. The scenario emphasizes the nuanced approach required to balance immediate financial relief with maintaining organizational effectiveness and future growth potential.",
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
