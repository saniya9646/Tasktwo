document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        alert('Logging in as ' + username);
    } else {
        alert('Please fill in both fields');
    }
});