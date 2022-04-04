import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { countries } from "../../resources/constants";
import { useDispatch } from "react-redux";
import { chageCountryOfHolidays } from "../../redux/actions/holidays";

const Select = (props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(props.country);
  const fnDispatch = useDispatch();
  const fnHandleChange = (item) => {
    fnDispatch(chageCountryOfHolidays(item));
  };
  return (
    <DropDownPicker
      {...styles}
      open={open}
      value={value}
      items={countries}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={fnHandleChange}
    />
  );
};
const styles = {
  style: {
    backgroundColor: "#92dccd",
    borderColor: "#92dccd",
  },
  containerStyle: {
    height: 10,
    width: 173,
  },
  textStyle: {
    color: "white",
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
  },
  listItemContainerStyle: {
    backgroundColor: "#92dccd",
  },
  listMode: "MODAL",
  modalProps: {
    animationType: "slide",
  },
};

export default Select;
