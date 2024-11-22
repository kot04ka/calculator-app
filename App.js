// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Імпорт екранів
import HomeScreen from './screens/HomeScreen';
import StandardCalculator from './screens/StandardCalculator';
import CurrencyConverter from './screens/CurrencyConverter';
import UnitConverter from './screens/UnitConverter';

// Ініціалізація QueryClient
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Додаємо обгортку для роботи з React Query
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* Налаштування навігації */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f8f9fa',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#333',
            },
          }}
        >
          {/* Домашня сторінка */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Домашня сторінка' }}
          />
          {/* Екран стандартного калькулятора */}
          <Stack.Screen
            name="StandardCalculator"
            component={StandardCalculator}
            options={{ title: 'Стандартний калькулятор' }}
          />
          {/* Екран конвертера валют */}
          <Stack.Screen
            name="CurrencyConverter"
            component={CurrencyConverter}
            options={{ title: 'Конвертер валют' }}
          />
          {/* Екран конвертера одиниць */}
          <Stack.Screen
            name="UnitConverter"
            component={UnitConverter}
            options={{ title: 'Конвертер одиниць' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
