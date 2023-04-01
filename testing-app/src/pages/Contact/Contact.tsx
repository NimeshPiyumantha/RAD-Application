import { Button, TextField } from "@mui/material";
import React, { Component } from "react";
import SendIcon from "@mui/icons-material/Send";
import ContactIntro from "../../components/ContactIntro";
import Header from "../../components/Header";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-6">
          <ContactIntro />
          <div className="mt-3"></div>
          <Contact
        </div>
      </>
    );
  }
}
