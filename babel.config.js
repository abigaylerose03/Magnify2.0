module.exports = {
  presets: [
  'module:metro-react-native-babel-preset'
  ],
  plugins: ['@babel/transform-flow-strip-types',
'@babel/proposal-object-rest-spread',
'@babel/transform-runtime'],
  sourceMaps: true
};
