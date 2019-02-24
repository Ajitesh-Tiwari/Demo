import React, { Component } from 'react';
import Header from '../Header';
import ContentArea from '../ContentArea';
import Footer from "../Footer";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ContentArea />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Application;
