import vituum from 'vituum'

export default {
  plugins: [
    vituum({
      pages: {
        normalizeBasePath: true,
        dir: 'src/pages'
      },
      imports: {
        paths: ['./src/styles/*/**', './src/scripts/*/**']
      }
    })
  ]
}
