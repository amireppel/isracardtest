import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {insertNews} from '../reducers/news'
import config from './categoriesConfig';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const Category= ({ category }) => {
  const dispatch = useDispatch();
  
  return (
    <TouchableHighlight onPress={() => dispatch(insertNews(category))}
      style={styles.button}>
      <Text style={styles.text}>{category}</Text>
    </TouchableHighlight>)
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    marginTop: 10,
    width: 180,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "blue"
  },
  text: {
    fontSize: 12,
    marginTop: 1,
    fontWeight: 'bold',
    color: 'white'
  },

});
export default Category;