import React from 'react';
import {View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

// import { Container } from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Icon name="search" color="#000" size={50} />
      <Button
        title="Go to detail screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default HomeScreen;
