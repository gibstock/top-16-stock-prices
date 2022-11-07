import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe('Header', () => {
  test('Home Renders correctly', () => {
    render(<Header />)
    const homeHeaderElement = screen.getByText('Stock Chops', {
      exact: true
    })
    expect(homeHeaderElement).toBeInTheDocument()
  })

  

  test('Light mode text should not be visible', () => {
    render(<Header />)
    const lightModeTextElement = screen.queryByText('Light Mode', {
      exact: true,
    })
    expect(lightModeTextElement).not.toBeInTheDocument()
  })
})