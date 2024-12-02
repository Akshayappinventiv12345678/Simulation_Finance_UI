// Scenarios Data
const scenarios = [
  {
    title: "Scenario 1: Sudden Decrease in Sales due to Market Competition",
    description:
      "This scenario challenges participants to respond to a sudden decrease in sales due to market competition. Participants will analyze the potential causes of the sales decline, including changes in market trends, competitor activity, and customer behavior. They will also develop strategies to address the sales decline, including product redesign, pricing strategies, and marketing campaigns.",
  },
  {
    title: "Scenario 2: Responding to Requests for Proposals (RFP)",
    description:
      "In this scenario, participants are tasked with developing strategies for responding to requests for proposals (RFP) in the digital manufacturing industry. Participants will analyze the key components of a successful RFP response, including technical capabilities, pricing strategies, and project management approaches. They will also evaluate the potential benefits and risks of responding to RFPs, including increased revenue, improved competitiveness, and potential resource constraints.",
  },
  {
    title: "Scenario 3: Implementing Additive Manufacturing (3D Printing)",
    description:
      "This scenario challenges participants to evaluate the applications and benefits of implementing additive manufacturing (3D printing) in manufacturing operations. Participants will analyze the potential advantages of additive manufacturing, including increased product complexity, reduced material waste, and improved production efficiency. They will also evaluate the potential challenges and limitations of implementing additive manufacturing, including high equipment costs, limited material options, and potential quality control issues.",
  },
  {
    title: "Scenario 4: Developing a Smart Factory with Digital Twin Technology",
    description:
      "In this scenario, participants are tasked with developing strategies for implementing digital twin technology and smart factory solutions in manufacturing operations. Participants will analyze the potential benefits of digital twin technology, including improved production efficiency, reduced downtime, and enhanced product quality. They will also evaluate the potential challenges and limitations of implementing digital twin technology, including high equipment costs, limited data analytics capabilities, and potential cybersecurity risks.",
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
