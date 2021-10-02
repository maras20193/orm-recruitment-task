import { render, screen } from '@testing-library/react';
import Form from '../Form/Form';


describe("Form test", () => {

  test('form problem', async () => {
    render(<Header name={"My header test"}/>);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toHaveTextContent("My header test");
  });
})