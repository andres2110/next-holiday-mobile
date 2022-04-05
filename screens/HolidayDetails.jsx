import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { chageFavorite } from "../redux/actions/holidays";
import { useDispatch } from "react-redux";
import { globalStyles } from "../resources/globalStyle";
import Card from "../components/details/Card";
import Notes from "../components/details/Notes";

const HolidayDetails = ({ navigation }) => {
  let oHoliday = navigation.state.params;
  const [isFavorite, setFavorite] = React.useState(oHoliday.isFavorite);
  const fnDispatch = useDispatch();
  const fnHandleFavorite = () => {
    fnDispatch(chageFavorite(oHoliday.id));
    setFavorite((prevState) => !prevState);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        keyboardVerticalOffset={3}
      >
        <View style={styles.content}>
          <AntDesign
            name={isFavorite ? "star" : "staro"}
            size={30}
            color="#F8E117"
            style={globalStyles.iconStar}
            onPress={fnHandleFavorite}
          />
          <Text style={globalStyles.headerTextBlack}>{oHoliday.name}</Text>
          <Text style={globalStyles.subHeaderTextBlack}>Abril ,16</Text>
          <Card
            duration={oHoliday.duration}
            type={oHoliday.type}
            date={oHoliday.date}
          />
          <Notes id={oHoliday.id} notes={oHoliday.notes}/>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
export default HolidayDetails;
