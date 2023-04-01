import React, { Component } from "react";

type CounterProps = {};
type CounterState = {
  count: number;
};
export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props); //parent content එකට child propeties set කරන එක.
    this.state = {
      count: 0,
    };
  }

  // React DOM Life Cycle Methods

  /*Create*/
  componentDidMount(): void {
    //DOM එකට inject වෙන වෙලාවට වැඩ කරන්නේ
    console.log("Console Did Mount....");
  }

  /*Update*/
  componentDidUpdate(): void {
    //DOM එක Update වෙන time එක
    console.log("Console Did Update....");
  }

  /*Destory*/ //method එකක් නෑ.

  componentWillUnmount(): void {
    //DOM එකෙන්  Did mount වෙන වෙලාවට කලිම් මොකක් හරි කර ගන්න ඔන්නම් use කරන්නෙ.(Hooking Process එක වගේ)
    console.log("Console Did Unmount");
  }

  componentDidCatch(): void {
    //DOM එකෙන් Did mount වෙන වෙලාවට කලිම් handle නොකරපු execption තිබුනොත් එක handle කරගන්න use කරන method එක
    console.log("Console Did Catch");
  }

  increaseCount = () => {
    //Increase Count by one
    this.setState({ count: this.state.count + 1 });
  };
  decreaseCount = () => {
    //Decrease Count by one
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
            disabled={this.state.count === 10 ? true : false} //Increase count limit
            className="border border-green-600 px-4 py-2 text-green-600 font-semibold text-lg rounded-xl hover:bg-green-600 hover:text-white hover:drop-shadow-lg"
            onClick={this.increaseCount}
          >
            Increase
          </button>
          <button
            disabled={this.state.count === 0 ? true : false} //Decrease count Limit
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
