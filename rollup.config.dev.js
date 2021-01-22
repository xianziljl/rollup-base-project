import typescript from 'rollup-plugin-typescript'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/index.ts',
  output: {
    file: 'public/dist.esm.js',
    format: 'esm'
  },
  plugins: [
    typescript({ target: 'es6' }),
    serve({
      contentBase: 'public',
      port: 1111
    }),
    livereload()
  ]
}