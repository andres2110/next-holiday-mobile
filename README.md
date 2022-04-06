#NextHolidays Mobile

This project was created with React Native

## Goal 

The goal of the application is to rank your favorite vacations according to the country and month of your choice. Also you can add your notes. 

### `Requirements`

- Functional Components with local state
- Syled Components
- Hooks (useState and useEffect)
- Redux as global state managements mechanism
- API calls with Axios, integrated on Redux middleware (Redux Thunk)
- React Native Expo

### `Libraries Used`
 - @expo-google-fonts/nunito
 - @expo/vector-icons
 - react-native
 - redux-thunk
 - redux-logger
 - react-redux
 - react-native-dropdown-picker
 - react-navigation
 - react-navigation-drawer
 - react-navigation-stack

### `Steps for use:` 
 1. Register and get a API_KEY in Festivo from [docs.getfestivo.com/docs/before-you-start](docs.getfestivo.com/docs/before-you-start)     
 2. Change the API_KEY in src/resources/constants.js for that yours
 2. npm install
 3. npm start
 4. Open [http://localhost:19002/](http://localhost:19002/) to view it in your browser and scan de QR code in your smartphone with camera.

## Difficulties

### Navigation
The first inconvenient I encountered was to find the way to use the navigation, since we went from React oriented to a web navigation to a phone navigation, since the dependency we use is no longer react-router but react-navigation, so I decided to give three screens taking advantage of the Navigator allowing a quick use of the stack to return to the previously visited pages, these pages are (Home, Favorites, HolidayDetails).  

### DropDownPicker

I had problems with the incorporation of the DropDown to the home page, because this component when opened was not placed above the other components, but it was placed behind and I could not solve this error, but when consulting the mode of use I found the presentation mode of "MODAL" that allowed me to open a new page presenting the other options, I thought it was a good idea to use this way because the list of countries may increase in the future, but it was not possible to solve this error, but when I consulted the mode of use I found the presentation mode of "MODAL" that allowed me to open a new page presenting the other options, it seemed a good idea to use this way because the list of countries may increase in the future.


### Redux
Like the web components, I decided to use Redux for the storage usage, so I separated some components like the Star or Notes, to have the logic of saving the information, so the child components will be the ones who send the information through the actions and reducers, and receive this information by props, I thought it was a good idea since I only have to pass the information through props to keep them updated. I found a difficulty when using the Star, but I could solve it with the use of useEffect since the information of the component was not kept updated by the props, then when it changes it updates its state by the setFavorite.