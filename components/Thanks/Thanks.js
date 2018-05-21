import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
export default class ThanksScreen extends Component {
  render() {
    return (
      <View>
        <Text> Vielen Dank fur deine wertvolle Arbeit! </Text>  
        <TouchableOpacity  onPress={() => {
                  this.props.navigation.navigate("Home", {
                    otherParam: "Start"
                  });
                }} > 
          <Text> Neuen Kontrollgang </Text>  
        </TouchableOpacity>  
      </View>
    );
  }
}
