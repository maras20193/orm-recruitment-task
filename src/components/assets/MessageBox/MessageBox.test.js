import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, } from 'react-router-dom';
import MessageBox from './MessageBox';


describe("MessageBox test", () => {

  test('MessageBox renders properly with given props', async () => {
    render(
      <Router>
        <MessageBox 
        message1="message one"
        message2="message two"
        link="link"/>
      </Router>);
    const messageOneElement = screen.getByText(/message one/i);
    expect(messageOneElement).toHaveTextContent("message one");

    const messageTwoElement = screen.getByText(/message two/i);
    expect(messageOneElement).toHaveTextContent("message two");
  });
})