import React, { Component } from 'react';
import Header from '../Header';
import ContentArea from '../ContentArea';

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ContentArea />
      </React.Fragment>
    );
  }
}

export default Application;
