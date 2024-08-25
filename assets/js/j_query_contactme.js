
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = encodeURIComponent(document.getElementById('form_name').value);
    var email = encodeURIComponent(document.getElementById('form_email').value);
    var message = encodeURIComponent(document.getElementById('form_message').value);

    // Create the mailto URL
    var mailtoUrl = 'mailto:kgaurav112@gmail.com?subject=I%20want%20to%20collaborate%20or%20have%20query&body=' +
        'Hello Kinshuk, %0A' +
        'I am :%20' + name + '. %0A' +
        'My primary mail is:%20' + email + '%0A' +
        'And my Message is:%0A' + message + '.';

    // Open the mailto link
    window.location.href = mailtoUrl;
});
