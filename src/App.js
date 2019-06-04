import React from 'react';
import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


// REQUIREMENTS

// The application should render different images (of your choice) to the screen. 
  // Each image should listen for click events. - CLICK EVENT HANDLERS

// The application should keep track of the user's score. - VARIABLE FOR SCORE, INCREMEMNTING WITH RIGHT ANSWER
  // The user's score should be incremented when clicking an image for the first time. - 
  // The user's score should be reset to 0 if they click the same image more than once. - CONDITIONAL (DETERMINE BEST ONE)

// Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order. - MATH RANDOM FORMULA

// Once the user's score is reset after an incorrect guess, the game should restart. - CONDITIONAL IF/ELSE OR SWITCH OR TERNINARY

export default App;
