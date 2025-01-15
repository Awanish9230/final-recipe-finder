// document.getElementById('signup-form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission
    
//     const phoneInput = document.getElementById('phone').value.trim();
    
//     // Validate phone number (10 digits)
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phoneInput)) {
//         alert('Please enter a valid 10-digit phone number.');
//         return;
//     }
    
//     // Generate a 4-digit OTP
//     // const otp = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
//     // alert(`Your OTP is: ${otp}`);
    
//     // Proceed with form submission logic here
//     console.log('Form submitted successfully!');
// });



document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const phoneInput = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please re-enter.');
        return;
    }

    // If everything is valid
    alert('Sign-up successful!');
    console.log('Form submitted successfully!');
});

