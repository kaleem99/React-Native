import { StyleSheet, View, Text, Image, Button } from "react-native";
import Lottie from "lottie-react-native";

export default function DealsAndSpecial({ setState }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          height: "30%",
          marginTop: "8%",
        }}
      >
        <Lottie
          source={require("../assets/order-now-animation.json")}
          autoPlay
          loop
        />
      </View>

      <View style={{ width: "100%", height: "40%" }}>
        <Lottie source={require("../assets/french-fries.json")} autoPlay loop />
      </View>
      <View style={{ width: "100%", height: "20%" }}>
        <Lottie source={require("../assets/yummy.json")} autoPlay loop />
      </View>
      <View style={styles.divButton}>
        <Button
          onPress={() => setState("OrderNow")}
          title="OrderNow"
          color={"#e49c24"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#9AFFF3",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: "90%",
    height: "20%",
    position: "absolute",
    top: "1%",
  },
  text: {
    margin: "auto",
    textAlign: "center",
  },
  divButton: {
    // borderRadius: "50%",
    width: "90%",
    height: "20%",
    marginTop: "5%",
  },
});
