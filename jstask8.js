document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="number"], input[type="tel"], textarea, select');
    const errors = {
        'first-name': 'first-name-error',
        'last-name': 'last-name-error',
        'email': 'email-error',
        'password': 'password-error',
        'confirm-password': 'confirm-password-error',
        'age': 'age-error',
        'phone-number': 'phone-number-error',
        'address': 'address-error',
        'state': 'state-error',
        'country': 'country-error'
    };

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorElement = document.getElementById(errors[input.id]);
            if (input.checkValidity()) {
                errorElement.style.display = 'none';
            } else {
                errorElement.style.display = 'inline-block';
            }
        });
    });

    form.addEventListener('submit', (event) => {
        let valid = true;
        inputs.forEach(input => {
            const errorElement = document.getElementById(errors[input.id]);
            if (!input.checkValidity()) {
                errorElement.style.display = 'inline-block';
                valid = false;
            }
        });

        if (form['password'].value !== form['confirm-password'].value) {
            const errorElement = document.getElementById(errors['confirm-password']);
            errorElement.style.display = 'inline-block';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
