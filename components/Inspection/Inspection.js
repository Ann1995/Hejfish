import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
export default class InspectionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Komment",
      buttonColor: "rgb(237, 47, 67)",
      disabled: true
    };
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : "Kontrolle"
    };
  };
  onButtonPress = () => {
    this.setState({
      buttonColor: "#ccc",
      disabled: false
    });
  };
  onButtonPressSecond = () => {
    this.setState({
      buttonColor: "rgb(237, 47, 67)",
      disabled: false
    });
  };
  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ marginHorizontal: 10, marginVertical: 30 }}>
        <View>
          <Text>Kontroll-Code:4521</Text>
          <Text>Angelkarte:BA-18-000001</Text>
          <Text>Angler:Max Mustermann</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={this.onButtonPress.bind(this)}
            title="ok"
            color="rgb(30, 187, 207)"
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={this.onButtonPressSecond.bind(this)}
            title="nicht ok"
            color={this.state.buttonColor}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <TextInput
            style={{ height: 80, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            disabled={this.state.disabled}     
            onPress={() => {
              this.props.navigation.navigate("EndInspection", {
                otherParam: "EndInspection"
              });
            }}
            title="Kontrolle Speichern"
            color="rgb(30, 187, 207)"
          />
        </View>
      </View>
    );
  }
}

