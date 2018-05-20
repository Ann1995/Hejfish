/**
 * react-native-search-filter Sample App
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import items from './store';
const KEYS_TO_FILTERS = ['number', 'name'];

export default class Searchblock extends Component {
 constructor(props) {     
    super(props);
    this.state = {
      searchTerm: ''  
    }    
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredItem = items.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Nummer od Name"
          />
        <ScrollView>
          {filteredItem.map(item => {     
            return (
              <TouchableOpacity onPress={()=>alert(item.number)} key={item.id} style={styles.itemItem}>
                <View>
                  <Text>{item.number}</Text>
                  <Text>{item.name}</Text>
                  <Text>{item.resevoirs}</Text>  
                  <Text style={styles.itemSubject}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  itemItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  itemSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});
