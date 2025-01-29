function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = '../dashboard/dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid username or password');
    }
}