import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getMonthText } from "../../resources/helpers";
import { useDispatch } from "react-redux";
import { changeMonthOfHolidays } from "../../redux/actions/holidays";

const Month = (props) => {
  const [month, setMonth] = React.useState(getMonthText(props.month));
  const fnDispatch = useDispatch();
  const fnPreviousMonth = () => {
    let iMonth = props.month > 0 ? props.month - 1 : 11;
    let sMonthText = getMonthText(iMonth);
    fnDispatch(changeMonthOfHolidays(iMonth));
    setMonth(sMonthText);
  };
  const fnNextMonth = () => {
    let iMonth = props.month < 11 ? props.month + 1 : 0;
    let sMonthText = getMonthText(iMonth);
    fnDispatch(changeMonthOfHolidays(iMonth));
    setMonth(sMonthText);
  };

  return (
    <View style={styles.container}>
      <AntDesign
        name="caretleft"
        size={20}
        color="black"
        onPress={fnPreviousMonth}
      />
      <Text style={styles.monthText}>{month}</Text>
      <AntDesign
        name="caretright"
        size={20}
        color="black"
        onPress={fnNextMonth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  monthText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 25,
  },
});

export default Month;
