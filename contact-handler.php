<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://qrofeus.dev');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

// Validate JSON decode succeeded
if (json_last_error() !== JSON_ERROR_NONE || !is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request format']);
    exit;
}

// Validate required fields
if (empty($input['name']) || empty($input['email']) || empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

// Validate input lengths (max: name=100, email=254, message=2000)
if (strlen($input['name']) > 100 || strlen($input['email']) > 254 || strlen($input['message']) > 2000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Input exceeds maximum length']);
    exit;
}

// Sanitize input data
$name = htmlspecialchars(strip_tags(trim($input['name'])));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($input['message'])));

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

// Prevent email header injection - reject newlines in name and email
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid characters in input']);
    exit;
}

// Email configuration
$to = 'hello@qrofeus.dev'; // Your email address
$subject = 'New Contact Form Message from ' . $name;

// Create email body
$email_body = "
New contact form submission:

Name: $name
Email: $email

Message:
$message

---
Sent from your website contact form
Time: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = array(
    'From' => 'noreply@qrofeus.dev',
    'Reply-To' => $email,
    'Return-Path' => 'noreply@qrofeus.dev',
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

// Convert headers array to string
$header_string = '';
foreach ($headers as $key => $value) {
    $header_string .= $key . ': ' . $value . "\r\n";
}

// Send email
$mail_sent = mail($to, $subject, $email_body, $header_string);

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}
?>