import React from 'react'
import styled, { css } from 'styled-components'
import { hideVisually } from 'polished'
import { getSrc, getSrcSet } from './utils'

const mediaQuery = '(min-width: 30rem)'

const roundedStyle = css`
  border-radius: 1rem;
`

const Image = styled.img`
  width: 200px;
  @media ${mediaQuery} {
    width: 400px;
  }
  ${props => props.rounded && roundedStyle};
`

const Caption = styled.figcaption`
  ${hideVisually()};
`

const Photo = ({ publicId, alt, rounded }) => (
  <figure>
    <Image
      src={getSrc({ publicId, width: 200 })}
      srcSet={getSrcSet({ publicId, widths: [200, 400, 800] })}
      sizes={`${mediaQuery} 400px, 200px`}
      rounded={rounded}
    />
    <Caption>{alt}</Caption>
  </figure>
)

Photo.defaultProps = {
  rounded: false,
}

export default Photo
