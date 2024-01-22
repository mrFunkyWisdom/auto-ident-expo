# id-now-auto-ident

#### Auto ident from IDNow for expo integration.

IDnow AutoIdent offers a fully automated solution to identify a person.
The process automatically performs these steps:

* Determines the kind of document used (e.g. passport, ID-card, driver's license)
* Determines the version of the document (e.g. German passport)
* Retrieves the data from the document
* Performs a biometric comparison
* Executes a liveness detection
* Verifies the genuineness of the document used during the process

IDnow mobile SDKs for integration into customer-specific apps to support the AutoIdent process.

# Installation 

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm i expo-idnow-auto-ident
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

add permisions to use camera for ios 
```json
"expo": {
    "ios": {
      "infoPlist": {
        "NSCameraUsageDescription": "This app uses the camera to scan your face. :)",
        "NSPhotoLibraryUsageDescription": "This can request access to your photo library to upload documents."
      }
    }
  }

```

### Configure for Android

Install config plugin 
```shell
npm install expo-idnow-auto-ident-config-plugin --save

or

yarn add expo-idnow-auto-ident-config-plugin  
```
add installed plugin in app.json plugins section

Package requires to have _**minSdkVersion:  23**_ which can be also defined with the same build properties plugin.
App.json file needs to look like this:

```json
"expo-build-properties",
    {
    "android": {
      "minSdkVersion": 23,
      "kotlinVersion": "1.8.0"
    },
}
```
After adding all of these you will need to run 
```shell
npx expo prebuild --clean 
```

and verify that repository and minSdk versions are added correctly.


# Contributing
In order to maintain this library it will often need to be updated with changes thats comming from Idnow sdks.

# Testing on Example App

