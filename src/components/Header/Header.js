import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './header.styles';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.content, styles.border]}>
        <Ionicons size={26} color='white' name='bed-outline' />
        <Text style={styles.text}>Stays</Text>
      </Pressable>
      <Pressable style={styles.content}>
        <Ionicons size={26} color='white' name='airplane-outline' />
        <Text style={styles.text}>Flights</Text>
      </Pressable>
      <Pressable style={styles.content}>
        <Ionicons size={26} color='white' name='car-outline' />
        <Text style={styles.text}>Car Rental</Text>
      </Pressable>
      <Pressable style={styles.content}>
        <FontAwesome5 name='uber' size={26} color='white' />
        <Text style={styles.text}>Taxi</Text>
      </Pressable>
    </View>
  );
};

export default Header;
