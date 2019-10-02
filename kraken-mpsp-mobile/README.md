# KrakenMPSPMobile

### Note

This project was generated with [React Native CLI](https://github.com/react-native-community/cli).


------------

## Changelog

Learn about the [latest improvements](changelog).

------------

### Prerequisites

Both the CLI and generated project have dependencies that require [Node](https://nodejs.org/en/) 6.9.0 or higher, together
with NPM 3 or higher.

Install [react-native-debugger](https://github.com/jhen0409/react-native-debugger)

Reference guide for [installing environment tools](https://docs.rocketseat.dev/ambiente-react-native/android/macos)

------------

# 1. Project Configuration

**BEFORE YOU INSTALL:** please read the [Requirements](../README.md#Requirements)
```bash
npm install
```
or
```bash
yarn
```

------------

# 2. Development server

The app will building

```bash
react native run-android
```

```bash
react native run-ios
```

------------

# 3. Running tests

TODO

------------

# 4. Generate build

To Create keystore for deploy

```bash
keytool -genkey -v -keystore debug.keystore -alias debug-key-alias -keyalg RSA -keysize 2048 -validity 10000

keytool -importkeystore -srckeystore debug.keystore -destkeystore
debug.keystore -deststoretype pkcs12
```

Use the lag for a production build.

```bash
react native run-android --variant release
```

```bash
react native run-ios --configuration=release
```

#### How to use Fastlane

  Install [fastlane-cli](https://www.npmjs.com/package/fastlane)

  * for iOS
    * run: `cd ios/fastlane`
    * run: `fastlane beta`
  * for Android
    * run: `cd android/fastlane`
    * run: `fastlane beta`


#### How to use code-push

  Install [appcenter-cli](https://www.npmjs.com/package/appcenter-cli) and run `appcenter login`

  * for iOS run `code-push release-react PROJECT-NAME-IOS ios --t "1.0.0" --description "your description"`

  * for Android run `code-push release-react PROJECT-NAME-Android android --t "1.0.0" --description "your description"`

------------

# 5. Documentation

TODO
