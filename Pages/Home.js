import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
// import Munchies from "../assets/Munchies.png";
import Lottie from "lottie-react-native";

export default function Home({ setState }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.lottie}>
        <Lottie
          source={require("../assets/animation-delivery-on-a-bike.json")}
          autoPlay
          loop
          // style={{marginTop: "5%"}}
        />
      </View>
      <View
        style={{ marginTop: "70%", width: "80%", height: "30%", padding: 10 }}
      >
        {/* <Button
          color={"#e49c24"}
          title="Get Started"
          onPress={() => setState("Location")}
          style={{padding: 100}}
        /> */}
        <TouchableOpacity
          style={{
            height: 60,
            marginTop: 10,
            backgroundColor: "#e49c24",
            borderRadius: 15,
          }}
          onPress={() => setState("Location")}
        >
          <Text style={styles.text}>Get started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageDiv}>
        <Image
          style={styles.image}
          source={require("../assets/Munchies.png")}
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
    height: "40%",
    position: "absolute",
    top: 5,
  },
  text: {
    color: "white",
    // margin: "auto",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 20,
  },
  div: {
    backgroundColor: "#dc582a",
    height: 50,
    width: "100%",
    position: "absolute",
    top: "0%",
    textAlign: "center",
  },
  image: {
    width: "60%",
    height: "70%",
    marginTop: "auto",
    marginBottom: 1,
    marginRight: "auto",
    marginLeft: "auto",
  },
  imageDiv: {
    position: "absolute",
    bottom: "1%",
    right: "0%",
    width: "100%",
    height: "40%",
  },
  button: {
    width: "100%",
    height: "20%",
    color: "red",
  },
});
