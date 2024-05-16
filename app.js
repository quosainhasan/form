document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (name.value === '') {
        nameError.textContent = 'Name is required';
    }

    if (email.value === '') {
        emailError.textContent = 'Email is required';
    } else if (!email.value.includes('@')) {
        emailError.textContent = 'Email is not valid';
    }

    if (password.value === '') {
        passwordError.textContent = 'Password is required';
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Password should be at least 8 characters long';
    }
});