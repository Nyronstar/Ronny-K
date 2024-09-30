function showSignUp() {
    document.getElementById('signup-modal').style.display = 'block';
}

function closeSignUp() {
    document.getElementById('signup-modal').style.display = 'none';
}

function handleForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Thank you for signing up, ${name}! A confirmation email will be sent to ${email}.`);
    closeSignUp(); // Close the modal after submission
}
