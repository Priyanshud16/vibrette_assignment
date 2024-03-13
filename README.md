# React + Vite

User Form and Display
This project is a simple React application that allows users to fill out a form with their details and displays the submitted data.

Features
Users can enter their name, mobile number, date of birth, email, and an image link in the form.
Submitted data is displayed in a separate component.
The form resets after submission.
Technologies Used
React
CSS
Setup
Clone the repository to your local machine:
bash

git clone <repository-url>
Navigate to the project directory:
bash

cd user-form-and-display
Install dependencies:
bash

npm install
Run the development server:
bash

npm start
Open http://localhost:3000 to view the application in your browser.
File Structure
css
Copy code
user-form-and-display/
  ├── src/
  │   ├── components/
  │   │   ├── Form/
  │   │   │   ├── Form.js
  │   │   │   └── Form.css
  │   │   ├── Display/
  │   │   │   ├── Display.js
  │   │   │   └── Display.css
  │   ├── App.css
  │   ├── App.js
  │   └── index.js
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── package.json
  ├── README.md
  └── ...
Usage
Form Component: This component (Form.js) renders the form where users can input their details. It utilizes useReducer hook for managing form state.

Display Component: This component (Display.js) displays the submitted data. It receives props for name, mobile, date of birth, email, and image, and renders them accordingly.

Custom Styling
Custom styling for the form and display components is defined in separate CSS files (Form.css and Display.css).
Contributors
Priyanshu Dwivedi