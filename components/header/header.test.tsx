import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe('Header', () => {
  test('Home Renders correctly', () => {
    render(<Header />)
    const homeHeaderElement = screen.getByRole('heading')
    expect(homeHeaderElement).toBeInTheDocument()
  })

  test('Renders dark mode switch when in light mode', () => {
    render(<Header />)
    const darkModeToggleElement = screen.getByText('Dark Mode', {
      exact: true,
    })
    expect(darkModeToggleElement).toBeInTheDocument()
  })

  test('Light mode text should not be visible', () => {
    render(<Header />)
    const lightModeTextElement = screen.queryByText('Light Mode', {
      exact: true,
    })
    expect(lightModeTextElement).not.toBeInTheDocument()
  })
})