import { Component } from "react";

function FunctionGreeting(props) {
  return <p>Function component says hello to {props.name}.</p>;
}

class ClassGreeting extends Component {
  render() {
    return <p>Class component says hello to {this.props.name}.</p>;
  }
}

export default function Task9() {
  return (
    <section>
      <h2>Task 9: Props in React</h2>
      <FunctionGreeting name="Ananya" />
      <ClassGreeting name="Ananya" />
    </section>
  );
}