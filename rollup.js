import riot     from 'rollup-plugin-riot';
import npm      from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import babel    from 'rollup-plugin-babel';
import uglify   from 'rollup-plugin-uglify';
import replace  from 'rollup-plugin-replace';

export default {
  entry: 'index.js',
  dest: 'build.js',
  format: 'umd',
  moduleName: 'counter',
  plugins: [
    riot(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    npm({
      browser: true
    }),
    commonjs(),
    babel(),
    uglify()
  ]
};
