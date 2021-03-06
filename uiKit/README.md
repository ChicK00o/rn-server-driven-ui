# React Native Cross-platform Apps

Production ready starter to build cross platform app with React Native.

## Features

- Platforms
  - [x] Run on iOS with `react-native`
  - [x] Run on Android  with `react-native`
  - [x] Run on web with `react-native-web`
  - [x] Run on desktop with `electron`
- Development
  - [x] Testing with `Jest`'
  - [x] Absolute import paths
  - [x] Webpack loaders for JS, TS, fonts, files included
  - [x] Native debuggers with Flipper: reactotron etc
- Design
  - [x] Design system with Dark mode
  - [x] Icons with `eva-icons`
  - [x] Render semantic tags like H1, H2, H3 tag on web for better SEO
- Libraries
  - [x] i18n with `i18next`
  - [x] Tab navigation with `react-navigation`
  - [x] Deep linking

## Customization

### Clone this project

- Folk or clone this project
- In the root folder, run `yarn && yarn app:dep` to install the dependencies.
- Run the app: On terminal 1, run packager with `yarn app:start`. On terminal 2, run `yarn ios` or `yarn android` for respective platform.
- Run on web: Run `yarn web:dev`
- Run on desktop: `yarn electron`

### Set you your brand

- Change project name: Inside root folder, run `npx react-native-rename <your-new-project-name>` to rename the app
- Change project icon: Replace the `icon.png` and `logo.png` inside `public/assets` folder with your own assets. Then run `yarn generate:icon && yarn generate:bootsplash`

### Set up deep

- Follow [React-Navigation guide](https://reactnavigation.org/docs/deep-linking#set-up-with-bare-react-native-projects) to replace the existing deep-linking prefixes with your domains

## Development

### Debug app with Flipper

This project comes with some Flipper integrations by default. You should install Flipper for desktop together with these plugins for development:

- [Async storage](https://github.com/Fausto95/rn-async-storage-flipper)
- [Reactotron](https://www.npmjs.com/package/flipper-plugin-reactotron)

## Tool recommendations

- Fastlane
- Codepush

## Contribution

I do accept PRs, so please feel free to create PRs. It is prefered that the commits are following [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## License

This project is licensed under MIT License.
