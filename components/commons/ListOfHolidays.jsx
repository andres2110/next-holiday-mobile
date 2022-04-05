import React from "react";
import { FlatList, View, Text } from "react-native";
import Holiday from "./Holiday";
import { getMonthText } from "../../resources/helpers";
import { global_styles } from "../../resources/global_style";

const ListOfHolidays = (props) => {
  return props.holidays.length > 0 ? (
    <FlatList
      data={props.holidays}
      keyExtractor={(item) => item.id}
      numColumns={4}
      renderItem={({ item }) => {
        let oDate = new Date(item.date);
        let sMonth = props.printMonth ? getMonthText(oDate.getMonth()) : "";
        return (
          <Holiday
            navigate = {props.navigate}
            item ={item}
            name={item.name}
            date={oDate.getDate()}
            key={item.id}
            month={sMonth}
            id={item.id}
            isFavorite={item.isFavorite}
          />
        );
      }}
    />
  ) : (
    <View style={global_styles.error}>
      <Text style={global_styles.errorMessage}>No holidays are available for the current month or country.</Text>
    </View>
  );
};
export default ListOfHolidays;
