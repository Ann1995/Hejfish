import React from "react";
import {
  Image,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from "react-native";
class LogoTitle extends React.Component {
  render() {
    return (
      <View >
        <Text
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center"
          }}
        >
          Start
        </Text>
      </View>
    );
  }
}
export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <TouchableHighlight
          style={{ marginLeft: 20, marginRight: 20 }}
          onPress={() => navigation.navigate("MyModal")}
        >
          <Image source={require("./menu.png")} />
        </TouchableHighlight>
      )
    };
  };
  render() {  
    return (
      <View style={{ marginHorizontal: 10, marginVertical: 30 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Navigate */
            this.props.navigation.navigate("Kontrolle", {
              otherParam: "Kontrolle"
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
            Kontrollgang starten
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
