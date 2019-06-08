import React from 'react';
import Header from "./components/Header";
import Card from "./components/Card";
import './css/App.css';
import Musicians from "./musicians.json"

class App extends React.Component {
  state = {
    Musicians: Musicians,
    previousClicks: [],
    score: 0,
    topScore: 0,
    isPlaying: false,
    sameImageClicked: false,
    message: "Click on a musician to start"
  };

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

    this.setState({
        isPlaying: true,
        message: "Playing Game"
    });

    console.log(this.state.previousClicks);

    const { alt } = event.target;
    const currentClick = alt;

    if (currentClick !== this.state.previousClicks) {
        const musiciansArr = this.shuffleCards(this.state.Musicians);
        this.setState({
            Musicians: musiciansArr,
            previousClicks: currentClick,
            score: this.state.score + 1,
            sameImageClicked: false
        });
    }
    else {
        const saveScore = this.state.score;
        const musiciansArr = this.shuffleCards(this.state.Musicians);

        if (saveScore > this.state.topScore) {
            this.setState({
                Musicians: musiciansArr,
                previousClicks: currentClick,
                score: 0,
                topScore: saveScore,
                sameImageClicked: true,
                message: "Game Over. Please try again."
            });
        }
        this.setState({
            Musicians: musiciansArr,
            previousClicks: currentClick,
            score: 0,
            sameImageClicked: true,
            message: "Game Over. Please try again."
        });
    }
};

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
