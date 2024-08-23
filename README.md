### README for JavaScript Quiz Application<br>

---<br>

#### **Project Overview**<br>

This project is a simple Quiz Application built using HTML, CSS, and JavaScript. It consists of three pages:<br>

1. **Welcome Page:** The user enters their name to start the quiz.<br>
2. **Quiz Page:** The user answers multiple-choice questions.<br>
3. **Result Page:** The user's score and time taken are displayed.<br>

#### **Directory Structure**<br>

```
├── index.html           # Welcome Page
├── page2.html           # Quiz Page
├── page3.html           # Result Page
├── dist/
│   ├── js/
│   │   ├── quiz.js      # Main JavaScript logic for the quiz
│   │   ├── timer.js     # Timer logic for the quiz
│   │   ├── userinfo.js  # Displays user info on the result page
│   ├── css/
│       └── style.css    # Styling for the application
└── README.md            # Project documentation
```
<br>
#### **Getting Started**<br>
<br>
1. **Clone the repository:**<br>
   ```<br>
   git clone <repository-url><br>
   cd quiz-app<br>
   ```

2. **Open `index.html` in your browser:**<br>
   - Double-click on `index.html` or open it via a web server.<br>
<br>
#### **How It Works**<br>

- **Welcome Page (`index.html`):**<br>
  - Users enter their name and start the quiz.<br>
  - The name is stored in `sessionStorage` and used throughout the quiz.<br>
<br>
- **Quiz Page (`page2.html`):**<br>
  - The user answers multiple-choice questions.<br>
  - Each question has four options. The correct option awards 5 points.<br>
  - The user's progress is tracked, and their score is updated in `sessionStorage`.<br>
  - A timer runs during the quiz to track the time taken to complete it.<br>
<br>
- **Result Page (`page3.html`):**<br>
  - After the quiz, the user's name, score, and time taken are displayed.<br>
  - All information is retrieved from `sessionStorage`.<br>
<br>
#### **Customization**<br>
<br>
- **Adding Questions:**<br>
  - Questions can be added to the `questions` array in `quiz.js`.<br>
  - Each question should have an `id`, `question`, `answer`, and `options` array.<br>
<br>
- **Styling:**<br>
  - Modify `style.css` to change the appearance of the application.<br>

#### **Dependencies**<br>

- The project uses external fonts from Google Fonts.<br>
- Font Awesome icons are used for the result page.<br>
<br>
#### **Future Improvements**<br>
<br>
- Add more interactive features like progress bars, and feedback for wrong answers.<br>
- Implement a scoring system with difficulty levels.<br>
- Store quiz data using local storage or a database for a persistent experience.<br>

#### **Contributing**<br>

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.<br>
