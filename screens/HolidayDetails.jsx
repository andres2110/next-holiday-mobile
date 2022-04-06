import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../resources/globalStyle";
import Card from "../components/details/Card";
import Notes from "../components/details/Notes";
import { getDateText } from "../resources/helpers";
import Star from "../components/commons/Star";

const HolidayDetails = ({ navigation }) => {
  let oHoliday = navigation.state.params;
  let oDate = getDateText(oHoliday.date);
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
          <Star id={oHoliday.id} isFavorite={oHoliday.isFavorite} size={33} isDetails={true}/>
          <Text style={globalStyles.headerTextBlack}>{oHoliday.name}</Text>
          <Text style={globalStyles.subHeaderTextBlack}>
            {`${oDate.monthText}, ${oDate.dayString}`}
          </Text>
          <Card
            duration={oHoliday.duration}
            type={oHoliday.type}
            country={oHoliday.country}
          />
          <Notes id={oHoliday.id} notes={oHoliday.notes} />
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
