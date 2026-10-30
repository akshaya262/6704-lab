import { Component } from "react";

export default class Task12 extends Component {
  state = {
    message: "Click a button.",
  };

  handleShowDate = () => {
    this.setState({
      message: new Date().toLocaleString(),
    });
  };

  render() {
    return (
      <main>
        <h2>Task 12: React Click Events</h2>

        <button onClick={this.handleShowDate}>Show Date and Time</button>{" "}
        <button
          onClick={() => this.setState({ message: "Good Bye" })}
        >
          Say Goodbye
        </button>

        <p>{this.state.message}</p>
      </main>
    );
  }
}