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

### Favorites Information

Since I bring the information from the API as the countries and months change, I chose to save the information in another array of favorites and not use the same array of holidaysAll of the global state of the application, because if I saved all the holidays that I asked to the API this was going to grow a lot, since there are countries like US that has as 24 holidays for each month, also this made it easier for me to manipulate the holiday data. 

The difficulty that I found was to synchronize the data, since in the main page, I had to have the favorite status in the holidaysAll. But well I found a way to do it, and whenever I make a new request to the API, I check that the holiday does not exist in the array of favoritesInfo, and if it exists I change the status of isFavorite so that it is updated. 


### Favorites Display
This part was very difficult to decide, because I did not know the way I wanted to present the data and the best object to do it.
The hard part was that I not only wanted to present the favorites, but I wanted to separate them by their country. 
So I opted to create a new array of objects that would have the necessary information to do this ( {country: 'EC', holidays: [] } ).

I tried to use groupBy but I couldn't make it work, so I sorted it by the default countries.