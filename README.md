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
npm install id-now-auto-ident
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.


### Configure for Android

In order to work with android it needs to have access to the custom maven repository.
This needs to be added into build.gradle file in allProjects secction.
```
maven {
  url "https://raw.githubusercontent.com/idnow/de.idnow.android.sdk/master"
}
```
maven repository in expo can be added with **expo-build-properties** plugin.
```shell
npx expo install expo-build-properties
```
```json
"extraMavenRepos": ['https://raw.githubusercontent.com/idnow/de.idnow.android.sdk/master']
```

it also requires to have _**minSdkVersion:  23**_ which can be also defined with the same build properties plugin.

App.json file needs to look like this:
```json
"expo-build-properties",
    {
    "android": {
      "minSdkVersion": 23,
      "extraMavenRepos": ["https://raw.githubusercontent.com/idnow/de.idnow.android.sdk/master"]
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

