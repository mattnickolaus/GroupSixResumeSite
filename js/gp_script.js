
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission action
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Include name and email in the email body
    message += "\n\nFrom: " + fullName + " (" + email + ")";

    subject = encodeURIComponent(subject); // Encodes the subject for URL
    var emailBody = encodeURIComponent(message); // Encodes the message for URL

    window.location.href = 'mailto:group6@email.com?subject=' + subject + '&body=' + emailBody;
});