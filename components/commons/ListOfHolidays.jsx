import React from "react";
import { FlatList, View, Text } from "react-native";
import Holiday from "./Holiday";
import { getDateText } from "../../resources/helpers";
import { globalStyles } from "../../resources/globalStyle";

const ListOfHolidays = (props) => {
  return props.holidays.length > 0 ? (
    <FlatList
      data={props.holidays}
      keyExtractor={(item) => item.id}
      numColumns={4}
      renderItem={({ item }) => {
        let oDate = getDateText(item.date);
        let sMonth = props.printMonth ? oDate.monthText : "";
        return (
          <Holiday
            navigate = {props.navigate}
            item ={item}
            name={item.name}
            date={oDate.dayString}
            key={item.id}
            month={sMonth}
            id={item.id}
            isFavorite={item.isFavorite}
          />
        );
      }}
    />
  ) : (
    <View style={globalStyles.error}>
      <Text style={globalStyles.errorMessage}>No holidays are available for the current month or country.</Text>
    </View>
  );
};
export default ListOfHolidays;
