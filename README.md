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

### Design
For containers, the design we will be using is an encompassing component surrounding a single component. This makes passing props simple and building a page much easier as it separates.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### React State
State is built in to React Components. Using state we can add value attributes to our components. When state is updated, the component re-renders. For example, this will be useful for Adding Sprouts in our application. 

### React Component Lifecycles
Working hand in hand with state management is the useEffect hook, which we will be using to maintain and control our component lifecycles. The useEffect hook simply executes events depending on the current state, on mounting/unmounting a component, or if a specific state is changed. Furthermore, it allows us to clean up code (like event handlers) after a function is fired off, which prevents the application from crashing!

### Redux
Redux is a state manager for React. Simply put, Redux dispatches actions that update the state. The state is stored in what is called the store. The store is where we 'store' states from across the application. To tie actions and store together we use reducers. Reducers are simply functions that take in an action and state and return the new state.

### Heroku
Heroku is a container-based cloud platform as a service (PaaS). Heroku allows developers to deploy, manage, and extend the applications.


### Heroku PostgreSQL
Heroku PostgreSQL is a PostgreSQL-based cloud database service. Heroku Postgres offers features such as rollback, high availability, and continuous protection, as well as followers, data clips, and forks.

## 📁 Content
Content of the project folder:
```
 Top level of project folder: 
├── .gitignore                          # Git ignore file
└── package.json                        # Metadata relevant to the project
└── Procfile                            # Basic command for Heroku
└── yarn.lock                           # Managing dependencies
└── reset_alerts_every_day.js           # A JavaScript file that triggers the scheduler
└── README.md                           # woah, you're reading this now!

It has the following subfolders and files:
├── client                              # Folder for the front end
        /src                            # Folder for the source files
            /components                 # Folder for the React components
                /AboutUs                # Folder for the AboutUs component
                /Alerts                 # Folder for the Alerts component
                /Easter                 # Folder for the Easter component
                /JoinTeam               # Folder for the JoinTeam component
                /Layout                 # Folder for the Layout component
                /Leaderboard            # Folder for the Leaderboard component
                /List                   # Folder for the List component
                /Modals                 # Folder for the Modals component
                /PlantProfile           # Folder for the PlantProfile component
                /Profile                # Folder for the Profile component
                /Search                 # Folder for the Search component
                /SearchPlantDetail      # Folder for the SearchPlantDetail component
            /config                     # Folder for the static data
                /assets                 # Folder for the image files used in the project
                /data                   # Folder for the JSON files used in the project
            /containers                 # Folder for the React containers
                /AboutUs                # Folder for the AboutUs page
                /Alerts                 # Folder for the Alerts page
                /HomeContainer          # Folder for the Home page
                /JoinTeam               # Folder for the JoinTeam page
                /Leaderboards           # Folder for the Leaderboards page
                /Login                  # Folder for the Login page
                /PlantProfile           # Folder for the PlantProfile page
                /Profile                # Folder for the Profile page
                /Search                 # Folder for the Search page
                /SearchPlantDetail      # Folder for the SearchPlantDetail page
                /Signup                 # Folder for the Signup page
            /index.css                  # A CSS file for the root page
            /index.js                   # A JavaScript file for the root page
            /Splash.js                  # A JavaScript file for loading the page
        /package-lock.json              # Managing dependencies
        /package.json                   # Metadata relevant to the project
        /yarn.lock                      # Managing dependencies
├── server                              # Folder for the back end
        /data                           # Folder for the static data
        /database                       # Folder for showing how the database looks
        /package-lock.json              # Managing dependencies
        /package.json                   # Metadata relevant to the project
        /pghelper.js                    # A JavaScript file for quering from the database
        /server.js                      # A JavaScript file for connecting to the server
        /yarn.lock                      # Managing dependencies

```