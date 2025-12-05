module.exports = function (api) {
  const isWeb = api.caller((caller) => caller && caller.platform === "web");

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      isWeb && [
        "module-resolver",
        {
          alias: {
            "react-native": "react-native-web",
          },
        },
      ],
    ].filter(Boolean),
  };
};
