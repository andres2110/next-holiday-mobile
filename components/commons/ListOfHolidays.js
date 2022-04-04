import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Holiday from "./Holiday";
import { getMonthText } from "../../resources/helpers";

const ListOfHolidays = (props) => {
  return props.holidays.length > 0 ? (
    <FlatList
      data={props.holidays}
      keyExtractor={(item) => item.id}
      numColumns={4}
      renderItem={({ item }) => {
        let oDate = new Date(item.date);
        let sMonth = props.printMonth ? getMonthText(oDate.getMonth()) : "";
        console.log(item)
        return (
          <Holiday
            name={item.name}
            date={oDate.getDate()}
            key={item.id}
            month={sMonth}
            id={item.id}
          />
        );
      }}
    />
  ) : (
    <View style={styles.error}>
      <Text>No holidays are available for the current month or country.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    position: "absolute",
    top: "50%",
  },
});
export default ListOfHolidays;
