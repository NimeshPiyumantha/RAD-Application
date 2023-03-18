import React, { Component } from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/user.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-600 font-Poppins">
          <div className="w-full h-full">
            <div className="flex w-full h-full items-center">
              <div className="w-3/4 flex items-center">
                <h1 className="font-Poppins">Nimma</h1>
              </div>
              <div className="w-3/5">
              
                <nav className="flex w-full justify-between">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/contact"}>Contact</Link>
                  <Link to={"/profile"}>
                    <img src={userImage} alt="userImage" className="w-7 h-7" />
                  </Link>
                </nav>
              
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
