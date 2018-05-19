import React, { Component } from "react";
import { AppRegistry, TextInput, View, StyleSheet, Text } from "react-native";
class Item extends Component {
  render() {
    return (
      <View style={styles.blockwrapper}>      
        <Text style={styles.number}>{this.props.number}</Text>
        <Text style={styles.info}>{this.props.name}</Text>
        <Text style={styles.info}>{this.props.ticket}</Text>
        <Text style={styles.info}>{this.props.date}</Text>
      </View> 
    );
  }
}  
export default class Searchblock extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Nummer od Name" };
  }   
  render() {   
    return (
      <View>
        <TextInput
          style={styles.search}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={{ alignItems: "center" }}>
          <Item
            number="BA-18-00001"
            name="Max Mustermann"
            ticket="Tageskarte-Gr.Muhl"
            date="25.08.2018-26.08.2018"
          />
          <Item
            number="B5-18-00001"
            name="Denn Mustermann"
            ticket="Tageskarte-Gr.Muhl"
            date="25.08.2018-26.08.2018"
          />
          <Item
            number="B6-18-00001"
            name="Kirill Mustermann"
            ticket="Tageskarte-Gr.Muhl"
            date="25.08.2018-26.08.2018"
          />
          <Item
            number="B7-18-00001"
            name="Vova Mustermann"
            ticket="Tageskarte-Gr.Muhl"
            date="25.08.2018-26.08.2018"
          />
          <Item
            number="B8-18-00001"
            name="Oleg Mustermann"
            ticket="Tageskarte-Gr.Muhl"
            date="25.08.2018-26.08.2018"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 40,
    textAlign: "center",
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    fontWeight: "bold",
    fontSize: 24,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "rgb(200, 200, 200)",
    shadowOffset: { height: 0, width: 0 }
  },
  blockwrapper: {
    borderRadius: 5,
    backgroundColor: "rgb(235, 235, 235)",
    flex: 1,
    flexDirection: "column"
  },
  info: {
    color: "rgb(48, 54, 58)"
  },
  number: {
    fontWeight: "bold"
  }
});
