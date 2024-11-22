// page1.js

// Countdown Timer with Circular Progress
const countdownDuration = 5 * 60; // 5 minutes in seconds
let remainingTime = countdownDuration;
const timerElement = document.getElementById('countdown-timer');
const progressCircle = document.querySelector('.progress');
const totalDash = 2 * Math.PI * 40; // Circumference for r=40 ≈ 251.327

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
    clearInterval(progressInterval);
    alert('Time is up! The simulation will now end.');
    window.location.href = "page2.html"; // Redirect to page2.html or desired action
  }
}

// Initialize the timer
progressCircle.style.strokeDasharray = `${totalDash}`;
progressCircle.style.strokeDashoffset = `${totalDash}`;
updateTimer(); // Initial call
const timerInterval = setInterval(updateTimer, 1000);

// Progress Bar Update synchronized with the countdown timer
const progressBarInner = document.getElementById('progress-bar-inner');
function updateProgressBar() {
  const elapsedTime = countdownDuration - remainingTime;
  const progressPercentage = (elapsedTime / countdownDuration) * 100;
  progressBarInner.style.width = `${progressPercentage}%`;
}

// Initialize the progress bar
updateProgressBar(); // Initial call
const progressInterval = setInterval(updateProgressBar, 1000);

// Expandable Rows in Tables
const expandableRows = document.querySelectorAll('.expandable');
expandableRows.forEach(row => {
  row.addEventListener('click', () => {
    const icon = row.querySelector('i');
    const nextRows = [];
    let sibling = row.nextElementSibling;
    while (sibling && sibling.classList.contains('hidden-row')) {
      nextRows.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    nextRows.forEach(r => {
      r.style.display = r.style.display === 'table-row' ? 'none' : 'table-row';
    });
    // Toggle icon
    if (icon.classList.contains('fa-plus')) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });
});

// Interactive Chart using Chart.js
const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Before Scenario', 'After Scenario'],
    datasets: [{
      label: 'Revenue (INR Lakhs)',
      data: [450, 0], // Initial data
      backgroundColor: ['#4E67EB', '#f1c40f']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 20,
          padding: 15
        }
      },
      title: {
        display: true,
        text: 'Values Before the Scenario'
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Remove old function to handle option selection (if any)

// --- New code for modal functionality starts here ---

// Accounting entries data
const accountingEntries = {
  reduceOperational: `
Accounting Entries for Reduce Operational Costs

Entry 1: Cost savings from reducing Operating Expenses - labor and overhead
Debit: 12 Cash/Bank INR 2,00,000
Credit: 60 Wages Payable INR 2,00,000

Entry 2: Cost savings from reducing Operating Expenses - Marketing Expenses
Debit: 12 Cash/Bank INR 1,50,000
Credit: 70 Marketing Expenses INR 1,50,000

Closing Entries:
Entry 3: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 70 Administrative Expenses (P&L) INR 1,50,000
Debit: 60 Wages Payable (P&L) INR 2,00,000
Credit: 27 Retained Earnings (Equity) INR 3,50,000
`,

  streamlineOps: `
Accounting Entries for Streamlining Specific Operations

Entry 1: Reduction in inventory levels due to process efficiency - Lean management and inventory optimization
Debit: 50 Cost of Goods Sold (COGS) INR 1,50,000
Credit: 14 Inventory INR 1,50,000

Closing Entries:
Entry 2: Closing Expense Accounts, transferring total expenses to Retained Earnings
Debit: 27 Retained Earnings (Equity) INR 1,50,000
Credit: 50 Cost of Goods Sold (COGS) (P&L) INR 1,50,000
`
};

// Function to show the modal with the appropriate entries
function showModal(option) {
  const modal = document.getElementById('accounting-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalEntries = document.getElementById('modal-entries');
  const closeButton = document.querySelector('.close-button');

  // Clear any existing countdown timer elements
  modalEntries.parentNode.querySelectorAll('div').forEach(el => {
    if (el.style && el.style.fontWeight === 'bold') {
      el.remove();
    }
  });

  // Set the modal title and entries based on the option
  if (option === 'reduceOperational') {
    modalTitle.textContent = 'Accounting Entries for Reduce Operational Costs';
    modalEntries.textContent = accountingEntries.reduceOperational;
    // Update financials and chart
    updateFinancials('reduceOperational');
  } else if (option === 'streamlineOps') {
    modalTitle.textContent = 'Accounting Entries for Streamline Specific Operations';
    modalEntries.textContent = accountingEntries.streamlineOps;
    // Update financials and chart
    updateFinancials('streamlineOps');
  }

  // Display the modal
  modal.style.display = 'block';

  // Disable scrolling on the body
  document.body.style.overflow = 'hidden';

  // Start a 30-second timer before redirecting
  const redirectTimer = setTimeout(() => {
    window.location.href = 'page2.html';
  }, 30000); // 30000 milliseconds = 30 seconds

  // Optional: Display a countdown timer inside the modal
  let countdown = 30;
  const timerDiv = document.createElement('div');
  timerDiv.style.marginTop = '20px';
  timerDiv.style.fontWeight = 'bold';
  timerDiv.textContent = `Redirecting in ${countdown} seconds...`;
  modalEntries.parentNode.appendChild(timerDiv);

  const countdownInterval = setInterval(() => {
    countdown--;
    timerDiv.textContent = `Redirecting in ${countdown} seconds...`;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  // Close the modal when the close button is clicked
  closeButton.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    clearTimeout(redirectTimer); // Clear the timer if the modal is closed manually
    clearInterval(countdownInterval);
  };

  // Close the modal when the user clicks outside of the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
      clearTimeout(redirectTimer); // Clear the timer if the modal is closed manually
      clearInterval(countdownInterval);
    }
  };

  // Handle Esc key to close the modal
  document.onkeydown = function(event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
      clearTimeout(redirectTimer); // Clear the timer if the modal is closed manually
      clearInterval(countdownInterval);
    }
  };
}

// Function to update financial tables based on option
function updateFinancials(option) {
  if (option === 'reduceOperational') {
    // Update chart data and financial tables for Reduce Operational Costs
    revenueChart.data.datasets[0].data[1] = 460; // Example value after implementation
    revenueChart.options.plugins.title.text = 'Values After Reducing Operational Costs';
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Reduce Operational Costs');
  } else if (option === 'streamlineOps') {
    // Update chart data and financial tables for Streamline Specific Operations
    revenueChart.data.datasets[0].data[1] = 455; // Example value after implementation
    revenueChart.options.plugins.title.text = 'Values After Streamlining Specific Operations';
    revenueChart.update();
    // Update progress bar as an example
    progressBarInner.style.width = '50%';
    console.log('Financials updated for option: Streamline Specific Operations');
  }
}

// Accessibility: Keyboard Navigation for Buttons
const buttons = document.querySelectorAll('.footer-buttons .end-button, .footer-buttons .next-button');
buttons.forEach(button => {
  button.setAttribute('tabindex', '0');
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});

// Smooth Page Transition (optional)
window.onload = () => {
  document.body.classList.add('loaded');
};

// --- End of new code for modal functionality ---
