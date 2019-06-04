import React from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import './css/App.css';
import Musicians from "./musicians.json"

class App extends React.Component {
  state = {
    Musicians: Musicians,
    Score: 0,
    TopScore: 0
  };

  // suffle cards after every selection
  shuffleCards = arr => {
    let newPosition, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        newPosition = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newPosition];
        arr[newPosition] = temp;
    }
    return arr;
  };

  handleClick = (event, id) => {
    event.preventDefault();
    console.log(id);
  };

  // when page loads shuffle through the musician cards
  componentDidMount() {
    const newMusicians = this.shuffleArr(this.state.Musicians);
    this.setState({
        Musicians: newMusicians
    });
  };

  render() {
    return [
      <Header />,

      <main>
          <Card pokemons={this.state.Musicians} />
      </main>
    ];
  }
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
