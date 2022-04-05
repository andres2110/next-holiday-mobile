import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { chageFavorite } from "../../redux/actions/holidays";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../resources/globalStyle";

const Holiday = (props) => {
  const fnDispatch = useDispatch();
  const fnHandleFavorite = () => {
    fnDispatch(chageFavorite(props.id));
  };
  const fnNavigate = props.navigate;
  return (
    <View style={styles.card}>
      <Text style={styles.monthText}>{props.month}</Text>
      <AntDesign
        name={props.isFavorite ? "star" : "staro"}
        size={20}
        color="#F8E117"
        style={globalStyles.iconStar}
        onPress={fnHandleFavorite}
      />
      <TouchableOpacity onPress={()=>fnNavigate('HolidayDetails',props.item)}>
        <Text style={styles.nameText}>{props.name}</Text>
      </TouchableOpacity>
      <View style={styles.numberContainer}>
        <Text style={globalStyles.infoTextBlack}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 105,
    width: 90,
    backgroundColor: "#92dccd",
    display: "flex",
    marginBottom: 3,
    marginLeft: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
    marginBottom: 5
  },
  monthText: {
    fontFamily: "Nunito_700Bold",
    color: "white",
    position: "absolute",
    top: 1,
    left: 1,
  },
  numberContainer: {
    position: "absolute",
    bottom: 3,
    width: 20,
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
  },
});

export default Holiday;
