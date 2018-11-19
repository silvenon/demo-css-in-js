import React from 'react'
import Photo from './photo-css'
import { render } from 'react-testing-library'

jest.mock('./global.css', () => ({
  customMedia: {
    '--photo-breakpoint': '(min-width: 30rem)',
  },
}))

it('renders successfully', () => {
  const { asFragment } = render(
    <Photo publicId="kitten" alt="A kitten" rounded />,
  )
  expect(asFragment()).toMatchSnapshot()
})
