// Scenarios Data
const scenarios = [
  {
    title: "Scenario 1: Labor Strike",
    description:
      "A complex exploration of technological transformation and workforce dynamics in the context of IoT implementation. Participants will analyze the intricate interactions between technological innovation and human workforce considerations. The scenario challenges professionals to develop comprehensive strategies that balance technological advancement with workforce engagement, addressing potential resistance to technological change, and creating collaborative approaches to organizational transformation.",
  },
  {
    title: "Scenario 2: Implementing Predictive Maintenance Using IoT Data",
    description:
      "This scenario provides an in-depth examination of IoT's transformative potential in maintenance strategy. Participants will develop sophisticated approaches to leveraging real-time data collection and advanced analytics for predictive maintenance protocols. The exercise emphasizes creating data-driven maintenance strategies that optimize equipment performance, reduce operational downtime, and generate significant cost savings through intelligent technological integration.",
  },
  {
    title: "Scenario 3: Enhancing Quality Control through Real-Time IoT Monitoring",
    description:
      "A comprehensive analysis of how IoT technologies can revolutionize quality control processes in manufacturing environments. Participants will explore advanced methodologies for implementing real-time monitoring systems, developing sophisticated data analysis approaches, and creating responsive quality management strategies. The scenario challenges professionals to transform traditional quality control approaches through intelligent technological integration.",
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
