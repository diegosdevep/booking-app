import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SavedScreen from '../screens/Saved/SavedScreen';
import BookingScreen from '../screens/Booking/BookingScreen';
import { iconOptions } from '../utils/iconOptions';

const Tab = createBottomTabNavigator();

const BottomTab = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#003580',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.home.focused : iconOptions.home.default,
        }}
      />

      <Tab.Screen
        name='BookingTab'
        component={BookingScreen}
        options={{
          title: 'Booking',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.booking.focused : iconOptions.booking.default,
        }}
      />
      <Tab.Screen
        name='SavedTab'
        component={SavedScreen}
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.saved.focused : iconOptions.saved.default,
        }}
      />
      <Tab.Screen
        name='ProfileTab'
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.profile.focused : iconOptions.profile.default,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
