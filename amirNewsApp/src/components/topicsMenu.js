import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from './categoriesConfig';
import Category from './category';
import Articles from './articles';
import {
    View,
    StyleSheet,
} from 'react-native';

const TopicsMenu = ({navigation: {navigate}}) => {
    const categorySelected = useSelector(state=> state.news.category)
    return (
        <View
            keyboardShouldPersistTaps="always"
            style={styles.container}>
            {categorySelected===''?
                config.map(item => {
                    return <Category key={item} category={item} />
                }):
                <Articles navigate={navigate}/>
                }    

        </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c2b5c2',
        fontSize: 38,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
export default TopicsMenu;
