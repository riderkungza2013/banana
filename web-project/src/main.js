function redirectToGreeting() {
    const passwordInput = document.getElementById('passwordInput');
    const password = passwordInput.value;

    // Check if the password is correct (for example, "secret")
    if (password === 'secret') {
        window.location.href = 'pages/greeting.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    if (password === '220743') {
        window.location.href = 'pages/greeting.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
});