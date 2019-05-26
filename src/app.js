import React, { Component } from "react";
import Goals from "./components/Goals";
import SingleGoal from "./components/SingleGoal";

class App extends Component {
  state = {
    goals: []
  };

  addGoal = event => {
    event.preventDefault();
    const { goalInput, dateInput } = event.target.elements;
    console.log(`${goalInput.value} ${dateInput.value}`);
    this.setState({
      goals: [
        ...this.state.goals,
        { description: goalInput.value, due: dateInput.value }
      ]
    });
    goalInput.value = "";
    dateInput.value = "";
  };

  render() {
    const { goals } = this.state;
    return (
      <div className="container">
        <h1>Goalz</h1>
        <div className="goalWrapper">
          <Goals addGoal={this.addGoal} />
          <div className="singleGoals">
            {goals.length > 0 ? (
              goals.map(goal => (
                <SingleGoal
                  key={goal.due}
                  goal={goal.description}
                  date={goal.due}
                />
              ))
            ) : (
              <p>Add a goal!</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
