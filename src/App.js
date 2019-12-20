import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    idArray: []
  };

  shuffle = () => {
    this.setState ({
      friends: this.state.friends.sort(()=> Math.random() - 0.5)
    });
  };
 
  handleClick = function(id)  {
    this.shuffle();
    if (this.state.idArray.includes(id)) {
      this.setState ({
        score: 0,
        idArray: []
      }, () => {
        console.log(this.state.idArray);
      });
    } else {
      this.state.idArray.push(id);
      this.setState ({
        score: this.state.score + 1
      }, () => {
        if (this.state.score > this.state.highScore) {
          this.setState ({
            highScore: this.state.score
          });
        };
      });
    };
    if (this.state.score === 12) {
      alert("You win!")
      this.setState ({
        score: 0,
        idArray: []
      });
    };
  };

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highScore={this.state.highScore}></Title>
        {this.state.friends.map(friend => (
          <FriendCard
            image={friend.image}
            id={friend.id}
            key={friend.id}
            handleClick={() => this.handleClick(friend.id)}
          />
        ))};
      </Wrapper>
    );
  };
};

export default App;
