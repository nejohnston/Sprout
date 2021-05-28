## 🌱 Sprout
* ⭐ [General Info](#general-info)
* ⚙ [Technologies](#technologies)
* [:running: Install Steps](#Install-steps)
* 📁 [Content](#content)

## ⭐ General Info
Sprout is a gardening app targeting hobbyist gardeners.   Sprout allows a user can learn about native-plant and bee-friendly species and engage with the community by splitting into teams.

## ⚙ Technologies
Technologies/languages used for this project:

### VSC (Visual Studio Code)
Visual Studio Code is a source-code editor that is compatible with a variety of programming languages, including Java, JavaScript, Go, Node.js, Python and C++.

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

### Heroku
Heroku is a container-based cloud platform as a service (PaaS). Heroku allows developers to deploy, manage, and extend the applications.


### Heroku PostgreSQL
Heroku PostgreSQL is a PostgreSQL-based cloud database service. Heroku Postgres offers features such as rollback, high availability, and continuous protection, as well as followers, data clips, and forks.

## Install Steps
1. Clone the repository to your local device.   
<img src="./client/src/config/assets/images/1-Cloning.png" width="100%" title="cloning" alt="cloning"></img>
2. Open your Visual Studio Code(VSC) and open a terminal.   
<img src="./client/src/config/assets/images/2-OpenVSC.png" width="100%" title="openVSC" alt="openVSC"></img>
 
3. Type ***cd server***, ***yarn install***, and ***yarn start*** consequently.   
<img src="./client/src/config/assets/images/3-Go-to-server.png" width="100%" title="go-to-server" alt="server"></img>   
<img src="./client/src/config/assets/images/4-yarn-install.png" width="100%" title="server-yarnInstall" alt="server-yarn-install"></img>   
<img src="./client/src/config/assets/images/5-yarn-start.png" width="100%" title="server-yarnStart" alt="server-yarn-start"></img>
      
    ![](https://img.shields.io/badge/Note-yellow)
   
   Once you run ***yarn install***, you do not need to run that again from the next time.
4. Open another terminal by clicking ```+``` button on the top-right in the terminal.    
<img src="./client/src/config/assets/images/6-open-another-terminal.png" width="100%" title="open-another-terminal" alt="open-another-terminal"></img>
5. Type ***cd client***, ***yarn install***, and ***yarn start*** consequently.   
<img src="./client/src/config/assets/images/7-Go-to-client.png" width="100%" title="go-to-client" alt="client"></img>   
<img src="./client/src/config/assets/images/8-yarn-install.png" width="100%" title="client-yarnInstall" alt="client-yarn-install"></img>   
<img src="./client/src/config/assets/images/9-yarn-start.png" width="100%" title="client-yarnStart" alt="client-yarn-start"></img>
    
    ![](https://img.shields.io/badge/Note-yellow)
   
   Once you run ***yarn install***, you do not need to run that again from the next time.

Then you will see the home page of Sprout!   
<img src="./client/src/config/assets/images/10-home-page.png" width="30%" title="sprout" alt="sprout"></img>   

## 📁 Content
Content of the project folder:
```
 Top level of project folder: 
📂 /
├── .gitignore                          # Git ignore file
├── package.json                        # Metadata relevant to the project
├── Procfile                            # Basic command for Heroku
├── yarn.lock                           # Managing dependencies
├── reset_alerts_every_day.js           # A JavaScript file that triggers the scheduler
└── README.md                           # woah, you're reading this now!

It has the following subfolders and files:
📂 /
├── 📂 client                            # Folder for the front end
┃    ├─── 📂 src                         # Folder for the source files
┃    ┃     ├── 📂 components             # Folder for the React components
┃    ┃     ├── 📂 AboutUs                # Folder for the AboutUs component
┃    ┃     ├── 📂 Alerts                 # Folder for the Alerts component
┃    ┃     ├── 📂 Easter                 # Folder for the Easter component
┃    ┃     ├── 📂 JoinTeam               # Folder for the JoinTeam component
┃    ┃     ├── 📂 Layout                 # Folder for the Layout component
┃    ┃     ├── 📂 Leaderboard            # Folder for the Leaderboard component
┃    ┃     ├── 📂 List                   # Folder for the List component
┃    ┃     ├── 📂 Modals                 # Folder for the Modals component
┃    ┃     ├── 📂 PlantProfile           # Folder for the PlantProfile component
┃    ┃     ├── 📂 Profile                # Folder for the Profile component
┃    ┃     ├── 📂 Search                 # Folder for the Search component
┃    ┃     └── 📂 SearchPlantDetail      # Folder for the SearchPlantDetail component
┃    ├─── 📂 config                      # Folder for the static data
┃    ┃     ├── 📂 assets                 # Folder for the image files used in the project
┃    ┃     └── 📂 data                   # Folder for the JSON files used in the project                
┃    ├─── 📂 containers                  # Folder for the React containers
┃    ┃     ├── 📂 AboutUs                # Folder for the AboutUs page
┃    ┃     ├── 📂 Alerts                 # Folder for the Alerts page
┃    ┃     ├── 📂 HomeContainer          # Folder for the Home page
┃    ┃     ├── 📂 JoinTeam               # Folder for the JoinTeam page
┃    ┃     ├── 📂 Leaderboards           # Folder for the Leaderboards page
┃    ┃     ├── 📂 Login                  # Folder for the Login page
┃    ┃     ├── 📂 PlantProfile           # Folder for the PlantProfile page
┃    ┃     ├── 📂 Profile                # Folder for the Profile page
┃    ┃     ├── 📂 Search                 # Folder for the Search page
┃    ┃     ├── 📂 SearchPlantDetail      # Folder for the SearchPlantDetail page
┃    ┃     └── 📂 Signup                 # Folder for the Signup page             
┃    ├─── index.css                      # A CSS file for the root page
┃    ├─── index.js                       # A JavaScript file for the root page
┃    ├─── Splash.js                      # A JavaScript file for loading the page
┃    ├─── package-lock.json              # Managing dependencies
┃    ├─── package.json                   # Metadata relevant to the project
┃    └─── yarn.lock                      # Managing dependencies
└── 📂 server                            # Folder for the back end
     ├─── 📂 data                        # Folder for the static data
     ├─── 📂 database                    # Folder for showing how the database looks
     ├─── package-lock.json              # Managing dependencies
     ├─── package.json                   # Metadata relevant to the project
     ├─── pghelper.js                    # A JavaScript file for quering from the database
     ├─── server.js                      # A JavaScript file for connecting to the server
     └─── yarn.lock                      # Managing dependencies

```
