// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import StandardCalculator from './screens/StandardCalculator';
import CurrencyConverter from './screens/CurrencyConverter';
import UnitConverter from './screens/UnitConverter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Домашня сторінка">
        <Stack.Screen name="Домашня сторінка" component={HomeScreen} />
        <Stack.Screen
          name="Стандартний калькулятор"
          component={StandardCalculator}
        />
        <Stack.Screen
          name="Конвертер валют"
          component={CurrencyConverter}
        />
        <Stack.Screen
          name="Конвертер одиниць"
          component={UnitConverter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
