module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "assets/*": ["assets/*"],
          "components/*": ["components/*"],
          "navigation/*": ["navigation/*"],
          "styles/*": ["styles/*"],
          "types/*": ["types/*"],
          "utils/*": ["utils/*"],
          "views/*": ["views/*"],
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        root: ["src"],
      },
    ],
  ],
};
