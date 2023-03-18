import React, { Component } from "react";
import userImage from "../../assets/user.png";

export default class Header extends Component {
  render() {
    return (
      <header className="">
        <nav className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-600">
          <div className="w-full h-full">
            <div className="flex w-full h-full items-center">
              <div className="w-3/4 flex items-center">
                <h1 className="font-Poppins">Nimma</h1>
              </div>
              <div className="w-3/5">
                <div className="flex w-full justify-between font-Poppins">
                  <h4 className="cursor-pointer">Home</h4>
                  <h4>About</h4>
                  <h4>Contact</h4>
                  <h4>Profile</h4>
                  <img
                    src={userImage}
                    alt="userImage"
                    className="w-10 h-10"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
