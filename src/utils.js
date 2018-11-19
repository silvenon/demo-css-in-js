import cl from './cloudinary'

export const getSrc = ({ publicId, width }) =>
  cl.url(publicId, {
    crop: 'scale',
    width,
  })

export const getSrcSet = ({ publicId, widths }) =>
  widths.map(width => `${getSrc({ publicId, width })} ${width}w`).join(', ')
