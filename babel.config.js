module.exports = (api) => {
  api.cache(true);
  return {
    retainLines: true, // 解决了在用 vscode debug 时，断点的位置显示不正确的问题
    presets: [
      '@babel/preset-env'
    ],
    plugins: [

    ]
  };
}