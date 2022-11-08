import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Lottie from "lottie-react-native";

export default class OptionChosen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.Option}</Text>
        <Button
          title="Back To Orders"
          onPress={() => this.props.setState({ Option: "" })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    margin: "auto",
    backgroundColor: "lightblue",
  },
});
