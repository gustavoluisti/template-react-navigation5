import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Profile from './Profile';
import Settings from './Settings';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={20}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: 'Detalhe',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={20}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </DetailsStack.Navigator>
);
