/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { loadFavourites } from '../reducers/favourites';
import TopicsMenu from './topicsMenu';
import Favourites from './favourites';
const Tab = createBottomTabNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(loadFavourites)
  }, [])

  return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Menu"
          screenOptions={{
            tabBarLabelStyle:{fontSize: 15},
            headerStyle: {
              backgroundColor: '#f4511e',
              height:30
              
            },
            headerTitleStyle:{fontSize: 15,},
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'red',
            tabBarIconStyle: { display:'none'},

          }}     
        >
          <Tab.Screen name="Menu" component={TopicsMenu} />
          <Tab.Screen name="Favourites" component={Favourites} />         
        </Tab.Navigator>
      </NavigationContainer>
  )

};
export default Routes;
