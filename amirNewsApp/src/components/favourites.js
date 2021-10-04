import React from 'react';
import { useSelector } from 'react-redux';
import Article from './article';
import {
    View,
    ScrollView, 
    StyleSheet,
} from 'react-native';

const Favourites = (props) => {
    const articles = useSelector(state=>state.favourites.articles);
   
    return (
    <View
        keyboardShouldPersistTaps="always"
        style={styles.container}>
        <View style={styles.list}>
            <ScrollView styles={styles.scroll}>
                {articles.map((info, index) =>
                    <Article info={info} addOption={false} key={index} />
                )}
            </ScrollView>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c2b5c2',
        fontSize: 38,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    list: {
        height: 350,
        width: 250,
        alignItems: 'center',
        backgroundColor: 'violet',
        marginBottom: 20,
    },
    scroll: {
        width: 220,
    }
});
export default Favourites;