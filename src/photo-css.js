import React from 'react'
import { getSrc, getSrcSet } from './utils'
import styles from './photo.module.css'
import { customMedia } from './global.css'

const Photo = ({ publicId, alt, rounded, borderRadius }) => (
  <figure>
    <img
      className={rounded ? styles.roundedPhoto : styles.photo}
      style={
        typeof borderRadius !== 'undefined'
          ? { ['--border-radius']: borderRadius }
          : null
      }
      src={getSrc({ publicId, width: 200 })}
      srcSet={getSrcSet({ publicId, widths: [200, 400, 800] })}
      sizes={`${customMedia['--photo-breakpoint']} 400px, 200px`}
    />
    <figcaption className={styles.caption}>{alt}</figcaption>
  </figure>
)

Photo.defaultProps = {
  rounded: false,
}

export default Photo
