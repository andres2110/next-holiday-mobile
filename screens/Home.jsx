import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
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
import { globalStyles } from "../resources/globalStyle";

const Home = ({ navigation }) => {
  let oInfoRequest = useSelector(getInfoToDisplay);
  let aHolidaysToDisplay = useSelector(getHolidaysToDisplay);
  let iNumberOfFavorites = useSelector(getNumberOfFavorites);
  const fnDispatch = useDispatch();
  React.useEffect(() => {
    fnDispatch(getHolidaysFromAPI(oInfoRequest.country, oInfoRequest.month));
  }, [oInfoRequest.country, oInfoRequest.month, fnDispatch]);

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
      {oInfoRequest.isLoading && (
        <ActivityIndicator
          size="large"
          color={"#92dccd"}
          style={globalStyles.error}
        />
      )}
      {!oInfoRequest.isLoading && (
        <ListOfHolidays
          holidays={aHolidaysToDisplay}
          navigate={navigation.navigate}
        />
      )}
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
    marginBottom: '10%'
  },
  header: {
    marginBottom: "15%",
  },
  favoritesText: {
    fontFamily: "Nunito_400Regular",
  },
  loading: {
    flex: 1,
  },
});

export default Home;
