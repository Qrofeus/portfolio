// Add form submit event listener
document.getElementById("contact-form").addEventListener("submit", send_email);

// Reset Alerts on Form Reset
document.getElementById("contact-form").addEventListener("reset", () => {
    document.querySelectorAll("#processing, #success, #failure").forEach(el => el.classList.add("hidden"));
});

// Send Email Function
async function send_email(event) {
    // Prevent default form submission
    event.preventDefault();
    
    const processing_alert = document.querySelector("#processing");
    const submitButton = document.querySelector(".btn");
    
    // Get form elements
    const nameField = document.getElementById('form-name');
    const emailField = document.getElementById('form-mail');
    const messageField = document.getElementById('form-message');
    
    // Validate fields
    if (!nameField.value.trim() || !emailField.value.trim() || !messageField.value.trim()) {
        showAlert('#failure', 'Please fill in all required fields.');
        return;
    }
    
    // Show processing alert and disable button
    processing_alert.classList.remove("hidden");
    submitButton.disabled = true;
    
    // Prepare data
    const formData = {
        name: nameField.value.trim(),
        email: emailField.value.trim(),
        message: messageField.value.trim()
    };
    
    try {
        const response = await fetch('./contact-handler.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        // Hide processing alert and re-enable button
        processing_alert.classList.add("hidden");
        submitButton.disabled = false;
        
        if (result.success) {
            document.getElementById("contact-form").reset();
            showAlert("#success", "Your message has been sent successfully!");
        } else {
            showAlert("#failure", result.message || "Failed to send your message. Please try again later.");
        }
        
    } catch (error) {
        // Hide processing alert and re-enable button
        processing_alert.classList.add("hidden");
        submitButton.disabled = false;
        
        showAlert("#failure", "Network error. Please try again later.");
        console.error('Error:', error);
    }
}

// Display Alerts
function showAlert(selector, message = "") {
    const alertElement = document.querySelector(selector);
    alertElement.textContent = message || alertElement.dataset.defaultText;
    alertElement.classList.remove("hidden");

    setTimeout(() => {
        alertElement.classList.add("hidden");
    }, 5000);
}