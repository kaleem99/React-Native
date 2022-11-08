// import { View, Text, Button } from "react-native";

// export default function OrderNow({setState}) {
//   return <View>
//       <Text>Orders Page</Text>
//       <Button title="Back" onPress={() => setState("Location")}/>
//   </View>;
// }

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
} from "react-native";
import { useState } from "react";
import Lottie from "lottie-react-native";
import OptionChosen from "./OptionChosen";
export default class OrderNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: "0691190911",
      message: "",
      Option: "",
    };
    this.data = ["Fish and chips", "French fries", "Drinks and Sides"];
  }
  openWhatsApp = () => {
    let msg = this.state.message;
    let mobile = this.state.mobileNo;
    if (mobile) {
      if (msg) {
        let url =
          "whatsapp://send?text=" +
          this.state.message +
          "&phone=27" +
          this.state.mobileNo;
        Linking.openURL(url)
          .then((data) => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter message to send");
      }
    } else {
      alert("Please enter mobile no");
    }
  };
  render() {
    if (this.state.Option === "") {
      return (
        <View style={styles.container}>
          <View style={styles.lottie}>
            <Lottie source={require("../assets/order.json")} autoPlay loop />
          </View>
          <View style={styles.menuDiv}>
            {this.data.map((text) => {
              return (
                <Button
                  title={text}
                  onPress={() => this.setState({ Option: text })}
                />
              );
            })}
          </View>
          <View style={styles.textBox}>
            <TextInput
              value={this.state.message}
              onChangeText={(message) => this.setState({ message })}
              placeholder={"Type Your Order Your"}
              multiline={true}
              style={[
                styles.input,
                {
                  height: 200,
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                },
              ]}
            />

            <View style={{ marginTop: 20 }}>
              <Button
                onPress={this.openWhatsApp}
                title="Order Now"
                color={"#e49c24"}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                color={"#e49c24"}
                onPress={() => this.props.setState("")}
                title="Back To Home"
              />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <OptionChosen setState={this.setState} Option={this.state.Option} />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    padding: 30,
    width: "100%",
    height: "100%",
    backgroundColor: "#9AFFF3",
  },
  searchBar: {
    width: "100%",
    height: 50,
  },
  menuDiv: {
    width: "100%",
    // height: "30%",
    marginTop: "10%",
    backgroundColor: "red",
  },
  textBox: {
    width: "100%",
    height: "50%",
    marginTop: "5%",
    // position: "absolute",
    // top: "40%",
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 20,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 0.5,
    borderWidth: 0.5,
  },
  lottie: {
    width: "80%",
    height: "35%",
    // position: "",
    top: "1%",
  },
});
