# Web Project

This project is a simple web application that allows users to enter a password and, upon successful entry, redirects them to a greeting page that displays a message or a video.

## Project Structure

```
web-project
├── src
│   ├── index.html          # Main HTML file for the application
│   ├── main.js             # JavaScript file for handling password input and redirection
│   ├── styles.css          # CSS file for styling the application
│   ├── pages
│   │   ├── password.html   # HTML file for the password entry page
│   │   └── greeting.html   # HTML file for the greeting page
│   └── assets
│       └── video.mp4      # Video asset for the greeting page
├── package.json            # npm configuration file
└── README.md               # Documentation for the project
```

## Getting Started

To set up and run the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to access the application.

## Usage

- Enter the password on the password entry page (`src/pages/password.html`).
- Upon successful entry, you will be redirected to the greeting page (`src/pages/greeting.html`), where you can view a greeting message or a video.

## License

This project is open-source and available under the MIT License.