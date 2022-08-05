import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import App from './App'
import TEXT from '../../constants/text'

test('renders learn react link', () => {
  render(<App />)
  // screen.debug()
  const welcomeMessage = screen.getByText(TEXT.welcome)
  expect(welcomeMessage).toBeInTheDocument()
})
