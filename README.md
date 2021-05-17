## 🌱 Sprout
* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## ⭐ General Info
1-2 sentence about our project

## ⚙ Technologies
Technologies/languages used for this project:

### JSX
JSX allows us to render JS objects in HTML. This makes it easier to write React components and leverage props and states within the component's HTML.

### React
React is a flexible, agile, Javascript framework used to make UI Interfaces. It enables us to build small components that can display information based on props and state, which makes templating much easier. This will be advantageous for us as we will be passing around a lot of information such as plant information, user data, and images.

For our implementation of React, we will be relying on React Hooks rather than the decprecated Class methods. The two Hooks we will be working with for this development will be the useState and useEffect Hooks. This will us to control our components based on dynamic variable handling, and will ensure that they retain maximum flexibility without bloat.

#### Design
For containers, the design we will be using is an encompassing component surrounding a single component. This makes passing props simple and building a page much easier as it separates.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### React State
State is built in to React Components. Using state we can add value attributes to our components. When state is updated, the component re-renders. For example, this will be useful for Adding Sprouts in our application. 

### React Component Lifecycles
Working hand in hand with state management is the useEffect hook, which we will be using to maintain and control our component lifecycles. The useEffect hook simply executes events depending on the current state, on mounting/unmounting a component, or if a specific state is changed. Furthermore, it allows us to clean up code (like event handlers) after a function is fired off, which prevents the application from crashing!

### Redux
Redux is a state manager for React. Simply put, Redux dispatches actions that update the state. The state is stored in what is called the store. The store is where we 'store' states from across the application. To tie actions and store together we use reducers. Reducers are simply functions that take in an action and state and return the new state.

### Heroku


### PostgresQL


## 📁 Content
Content of the project folder:
```
 Top level of project folder: 
├── .gitignore               # Git ignore file
└── README.md                # woah, you're reading this now!

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
        /example
├── scripts                         # Folder for scripts
        /example.js                  # JS for example.html
├── styles                          # Folder for styles
        /index.css                  # style for index.html

```