import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Pineapple Tasks",
  slug: "pineapple-tasks",
  scheme: "pineapple",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "rgba(143, 11, 255, 0.33)"
    },
  },
  web: {
    bundler: "metro",
    favicon: "./assets/favicon.png",
  },
};

export default config;
