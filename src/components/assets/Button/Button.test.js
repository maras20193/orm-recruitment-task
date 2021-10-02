import { render, screen } from '@testing-library/react';
import Button from './Button';


describe("Button tests", () => {

  test('button renders properly', async () => {
    render(<Button />);
    const buttonElement = screen.getByText(/Continue/i);
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('is button disabled', async () => {
    render(<Button isLoading={true}/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
})
