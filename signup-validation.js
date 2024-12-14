document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('.btn-primary');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const updatesCheckbox = document.getElementById('updates');
    const errorMessageBox = document.getElementById('error-message');

    const togglePasswordVisibility = (toggleIcon, passwordField, openIconPath, closeIconPath) => {
        toggleIcon.addEventListener('click', () => {
            const isPassword = passwordField.getAttribute('type') === 'password';
            passwordField.setAttribute('type', isPassword ? 'text' : 'password');
            toggleIcon.src = isPassword ? closeIconPath : openIconPath; // Switch icon
        });
    };

    // Initialize toggle functionality for both fields
    togglePasswordVisibility(
        document.getElementById('toggle-password'),
        passwordField,
        'svg/eye-closed.svg',
        'svg/eye-open.svg' 
    );

    togglePasswordVisibility(
        document.getElementById('toggle-confirm-password'),
        confirmPasswordField,
        'svg/eye-closed.svg',
        'svg/eye-open.svg' 
    );

    signUpButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form field values
        const email = document.getElementById('email').value.trim();
        const password = passwordField.value.trim();
        const confirmPassword = confirmPasswordField.value.trim();

        // Clear previous error messages
        errorMessageBox.style.display = 'none';
        errorMessageBox.innerText = '';

        // Validation
        let errorMessage = '';

        if (!email) {
            errorMessage = 'Email must be filled in.';
            errorMessageBox.style.color = 'red'; 
            errorMessageBox.style.marginBottom = '20px'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) {  // Simple email regex validation
            errorMessage = 'Enter a valid email.';
            errorMessageBox.style.color = 'red'; 
            errorMessageBox.style.marginBottom = '20px'; 
        } else if (!password) {
            errorMessage = 'Please enter a password.';
            errorMessageBox.style.color = 'red'; 
            errorMessageBox.style.marginBottom = '20px'; 
        } else if (!confirmPassword) {
            errorMessage = 'Confirm the password being written.';
            errorMessageBox.style.color = 'red'; 
            errorMessageBox.style.marginBottom = '20px'; 
        } else if (password !== confirmPassword) {
            errorMessage = 'Password and confirmation are not matching.';
            errorMessageBox.style.color = 'red'; 
            errorMessageBox.style.marginBottom = '20px'; 
        } else if (!updatesCheckbox.checked) {
            errorMessage = 'You have to agree to receive updates from ANPS.';
            errorMessageBox.style.color = 'red'; 
            errorMessageBox.style.marginBottom = '20px'; 
        }

        if (errorMessage) {
            // Display error message in the error message box
            errorMessageBox.innerText = errorMessage;
            errorMessageBox.style.display = 'block';
        } else {
            // If valid, redirect to index.html
            window.location.href = 'Dashboard.html';
        }
    });
});
