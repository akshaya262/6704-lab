import { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: component is being created");
  }

  componentDidMount() {
    console.log("componentDidMount: component appeared on the page");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: component updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: component is being removed");
  }

  render() {
    return (
      <section>
        <h2>Task 11: React Component Lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increase Count
        </button>
      </section>
    );
  }
}

export default class Task11 extends Component {
  state = { showDemo: true };

  render() {
    return (
      <main>
        <LifecycleDemo />
        <button
          onClick={() => this.setState({ showDemo: !this.state.showDemo })}
        >
          {this.state.showDemo ? "Unmount component" : "Mount component"}
        </button>

        {!this.state.showDemo && <p>The component is unmounted.</p>}
      </main>
    );
  }
}