import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Home from "./Pages/Home";
import LocationPage from "./Pages/Location";
import * as React from "react";
import OrderNow from "./Pages/Orders";
import DealsAndSpecial from "./Pages/DealsAndSpecials";
import SearchBar from "./Pages/Search";
export default function App() {
  const [state, setState] = React.useState("");
  let body = "";
  switch (state) {
    case "":
      body = <Home setState={setState} />;
      break;
    case "Promotions":
      body = <DealsAndSpecial setState={setState} />;
      break;
    case "Location":
      body = <LocationPage setState={setState} />;
      break;
    case "OrderNow":
      body = <OrderNow setState={setState} />;
      break;
    case "Search":
      body = <SearchBar />;
      break;
    default:
      body = <Home setState={setState} />;
      break;
  }
  return <View style={styles.container}>{body}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
