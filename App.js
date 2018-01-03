import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.red}>
          <View style={styles.blueBox} />
          <View style={styles.greenBox} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center"
  },
  red: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 200,
    width: 200
  },
  blueBox: {
    backgroundColor: "blue",
    flex: 0.6
  },
  greenBox: {
    backgroundColor: "green",
    flex: 0.4
  }
});
