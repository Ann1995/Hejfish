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
import { Icon } from "react-native-elements";
export default class ModalScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(48, 54, 58);",
          marginTop:20
        }}  
      >
       
        <Icon name="user-circle" type="font-awesome" color="#fff" />
        <Text style={{ color: "white" }}>Max Musterkontrolleur</Text>
        <Button 
          onPress={() => this.props.navigation.goBack()}
          title="Ausloggen"
          color="rgb(30, 187, 207)"
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
