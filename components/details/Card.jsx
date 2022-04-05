import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../resources/globalStyle";
import { getDateText } from "../../resources/helpers";
const Card = (props) => {
  let oDate = getDateText(props.date);
  return (
    <View style={styles.infoContainer}>
      <View style={styles.labelContainer}>
        <Text style={globalStyles.infoTextBlack}>Days:</Text>
        <View style={styles.content}>
          <Text style={globalStyles.infoTextBlack}>{props.duration}</Text>
        </View>
      </View>
      <View style={styles.labelContainer}>
        <Text style={globalStyles.infoTextBlack}>Type:</Text>
        <View style={styles.content}>
          <Text style={globalStyles.infoTextBlack}>{props.type}</Text>
        </View>
      </View>
      <Text style={styles.dateText}> United States
        {/* {`${oDate.monthText}, ${oDate.dayString}`} */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: "10%",
    width: "55%",
    height: "30%",
    padding: 5,
    backgroundColor: "#92dccd",
    display: "flex",
    justifyContent: "space-around",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
  },
  content: {
    backgroundColor: "#FFE9CA",
    borderRadius: 40,
    paddingHorizontal: 5,
    maxWidth: "60%",
    display: "flex",
    alignItems: "center",
  },
});

export default Card;
