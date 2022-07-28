import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { mins: "", seconds: "" };
  }
  onStart = (type) => {
    if (this.state.seconds <= 1) {
      if (this.state.mins > 0) {
        this.setState({ seconds: 60, mins: this.state.mins - 1 });
        return;
      } else if (this.state.mins === 0 && this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 });
        return;
      } else {
        clearInterval(this.f);
        return;
      }
    }
    this.setState({ seconds: this.state.seconds - 1 });
  };
  timer = () => {
    this.f = setInterval(this.onStart, 1000, "secs");
    document.getElementById("btn").disabled = true;
  };
  onPause = () => {
    clearInterval(this.f);
  };
  onReset = () => {
    clearInterval(this.f);
    document.getElementById("btn").disabled = false;

    this.setState({ seconds: 0 });
  };
  onMinsChange = (e) => {
    e.preventDefault();
    if (!isNaN(parseInt(e.target.value, 10))) {
      this.setState((state, props) => ({
        mins: parseInt(e.target.value, 10),
      }));
    }
  };
  onSecondsChange = (e) => {
    e.preventDefault();
    if (!isNaN(parseInt(e.target.value, 10))) {
      this.setState({ seconds: parseInt(e.target.value, 10) });
      if (this.state.mins === "") {
        this.setState({ mins: 0 });
      }
    }
  };
  render() {
    const { mins, seconds } = this.state;
    return (
      <div>
        <h1>
          {mins && mins}: {typeof seconds === "number" && seconds}
        </h1>

        <div>
          <br />
          <input type="number" value={mins} onChange={this.onMinsChange} />
          <input
            type="number"
            value={seconds}
            onChange={this.onSecondsChange}
          />
        </div>
        <br />

        <button id="btn" onClick={this.timer}>
          Start
        </button>
        <button onClick={this.onPause}>Stop</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
