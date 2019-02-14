import "./src/config/ReactotronConfig";

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const bgColor = "F5FCFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native</Text>
  </View>
);

export default App;
