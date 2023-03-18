import React, { Component } from "react";

type CounterProps = {};
type CounterState = {
  count: number;
};
export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="">
        <h1>
          Counter : <span>{this.state.count}</span>
        </h1>
        <div className="flex space-x-3 mt-5">
          <button
            disabled={this.state.count === 10 ? true : false}
            className="border border-green-600 px-4 py-2 text-green-600 font-semibold text-lg rounded-xl hover:bg-green-600 hover:text-white hover:drop-shadow-lg"
            onClick={this.increaseCount}
          >
            Increase
          </button>
          <button
            disabled={this.state.count === 0 ? true : false}
            className="border border-red-600 px-4 py-2 text-red-600 font-semibold rounded-xl text-lg hover:bg-red-600 hover:text-white hover:drop-shadow-lg"
            onClick={this.decreaseCount}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
