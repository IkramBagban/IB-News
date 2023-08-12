import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoryNewsList from '../screens/CategoryNewsList';
import Home from '../screens/Home';
import NewsDetail from '../screens/NewsDetail';


const Stack = createStackNavigator();


const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor:'white',
      headerStyle: {
        backgroundColor: 'black', 
        elevation:4,
        borderWidth:1,
        borderBottomColor:'grey'
      },
    }}>
      <Stack.Screen name='Home'  component={Home} />
      <Stack.Screen name='CategoryNewsList' options={({ route }) => ({ title: route.params.item })} component={CategoryNewsList} />
      <Stack.Screen name='NewsDetail' component={NewsDetail} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;