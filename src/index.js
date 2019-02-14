import React, { Component } from "react";

import { Platform, StyleSheet, Text, View, Button } from "react-native";

import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    usuario: "Lucas",
    todos: [
      { id: 0, text: "Fazer Café" },
      { id: 1, text: "Estudar o GoNative" }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo Todo" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="Fazer cafe" />
        <Todo title="Estudar o GoNative" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  }
});
