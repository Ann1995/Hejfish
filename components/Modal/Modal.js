import React from "react";
import {
  AppRegistry,
  Button,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class ModalScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(48, 54, 58);"
        }}
      >
        <Text style={{ fontSize: 30 }}> Menu </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
        <TouchableOpacity
          onPress={() => {
            /* Navigate */
            this.props.navigation.navigate("Suche", {
              otherParam: "Suche"
            });
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 30
            }}
          >
            Meine Kontrollen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* Navigate */
            this.props.navigation.navigate("Suche", {
              otherParam: "Suche"
            });
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 30
            }}
          >
            Kontrolle eintragen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
