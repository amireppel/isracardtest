import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_NEWS } from '../reducers/news'
import config from './categoriesConfig';
import Article from './article';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const Articles = ({navigate}) => {
  const category = useSelector(state => state.news.category)
  const articles = useSelector(state => state.news.articles )
  const dispatch = useDispatch();
  
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>{category}</Text>
      <View style={styles.list}>
      <ScrollView styles={styles.scroll}>
        {articles.map((info, index)=>
          <Article info={info} navigate={navigate} addOption={true} key={index} />

        )}
      </ScrollView>
      </View>

      <TouchableHighlight onPress={() => dispatch({ type: CLEAR_NEWS })}
        style={styles.button}>
        <Text style={styles.buttonText}>Back to categories</Text>
      </TouchableHighlight>
    </View>)
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginTop: 10,
    width: 180,
    alignItems:'center',
    backgroundColor: 'red',

  },
  text: {
    fontSize: 12,
    marginTop: 1,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    height: 40,
    marginTop: 10,
    width: 180,
    borderRadius: 10,
    alignSelf:'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "blue"
  },
  buttonText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
    color: 'white'
  },
  list:{
    height:350,
    width: 250,
    alignItems:'center',
    backgroundColor:'violet',
    marginBottom:20,
  },
  scroll:{
    width:220,
  }
});
export default Articles;