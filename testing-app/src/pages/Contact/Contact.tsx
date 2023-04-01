import React, { Component } from "react";
import ContactIntro from "../../components/ContactIntro";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-6">
          <ContactIntro />
          <div className="mt-3"></div>
          <ContactForm />
        </div>
      </>
    );
  }
}
