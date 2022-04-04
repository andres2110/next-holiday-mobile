import React from "react";
import { useSelector } from "react-redux";
import { getFavoritesInfo } from "../../redux/selectors";
import { StyleSheet, View, Text,FlatList } from "react-native";
import ListOfHolidays from "../commons/ListOfHolidays";

const ListOfFavorites = () => {
  let aHolidaysToDisplay = useSelector(getFavoritesInfo);
  return aHolidaysToDisplay.length === 0 ? (
    <Text>No favorites added</Text>
  ) : (
    <FlatList
      keyExtractor={(favorite) => favorite.country}
      data={aHolidaysToDisplay}
      renderItem={({ item }) => {
        return (
          <View key={item.country}>
            <Text style={styles.countryText}>{item.country}</Text>
            <ListOfHolidays holidays={item.holidays} printMonth={true} />
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  countryText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 22,
    color: "black",
  },
});

export default ListOfFavorites;
