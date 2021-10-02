import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, } from 'react-router-dom';

import Form from './Form';

const testData = {
  name: "Header",
  inputs: [
    {
    label: "Input",
    name: "email",
    type: "text"
    }],
  message1: "message one",
  message2: "message two",
  link: "/link"
}

const emailRef = createRef(null);
const refs = {email: emailRef};

const errors = {
  email: '',
}

describe("Form test", () => {

  test('Form render properly with given props', async () => {
    render(
      <Router>
        <Form formData={testData} refs={refs} errors={errors}/>
      </Router>);

    const headerElement = screen.getByText(/header/i);
    expect(headerElement).toBeInTheDocument();

    const messageOneElement = screen.getByText(/message one/i);
    expect(messageOneElement).toBeInTheDocument();

    const messageTwoElement = screen.getByText(/message two/i);
    expect(messageTwoElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', /email/i);
    expect(inputElement).toBeInTheDocument();

  });
})