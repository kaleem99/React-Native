import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
const tokyoRegion = {
  latitude: -29.91883,
  longitude: 30.85989,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
import Lottie from "lottie-react-native";

export default function LocationPage({ setState }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "20%",
          marginTop: "8%",
        }}
      >
        <Lottie
          source={require("../assets/location-animation.json")}
          autoPlay
          loop
        />
      </View>
      {/* <Text>Location Page</Text> */}
      <Text style={{ textAlign: "center" }}>
        Locate Your Closest Munchies_SA Branch
      </Text>
      <MapView
        style={styles.maps}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        region={"South Africa"}
        initialRegion={tokyoRegion}
      >
        <Marker
          coordinate={tokyoRegion}
          // image={require("../assets/UpdatesLogo.png")}
          style={styles.marker}
        />
      </MapView>
      <View style={styles.buttonDiv}>
        <Button
          title="Go To Promotions"
          onPress={() => setState("Promotions")}
          color={"#e49c24"}
        ></Button>
      </View>
    </View>
  );
}

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// export default
// class App extends React.Component {
//   render() {
//     return (
//
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    margin: "auto",
    // backgroundColor: "blue",
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
    width: "10%",
    height: "10%",
  },
  text: {
    color: "#fff",
  },
  maps: {
    marginTop: "5%",
    width: "90%",
    height: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonDiv: {
    marginTop: "10%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
