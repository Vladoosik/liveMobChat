import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home';
import ChatScreen from './chats';

const Stack = createNativeStackNavigator();
const RootContainer = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={'home'} component={HomeScreen} />
        <Stack.Screen name={'chat'} component={ChatScreen} />
      </Stack.Navigator>
  );
};

export default RootContainer;
