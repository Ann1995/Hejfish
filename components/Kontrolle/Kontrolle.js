import React from "react";
import {
  AppRegistry,
  Linking,
  Button,
  Image,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from "react-native";
export default class KontrolleScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : "Kontrolle"
    };
  };

  render() {
    /* params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ marginHorizontal: 10, marginVertical: 30 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Scan", {
              otherParam: "Scan"
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
            Scannen   
          </Text>   
        </TouchableOpacity>   
        <TouchableOpacity
          style={styles.button}
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
            Manuelle Kontrolle   
          </Text>   
        </TouchableOpacity>   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#1ebccf",
    borderRadius: 5,
    padding: 40,
    alignItems: "center",
    marginBottom: 20
  } 
});