export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: true,
        ssr: false,
        pure: true,
      },
    ],
  ],
};
