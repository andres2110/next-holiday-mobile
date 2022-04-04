import { StyleSheet } from "react-native";

export const HEADER_STYLE = {
  defaultNavigationOptions: {
    headerTintColor: "#92dccd",
    headerStyle: { backgroundColor: "#92dccd", height: 80 },
  },
};

export const global_styles = StyleSheet.create({
  errorMessage: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
