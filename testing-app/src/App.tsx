/** @format */

import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi HHi");
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>Hi</h1>
        <h2>Hidid</h2>

        <table className="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
