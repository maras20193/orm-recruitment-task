import { render, screen } from '@testing-library/react';
import InputField from './InputField';


describe("InputField test", () => {

  test('label render properly with given props', async () => {
    render(<InputField label={"Label for input"} />);
    const labelElement = screen.getByText(/label for input/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('render error if error', async () => {
    render(<InputField error={"my error"} />);
    const errorElement = screen.getByText(/my error/i);
    expect(errorElement).toBeInTheDocument();
  });

  test('input render properly', async () => {
    render(<InputField name={"my input"} type={"text"} />);
    const inputElement = screen.getByRole('textbox', /my input/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('input is disabled if loading', async () => {
    render(<InputField 
      name={"my input"} 
      type={"text"} 
      isLoading={true} />);
    const inputElement = screen.getByRole('textbox', /my input/i);
    expect(inputElement).toBeDisabled();
  });


})