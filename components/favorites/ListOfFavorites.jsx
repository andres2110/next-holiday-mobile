import React from "react";
import { useSelector } from "react-redux";
import { getFavoritesInfo } from "../../redux/selectors";
import {  View, Text, FlatList } from "react-native";
import ListOfHolidays from "../commons/ListOfHolidays";
import {globalStyles} from '../../resources/globalStyle'

const ListOfFavorites = ({navigate}) => {
  let aHolidaysToDisplay = useSelector(getFavoritesInfo);
  return aHolidaysToDisplay.length === 0 ? (
    <View style={globalStyles.error}>
      <Text style={globalStyles.errorMessage}>No favorites added</Text>
    </View>
  ) : (
    <FlatList
      keyExtractor={(favorite) => favorite.country}
      data={aHolidaysToDisplay}
      renderItem={({ item }) => {
        return (
          <View key={item.country}>
            <Text style={globalStyles.headerTextBlack}>{item.country}</Text>
            <ListOfHolidays holidays={item.holidays} printMonth={true} navigate={navigate}/>
          </View>
        );
      }}
    />
  );
};
export default ListOfFavorites;
