const { withDangerousMod, withPlugins } = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

async function readFile(path) {
  return fs.promises.readFile(path, "utf8");
}

async function saveFile(path, content) {
  return fs.promises.writeFile(path, content, "utf8");
}

module.exports = (config) =>
  withPlugins(config, [
    (config) => {
      return withDangerousMod(config, [
        "android",
        async (config) => {
          const file = path.join(
            config.modRequest.platformProjectRoot,
            "app/build.gradle",
          );
          const contents = await readFile(file);

          if (contents.includes("renderscriptTargetApi 21")) {
            return config;
          } else {
            const newContents = contents.replace(
              "defaultConfig {",
              `defaultConfig {
        renderscriptTargetApi 21
        renderscriptSupportModeEnabled true
        vectorDrawables.useSupportLibrary = true`,
            );
            await saveFile(file, newContents);
            return config;
          }
        },
      ]);
    },
  ]);
