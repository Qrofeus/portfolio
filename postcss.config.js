import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';

export default {
  plugins: [
    postcssGlobalData({
      files: [
        './node_modules/open-props/media.min.css'
      ]
    }),
    postcssCustomMedia(),
  ],
};
