// Hide Loader Once Page is Fully Loaded
window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
});

// Form Elements
const form = document.getElementById('loginForm');
const companyInput = document.getElementById('company');
const userIdInput = document.getElementById('userId');
const passwordInput = document.getElementById('password');

// Form Submission Event
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        // Simulate form submission delay
        const submitButton = form.querySelector('.button');
        submitButton.textContent = 'Logging In...';
        submitButton.disabled = true;
        setTimeout(() => {
            window.location.href = 'programlist.html';  // Redirect to overview.html after successful login
        }, 1500);
    }
});

// Form Validation Function
function validateForm() {
    let isValid = true;

    // Validate Company Name
    if (!companyInput.value.trim()) {
        showError('companyError', 'Company name is required');
        isValid = false;
    } else {
        hideError('companyError');
    }

    // Validate User ID
    if (!userIdInput.value.trim()) {
        showError('userIdError', 'User ID is required');
        isValid = false;
    } else {
        hideError('userIdError');
    }

    // Validate Password
    if (!passwordInput.value) {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        hideError('passwordError');
    }

    return isValid;
}

// Show Error Message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Hide Error Message
function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'none';
}

// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle i');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
