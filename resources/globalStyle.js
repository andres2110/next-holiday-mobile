import { StyleSheet } from "react-native";

export const HEADER_STYLE = {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#92dccd", height: 80 },
    headerTitleStyle: { fontFamily: "Nunito_400Regular" },
  },
};

export const globalStyles = StyleSheet.create({
  errorMessage: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStar:{
    position: "absolute",
    top: 1,
    right: 0,
  },
  headerTextBlack:{
    fontFamily: "Nunito_700Bold",
    fontSize: 22,
    color: "black",
    maxWidth: "90%"
  },
  subHeaderTextBlack:{
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
    color: "black",
    maxWidth: "90%"
  },
  infoTextBlack:{
    fontFamily: "Nunito_400Regular",
    fontSize: 16
  }
});
