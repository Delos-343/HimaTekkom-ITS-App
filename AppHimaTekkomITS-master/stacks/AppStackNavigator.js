import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, Screen1, Screen2, Screen3, SplashScreen, TestScreen } from '../components';
import NewsItem from '../components/ScreenNews';

const Stack = createStackNavigator();

export default function MyStackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2}  options={{ title: 'Berita' }} />
            <Stack.Screen name="Screen3" component={Screen3}  />
            <Stack.Screen name="NewsItem" component={NewsItem} options={{ title: 'Detail Berita' }} />
            <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'Testing Environment' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}