import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';

import {DrawerContent} from './src/screens/DrawerContent';

import Settings from './src/screens/Settings';
import Profile from './src/screens/Profile';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SettingsScreen" component={Settings} />
        <Drawer.Screen name="ProfileScreen" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
