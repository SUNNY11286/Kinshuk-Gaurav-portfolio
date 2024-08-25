<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Encode message for URL
    $encodedMessage = urlencode($message);

    // Generate mailto URL with dynamic message
    $mailtoUrl = "mailto:kgaurav11286@gmail.com?subject=I%20want%20to%20collaborate%20or%20have%20query&body=" . $encodedMessage;

    // Redirect to mailto URL
    header("Location: $mailtoUrl");
    exit;
} else {
    echo "Invalid request method.";
}
?>
