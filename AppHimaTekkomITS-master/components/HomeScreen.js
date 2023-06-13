import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: 'black',
          padding: '1%',
        },
        tabBarActiveTintColor: 'white',
        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'News') {
            iconName = 'newspaper-outline';
          } else if (route.name === 'Radio') {
            iconName = 'radio-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="BERANDA" component={Screen1} styles={{ fontFamily: 'serif', backgroundColor: '#0C0C0C' }} />
      <Tab.Screen name="BERITA" component={Screen2} />
      <Tab.Screen name="RADIO" component={Screen3} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

