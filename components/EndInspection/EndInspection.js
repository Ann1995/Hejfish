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
  render() {
    const Items = reservoirs;
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <View>
        <ScrollView>
          {Items.map(item => {
            return (
              <TouchableOpacity
                //onPress={()=>alert(item.number)}
                onPress={() => {
                  this.props.navigation.navigate("Thanks", {
                    otherParam: "Danke"
                  });
                }}  
                key={item.id}
                //  style={styles.itemItem}
              >
                <View>
                  <Text>{item.resevoirs}</Text>
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
