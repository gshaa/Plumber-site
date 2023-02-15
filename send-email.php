<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'zadirangeorgiu@gmail.com'; 
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    
    $message = "Name: $name\nPhone: $phone\nSubject: $subject";
    $headers = "From: $name <$to>" . "\r\n" .
               "Reply-To: $to" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, "New message from contact form", $message, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.";
    }
}
?>