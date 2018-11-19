import { Cloudinary } from 'cloudinary-core'

const cl = Cloudinary.new({
  cloud_name: 'demo',
  secure: true,
})

export default cl
