import React from "react";
import ListOfFavorites from "../components/favorites/ListOfFavorites";

const Favorites = ({navigation}) => {
  return <ListOfFavorites navigate={navigation.navigate}/>;
};
export default Favorites;
