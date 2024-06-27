
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;
        const fields = [
            { id: 'first-name', name: 'First Name' },
            { id: 'last-name', name: 'Last Name' },
            { id: 'email', name: 'Email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            { id: 'password', name: 'Password' },
            { id: 'reenter-password', name: 'Re-enter Password', match: 'password' },
            { id: 'age', name: 'Age', type: 'number' },
            { id: 'phone', name: 'Phone Number' },
            { id: 'address', name: 'Address' },
            { id: 'state', name: 'State' }
        ];
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const error = document.querySelector(`#${field.id} + span`);
            
            if (!input.value.trim() || (field.pattern && !field.pattern.test(input.value)) || (field.type === 'number' && isNaN(input.value)) || (field.match && input.value !== document.getElementById(field.match).value)) {
                error.style.display = 'inline';
                isValid = false;
            } else {
                error.style.display = 'none';
            }
        });
        
        if (isValid) {
            alert('Registration successful!');
            
        }
    });
