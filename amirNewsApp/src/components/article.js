import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {insertArticle} from '../reducers/favourites';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableHighlight,
} from 'react-native';

const Article= ({info, addOption, navigate}) => {
   const dispatch = useDispatch()
  return (
    <View 
      style={styles.container}>
      <Text style={styles.text}  numberOfLines={2}>  {info.title} </Text>
      <Text style={styles.text} numberOfLines={1}>source:  {info.source} </Text>
      <TouchableHighlight style={styles} onPress={()=> {
        
        Linking.openURL(info.url).catch(err=>{});
        }}>
        <Text>View article</Text>

        
      </TouchableHighlight>
      { addOption &&
      <TouchableHighlight style={styles} onPress={()=> {
        dispatch(insertArticle(info))
        navigate('Favourites');
        }}>
        <Text>Add to favourites</Text>

        
      </TouchableHighlight>
      }
    </View>)
};
Article.defaultProps = {
  navigate:()=>{},
}
const styles = StyleSheet.create({
  container: {
    height: 110,
    marginTop: 10,
    width: 180,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'left',
    backgroundColor: "blue"
  },
  text: {
    fontSize: 12,
    marginTop: 1,
    fontWeight: 'bold',
    textAlign:'left',
    color: 'white'
  },
  openBrowser: {
    height:12,
    marginTop: 1,
    fontWeight: 'bold',
    textAlign:'left',
    color: 'white'
  },

});
export default Article;