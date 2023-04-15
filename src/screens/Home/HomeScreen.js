import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerRight: () => (
        <Ionicons
          color={'white'}
          size={24}
          name='notifications-outline'
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  return (
    <View>
      <Header />
      <SearchBox />
    </View>
  );
};

export default HomeScreen;
