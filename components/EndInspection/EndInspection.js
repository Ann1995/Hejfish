import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView
} from "react-native";
const reservoirs = [
  { id: 1, resevoirs: "Tageskate - Gr.Muhl" },
  { id: 2, resevoirs: "Tageskate - Gr.Muhl" },
  { id: 3, resevoirs: "Tageskate - Gr.Muhl" }
];
export default class EndInspectionScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : "Gewasser"
    };  
  };
  render() {
    const Items = reservoirs;
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ backgroundColor: "#fff", flex:1 }}>  
        <ScrollView>
          {Items.map(item => {
            return (
              <TouchableOpacity
                style={{ backgroundColor: "rgb(235, 235, 235)", margin: 20, paddingVertical:40 ,borderRadius:5}}
                onPress={() => {
                  this.props.navigation.navigate("Thanks", {
                    otherParam: "Danke"
                  });
                }}
                key={item.id}
              >
                <View>
                  <Text style={{color:"rgb(114, 118, 120)",fontSize:27}}>{item.resevoirs}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
