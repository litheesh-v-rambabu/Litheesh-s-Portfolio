<?php

/**
 * Copy this file to config.php and fill in your SMTP credentials.
 */
return [
    // Recipient of contact form submissions
    'to_email' => 'litheesh@buffalo.edu',
    'to_name'  => 'Litheesh',

    // SMTP server settings (e.g. Gmail, Outlook, cPanel, SendGrid SMTP)
    'smtp_host'     => 'smtp.gmail.com',
    'smtp_port'     => 587,
    'smtp_secure'   => 'tls', // 'tls' or 'ssl'
    'smtp_username' => 'your-email@gmail.com',
    'smtp_password' => 'your-app-password',

    // From address shown in the sent email
    'from_email' => 'your-email@gmail.com',
    'from_name'  => 'Portfolio Contact Form',

    // Allowed origins for CORS (add your production domain)
    'allowed_origins' => [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'https://litheesh.dev',
        'https://litheesh.com',
        'https://www.litheesh.com',
    ],
];
