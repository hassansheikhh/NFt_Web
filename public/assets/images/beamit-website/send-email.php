<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptcha_secret = '6Lejv_ApAAAAAFLVn8lA2Pw9tFcOatIxXL41yGT8';
    $recaptcha_response = $_POST['g-recaptcha-response'];

    // Verify reCAPTCHA response
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
    $response_keys = json_decode($response, true);

    if (intval($response_keys["success"]) !== 1) {
        echo json_encode(["status" => "error", "message" => "Please complete the CAPTCHA."]);
    } else {
        $to = "beamit@starbreeders.xyz";
        $subject = "New form submission";
        $contact = htmlspecialchars($_POST["contact"]);
        $email = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);

        $body = "Kontakt: $contact\nEmail: $email\n\nNachricht:\n$message";

        // Additional headers
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo json_encode(["status" => "success", "message" => "E-Mail sent!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error sending the E-Mail."]);
            error_log("Error sending email to $to from $email", 0);
        }
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
    error_log("Invalid request method: " . $_SERVER["REQUEST_METHOD"], 0);
}
?>
