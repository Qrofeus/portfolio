import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';

export default {
  plugins: [
    postcssGlobalData({
      files: [
        './node_modules/opui-css/dist/theme-one.css'
      ]
    }),
    postcssCustomMedia(),
  ],
};
