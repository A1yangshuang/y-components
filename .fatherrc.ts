export default {
  entry: ['src/index.ts'],
  target: 'browser',
  esm: 'babel',
  extractCSS: true,
  cjs: 'babel',
  umd: {
    name: 'dantd',
    sourcemap: true,
    globals: {
      react: 'React',
      antd: 'antd',
    },
  },

  lessInBabelMode: {
    globalVars: {
      prefix: 'y-comps',
    },
    javascriptEnabled: true,
  },

  // 支持antd
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  pkgs: [
    // 组件依赖构建顺序， 例如 a组件依赖于b组件，那么需要先编译 b,在编译a,则 这里可以控制组件编译顺序
  ],
};
