#VISTA (Voice, Image, Search, Translation Assistant)

VISTA is an integrated, web-based assistant designed to provide seamless voice control, image search, and multilingual translation within a single offline-capable platform.
It ensures accessibility, privacy, and usability in environments with limited or no internet connectivity.

🚀 Features

Voice Command Interface

Accepts spoken input via microphone

Executes commands like “Search image of cat”, “Translate hello to Hindi”, etc.

Image Search

Search and download images by keyword

Shows default images if no search is performed

Text Translation

Translate words/phrases across multiple languages (English, Hindi, Tamil, etc.)

Works offline using local JSON or MySQL datasets

User Interface

Responsive design for desktop and mobile

Mic button for voice input

Separate sections for search, translation, and command logs

Offline Functionality

Operates without internet for voice & translation (if local models are installed)

🛠️ Tech Stack

Frontend: HTML5, CSS3, JavaScript

Backend: PHP (WAMP/XAMPP server)

Database: MySQL

Voice Processing: Web Speech API / Python (SpeechRecognition, Pyttsx3, PyAudio)

Translation Data: Local JSON or MySQL

📦 Requirements
Hardware

Processor: Dual-Core 2.0 GHz+

RAM: 4 GB

Disk Space: 500 MB

Microphone required

Display: 1024x768 or higher

Software

OS: Windows 7+ / Linux

Web Server: WAMP/XAMPP

PHP: 7+

Browser: Chrome/Firefox

Text Editor: VS Code / Sublime Text

⚙️ Installation & Setup

Clone repository

git clone https://github.com/your-repo/vista.git
cd vista


Set up server

Install WAMP/XAMPP

Place project folder inside htdocs/ (XAMPP) or www/ (WAMP)

Configure database

Import vista.sql (if provided) into MySQL

Update DB credentials in config.php

Run project

Start Apache & MySQL in XAMPP/WAMP

Open in browser:

http://localhost/vista

🧪 Testing

Voice Search: Handles valid, invalid, and noisy inputs

Image Search: Supports case-insensitive queries + download option

Translation: Supports multi-language translation & error handling for unsupported languages

📚 References

SpeechRecognition (Python)

Pyttsx3 Documentation

PyAudio

PHP Docs

MySQL Docs

MDN Web Docs
