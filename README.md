# Amrit Yatra SMS App

This project is a simple SMS sending application built with React Native (frontend) and Node.js/Express (backend). It allows users to send pre-typed SMS messages to a specified phone number using the Twilio API.

## Features
- React Native mobile app for sending SMS
- Node.js/Express backend to relay SMS via Twilio
- Uses environment variables for sensitive credentials
- Ready for deployment and safe for GitHub

## Project Structure
```
SMS/
  App.js                # React Native app entry point
  app.json              # Expo configuration
  assets/               # App icons and images
  index.js              # App bootstrap
  package.json          # Frontend dependencies
  package-lock.json     # Frontend lockfile
  SMS/
    server.js           # Node.js/Express backend
    package.json        # Backend dependencies
    .env.example        # Example environment variables for backend
```

## Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Twilio account (for SMS sending)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <your-repo-url>
cd SMS
```

### 2. Install Dependencies
#### Frontend (React Native)
```sh
npm install
```
#### Backend (Node.js/Express)
```sh
cd SMS
npm install
cd ..
```

### 3. Configure Environment Variables
- Copy the example file and fill in your Twilio credentials:
```sh
cp SMS/.env.example SMS/.env
```
- Edit `SMS/.env` and set your Twilio Account SID and Auth Token.

### 4. Start the Backend Server
```sh
cd SMS
node server.js
```
The backend will run on `http://localhost:3000` by default.

### 5. Start the Frontend App
```sh
cd ..
expo start
```
Follow the Expo instructions to run on an emulator or physical device.

## Usage
1. Enter the recipient's phone number and the amount in the app.
2. Tap "Send SMS".
3. The backend will send a pre-typed message using Twilio.

## Environment Variables (Backend)
Create a `.env` file in the `SMS/` folder with:
```
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
```

## Security & Best Practices
- **Never commit your real `.env` file or credentials to GitHub.**
- `.gitignore` is set up to exclude `.env` and other sensitive/local files.
- Use `.env.example` as a template for sharing config requirements.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE) (add a LICENSE file if needed) 