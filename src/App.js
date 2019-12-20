import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
const idArray = []


class App extends Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
   
  };

  shuffle = () => {
    this.setState ({
      friends: this.state.friends.sort(()=> Math.random() - 0.5)
    })
  }
 
  handleClick = function(id)  {
    this.shuffle();
    this.setState ({
      score: this.state.score + 1
    })
    idArray.push(id);
    if (idArray.includes(id)) {
      this.setState ({
        highScore: this.state.score,
        // score: this.state.score = 0,
      })
    };
console.log("idArray:" + idArray)
console.log("score: " + this.state.score)
console.log("score typeof(" + typeof(this.state.score) + ")")
console.log("High Score: " + this.state.score)
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            image={friend.image}
            id={friend.id}
            key={friend.id}
            handleClick={() => this.handleClick(friend.id)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
