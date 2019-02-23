import React from 'react';
import ReactDOM from 'react-dom';
import ContentArea from '../content-area';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentArea />, div);
  ReactDOM.unmountComponentAtNode(div);
});
