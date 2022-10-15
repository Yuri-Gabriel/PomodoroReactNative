/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Components/Home';
import Timer from './Components/Timer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{
            title: ""
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;