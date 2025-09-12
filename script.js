document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Check if any fields are empty
        if (!username || !email || !password || !confirmPassword) {
            alert('All fields are required!');
            return; // Stop further processing
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return; // Stop further processing
        }

        // If all validations pass
        alert('Form submitted successfully!');
        // Here you would typically send the form data to a server
        // For example: form.submit(); or use fetch()
    });
});
