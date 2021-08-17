# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts
In the project directory, you can run:

`yarn start`
`yarn test`
`yarn build`

# Styles
We are going with scss.

Styling is not done for each component – it is basically done for larger parts, usually a page will have styling in one file for all of components that are used for the page.

Basic style settings are in file src/app.scss.
In this file we have general reset and also reset for some elements for some elements (h1, h3, button…).

## Under src there is folder 'styles' with files 'colors' and 'dimensions'.
We import these files where we need them so we can use sass variables.

New color gets a name via this website https://chir.ag/projects/name-that-color.
Sort names of the colors alphabetically, ascending.

'dimensions' file: it holds dimension for class 'container'; all the content is placed in div with this class; rest of definition of this class can be found in src/app.scss (basically max-width is 1100px, left and right margin auto, position is relative).
Beside class 'container' in 'dimensions' file there is padding for 3 types of devices, and widths for media queries.

# Routing
Routing is done via react-router.

Definitions for routes are stored under src/config/globals/routes.

This array is imported in component and is listed with map.

All routes are wrapped in Layout component (which provides navigation, main and footer), and this is done in file src/App.js.

# Server communication
Axios is used. 

Under src/adapters/axios there are axios instances… meh, this is still very unstructured.

# Global state management
Global state is managed via Redux and Thunk is used for Async parts. All the settings are in src/store.

There are 2 reducers, one for dreams and one for authentication.

The one for dreams holds the state of fetched dreams which is used to display dreams under Dreams page. This state is also used in components dreams-list-sections.js and dreams-list-item.js.

If user wants to see details of a dream this is passed around components via this reducer. Page that uses this information is dream.js.

This reducer also holds state considering should loader spinner be activated, and if there is an error.

State in authentication reducer is responsible for giving a user access to appropriate pages/functions. This reducer holds state for spinner and error.
