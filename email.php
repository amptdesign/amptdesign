<?php

/* check for form submission - useful if someone is trying to browse directly to this PHP file. */
/* If check is negative it will redirect back to your contact page. */
if (!isset($_POST['submit'])) {
    header('Location: index.php'); exit;
}

// get the posted data
$name = $_POST['name'];
$co = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// check that a name was entered
if (empty($name))
    $error = 'You must enter your name.';
// check that an email address was entered
elseif (empty($email)) 
    $error = 'You must enter your email address.';
// check for a valid email address
elseif (!preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', $email))
    $error = 'You must enter a valid email address.';
// check that a message was entered
elseif (empty($message))
    $error = 'You must enter a message.';

// check if an error was found - if there was, send the user back to the form
if (isset($error)) {
    header('Location: index.php?e='.urlencode($error)); exit;
}

// write the email content
$email_content = "Name: $name\n";
$email_content .= "Company: $co\n";
$email_content .= "Email: $email\n";
$email_content .= "Phone: $phone\n";
$email_content .= "Subject: $subject\n";
$email_content .= "Message:\n\n$message";

$headers  = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

//echo($headers);

// send email 
mail("info@amptdesign.com", "New Contact Message", $email_content, "From: info@amptdesign.com");
// if (mail("info@amptdesign.com", "New Contact Message", $email_content, "From: info@amptdesign.com")) {
// 	echo "mail delivered"; exit;
// }
// else {
// 	echo "FAIL!"; exit;
// }

// send the user back to the form
header('Location: index.php?s='.urlencode('Thank you for your message!')); exit;

?>
