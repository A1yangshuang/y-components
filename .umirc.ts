import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  base: '/',
  publicPath: '/',
  title: '@a1yyss/y-comps',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  extraPostCSSPlugins: [require('tailwindcss')('./tailwind.config.js')],
  history: {
    type: 'hash',
  },
  exportStatic: {},
  chainWebpack(memo) {
    memo.module
      .rule('js')
      .test(/\.(js|mjs|jsx|ts|tsx)$/)
      .include.add(join(__dirname, '..', '..', 'src'))
      .end()
      .exclude.add(/node_modules/)
      .end()
      .use('babel-loader');
  },
  // more config: https://d.umijs.org/config
});
