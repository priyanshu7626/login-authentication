// Mock database of registered users (in real app, use a proper database)
let users = {};

// Register form
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;
    if (regUsername && regPassword) {
        if (users[regUsername]) {
            alert('Username already exists!');
        } else {
            users[regUsername] = regPassword;
            alert('Registration successful!');
            registerForm.reset();
        }
    } else {
        alert('Please fill out all fields!');
    }
});

// Login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const logUsername = document.getElementById('log-username').value;
    const logPassword = document.getElementById('log-password').value;
    if (users[logUsername] && users[logUsername] === logPassword) {
        showSecuredPage(logUsername);
        loginForm.reset();
    } else {
        alert('Invalid username or password!');
    }
});

// Show secured page
function showSecuredPage(username) {
    const formsContainer = document.getElementById('forms-container');
    const securedPage = document.getElementById('secured-page');
    const usernameDisplay = document.getElementById('username-display');
    usernameDisplay.textContent = username;
    formsContainer.classList.add('hidden');
    securedPage.classList.remove('hidden');
}

// Logout button
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function() {
    const formsContainer = document.getElementById('forms-container');
    const securedPage = document.getElementById('secured-page');
    formsContainer.classList.remove('hidden');
    securedPage.classList.add('hidden');
});
