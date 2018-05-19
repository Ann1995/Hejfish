import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { BarCodeScanner, Camera, Permissions } from "expo";

export default class Madia extends React.Component {
  state = {
    hasCameraPermission: null
  };

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : "QR"
    };
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {/* <Camera            
            style={{ flex: 1 }}
            onBarcodeRead={({ data, type }) => {
              alert("HEY");
              alert(data);
              alert(type);
            }}
            type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              />
            </View>
            <Button title="take a photo" style={styles.button} />
          </Camera> */}
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }
  _handleBarCodeRead = ({ type, data }) => {
    alert(type);
    alert(data);                
  };
}
const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "#1ebccf",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    marginBottom: 20
  }
});
