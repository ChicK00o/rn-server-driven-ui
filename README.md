# rn-server-driven-ui

experiments on server driven ui for react native

## project structure

page-server
: this is the service that exposes graphql and will be responsible for pushing the information to render pages on the app

uiKit
: this project will hold the client that is powered by the backend, its bootstrapped using [rn-starter](https://github.com/turbothinh/react-native-cross-platform-starter). its a project that supports ios, android and web.

## constraints

not using graphql subscriptions as the current federation model of graphql used of company in front of micro-services does not yet support it

## idea

- app connects to page-server
- page-server sends back list of components to be rendered
- each component connects to graphql to get its own data, this query would be created and sent to the frontend by the page-server
- in this design the ui-components will be fixed about what they can render
- so for any change in what is show in the page, and data shown in the component, will have to be handled on the server side, making the server codebase in flux for any changes to be incorporated

## ui-components to be supported

- text widget
  - header
  - subheader
    - collapsible
- ticker widget
  - label
  - updatable text
  - frequency
- card widget
  - vertical / horizontal alignment
  - hold a set of data widget together
  - for holding widgets in horizontal layout
  - collapsible
- table
- button widget
  - button text
  - data label
- form widget
- input
  - text
  - number
- form drop down selection
- form submit button
  - button text
