// sign-up/login/login.js
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = '../../dashboard/dashboard.html';
    }
});