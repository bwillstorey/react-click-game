import React from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import './css/App.css';
import Musicians from "./musicians.json"

class App extends React.Component {
  state = {
    Musicians: Musicians,
    previewsClick: "",
    score: 0,
    topScore: 0,
    isPlaying: false,
    sameImageClicked: false,
    message: "Click on a musician to start"
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

  handleClick = event => {
    event.preventDefault();
    // set the state of the game to playing
    this.setState({
        isPlaying: true,
        message: "Playing Game"
    });
    // destructuring the event object from the alt attribute in the image click
    const { alt } = event.target;
    // store current click
    const currentClick = alt;

    // handle game logic conditions

    // if user clicks on a card that hasn't been clicked then add a point to the current score
    if (currentClick !== this.state.previewsClick) {
        const musiciansArr = this.shuffleCards(this.state.Musicians);
        this.setState({
            Musicians: musiciansArr,
            previewsClick: currentClick,
            score: this.state.score + 1,
            sameImageClicked: false
        });
    }
    // now when the user clicks on a card that has been selected on the previews round then add the current score to the top score if its greater than the previews top score and reset the current score
    else {
        // saving current score on a variable
        const saveScore = this.state.score;
        const musiciansArr = this.shuffleCards(this.state.Musicians);

        // if current score is greater than top score, store that current score to top score
        if (saveScore > this.state.topScore) {
            this.setState({
                Musicians: musiciansArr,
                previewsClick: currentClick,
                score: 0,
                topScore: saveScore,
                sameImageClicked: true,
                message: "Game Over. Please try again."
            });
        }
        // else just reset the current score and keep playing the game
        this.setState({
            Musicians: musiciansArr,
            previewsClick: currentClick,
            score: 0,
            sameImageClicked: true,
            message: "Game Over. Please try again."
        });
    }
};

  // when page loads shuffle through the musician cards
  componentDidMount() {
    const newMusicians = this.shuffleCards(this.state.Musicians);
    this.setState({
        Musicians: newMusicians
    });
  };

  render() {
    return [
        <Header
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}
        />,

        <main
          id="game-img"
          className={
            this.state.sameImageClicked ? "container shake" : "container"
          }
        >
          {this.state.Musicians.map((musician, index) => (
            <Card
              id={musician.id}
              key={musician.id}
              src={musician.img}
              name={musician.name}
              img={musician.img}
              handleClick={this.handleClick}
            />
          ))}
        </main>
    ];
  }
}

export default App;
