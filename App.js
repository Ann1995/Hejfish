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
import Media from "./components/Scanner/Qr";
import SucheScreen from "./components/Search/Search";
import InspectionScreen from "./components/Inspection/Inspection";
import EndInspectionScreen from "./components/EndInspection/EndInspection"
import { StackNavigator } from "react-navigation";
import { Camera, Permissions } from "expo";
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{}}>
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

class HomeScreen extends React.Component {
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

  state = {};

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

class KontrolleScreen extends React.Component {
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
class ScanScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : "Scannen"
    };
  };
  render() {
    return <Media />;
  }
}

class ModalScreen extends React.Component {
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
        <Text style={{ fontSize: 30 }}>Menu </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
        <TouchableOpacity
          //style={styles.button}
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
          //  style={styles.button}
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

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Kontrolle: {
      screen: KontrolleScreen
    },
    Scan: {
      screen: ScanScreen
    },
    Suche: {
      screen: SucheScreen
    },
    Inspection: {
      screen: InspectionScreen
    },
    EndInspection: {
      screen: EndInspectionScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#1ebccf"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 30
      }
    }
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
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
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
