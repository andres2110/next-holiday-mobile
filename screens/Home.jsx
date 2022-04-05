import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ListOfHolidays from "../components/commons/ListOfHolidays";
import Month from "../components/home/Month";
import Select from "../components/home/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  getHolidaysToDisplay,
  getInfoToDisplay,
  getNumberOfFavorites,
} from "../redux/selectors";
import { getHolidaysFromAPI } from "../redux/actions/holidays";

const Home = ({navigation}) => {
  let oInfoRequest = useSelector(getInfoToDisplay);
  let aHolidaysToDisplay = useSelector(getHolidaysToDisplay);
  let iNumberOfFavorites = useSelector(getNumberOfFavorites);
  const fnDispatch = useDispatch();
  React.useEffect(() => {
    fnDispatch(getHolidaysFromAPI(oInfoRequest.country, oInfoRequest.month));
  }, [oInfoRequest.country, oInfoRequest.month,fnDispatch]);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Month month={oInfoRequest.month} />
        <Select country={oInfoRequest.country} />
      </View>
      <View>
        <Text style={styles.favoritesText}>
          {`Favorites: ${iNumberOfFavorites}`}
        </Text>
      </View>
      <ListOfHolidays holidays={aHolidaysToDisplay} navigate={navigation.navigate}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: "15%",
  },
  favoritesText: {
    fontFamily: "Nunito_400Regular",
  },
});

export default Home;
