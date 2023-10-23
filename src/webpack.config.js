const path = require('path');

module.exports = {
  entry: './src/index.js', // 앱의 진입점 파일
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들 파일의 출력 경로
    filename: 'bundle.js', // 번들 파일의 이름
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$, /,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel 로더 사용
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel 프리셋 설정
          },
        },
      },
    ],
  },
};
