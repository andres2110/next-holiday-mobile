import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { globalStyles } from "../../resources/globalStyle";
import { useDispatch } from "react-redux";
import { changeNotesOfHolidays } from "../../redux/actions/holidays";

const Notes = (props) => {
  const [isEditable, setEditable] = React.useState(false);
  const [notes, setNotes] = React.useState(props.notes);
  const fnDispatch = useDispatch();
  const fnChangeNotes = () => {
    fnDispatch(changeNotesOfHolidays(props.id, notes));
    setEditable(false);
  };
  return (
    <View>
      <Text style={globalStyles.infoTextBlack}>Notes: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Write your comments"
        editable={isEditable}
        value={notes}
        onPressIn={() => setEditable(true)}
        onChangeText={(val) => {
          setNotes(val);
        }}
      />
      {!isEditable ? (
        <Button title={"Edit"} onPress={() => setEditable(true)} />
      ) : (
        <Button title={"Save"} onPress={fnChangeNotes} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#92dccd",
    // backgroundColor:"#b5ebe0",
    borderWidth: 1,
    width: 300,
    height: 150,
    padding: 8,
  },
});
export default Notes;
