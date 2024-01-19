# expo-idnow-auto-ident-config-plugin
config plugin for expo-idnow-auto-ident, use it to setup android configuration for AutoIdent.

# Installation
```shell
npm install expo-idnow-auto-ident-config-plugin --save

or

yarn add expo-idnow-auto-ident-config-plugin  
```

# Usage

your app.json file should look something like this:
```json
"plugins": [
      [
        "expo-build-properties",
        {
            "android": {
              "minSdkVersion": 23,
              "extraMavenRepos": [
                "https://raw.githubusercontent.com/idnow/de.idnow.android.sdk/master"
              ],
              "kotlinVersion": "1.8.0"
            },
            "ios": {
              "deploymentTarget": "13.0"
            }
          }
      ],
      ["expo-idnow-auto-ident-config-plugin"]
    ]
```
