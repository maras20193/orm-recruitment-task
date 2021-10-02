import { render, screen } from '@testing-library/react';
import Header from './Header';


describe("Header test", () => {

  test('header renders properly with given props', async () => {
    render(<Header name={"My header test"}/>);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toHaveTextContent("My header test");
  });
})