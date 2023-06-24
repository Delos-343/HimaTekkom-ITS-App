import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#0c0c0c',
          padding: '2%',
        },
        tabBarActiveTintColor: '#f1f1f1',

        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === 'Beranda') {
            iconName = 'home';
          } else if (route.name === 'Berita') {
            iconName = 'news';
          } else if (route.name === 'Radio') {
            iconName = 'radio';
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },

      })}
    >
      <Tab.Screen
        name="Beranda"
        component={Screen1}
        options={{
          tabBarStyle:{backgroundColor: '#0c0c0c', textAlign: 'center'},
          tabBarLabelStyle:{color: '#f1f1f1'}
        }}
      />
      <Tab.Screen
        name="Berita"
        component={Screen2}
        options={{
          tabBarStyle:{backgroundColor: '#0c0c0c', textAlign: 'center'},
          tabBarLabelStyle:{color: '#f1f1f1'}
        }}
      />
      <Tab.Screen
        name="Radio"
        component={Screen3}
        options={{
          tabBarStyle:{backgroundColor: '#0c0c0c', textAlign: 'center'},
          tabBarLabelStyle:{color: '#f1f1f1'}
        }}
      />

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

