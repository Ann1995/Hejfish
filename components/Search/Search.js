/**
 * react-native-search-filter Sample App
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";
import items from "./store";
const KEYS_TO_FILTERS = ["number", "name"];

export default class SucheScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : "Manuelle Kontrolle"
    };
  };
  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
  render() {
    const filteredItem = items.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <View style={styles.container}>
        <SearchInput
          onChangeText={term => {
            this.searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="Nummer od Name"
        />
        <ScrollView>
          {filteredItem.map(item => {
            return (
              <TouchableOpacity
                //onPress={()=>alert(item.number)}
                onPress={() => {
                  this.props.navigation.navigate("Inspection", {
                    otherParam: "Kontrolle"
                  });
                }}
                key={item.id}
                style={{
                  backgroundColor: "rgb(235, 235, 235)",
                  margin: 20,
                  paddingVertical: 10,
                  paddingHorizontal:20,
                  borderRadius: 5
                }}         
              >
                <View>
                  <Text style={styles.itemSubject}>{item.number}</Text>
                  <Text>{item.name}</Text>
                  <Text>{item.resevoirs}</Text>
                  <Text >{item.date}</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },

  itemSubject: {
    fontWeight:"bold"
  },
  searchInput: {
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1
  }
});
