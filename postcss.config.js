module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      importFrom: 'src/global.css',
      preserve: true,
    },
  },
}
