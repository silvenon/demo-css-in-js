import React from 'react'
import injectSheet from 'react-jss'
import { getSrc, getSrcSet } from './utils'

const styles = {
  photo: {
    width: 200,
    '@media (min-width: 30rem)': {
      width: 400,
    },
    borderRadius: props => (props.rounded ? '1rem' : 0),
  },
}

const Photo = ({ classes, publicId, alt }) => (
  <figure>
    <img
      className={classes.photo}
      src={getSrc({ publicId, width: 200 })}
      srcSet={getSrcSet({ publicId, widths: [200, 400, 800] })}
      sizes="(min-width: 30rem) 400px, 200px"
    />
    <figcaption>{alt}</figcaption>
  </figure>
)

Photo.defaultProps = {
  rounded: false,
}

export default injectSheet(styles)(Photo)
