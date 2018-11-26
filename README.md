
# TherapistApp

## Installs

Node and npm - https://nodejs.org/en/ - requirement

I have installed everything using npm. So you need to download npm globally using this command on mac: npm install npm@latest -g

Visual Studio Code - https://code.visualstudio.com/ - you can use this to view your code.
Android Studio - https://developer.android.com/studio/ - for android emulator (an emulator can be installed via command line aswell)
Xcode - https://developer.apple.com/xcode/ - for ios emulator

## Download
This guide is only for mac users. you might need to add a few changes to your commands if you are a pc user.
Download this project and cd into the root directory.
In your root directory you have to install node_modules locally by running "npm install". This will install your basic libraries.

## Libraries

We have to get some more libraries:

npm i react-native-splash-screen --save

react-native link react-native-splash-screen

npm install --save react-navigation

npm install --save react-native-calendars

## Run

With emulators running you can simply type 

React-native run-ios   //   react-native run-android

in your terminal and you should run the project.

## OpenSources

Calendar:
https://github.com/wix/react-native-calendars

SplashScreen:
https://github.com/crazycodeboy/react-native-splash-screen


