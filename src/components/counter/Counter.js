import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './counter.styles';

const Counter = ({ title, value, setValue }) => {
  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <View style={styles.viewModal}>
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{title}</Text>
      <Pressable style={styles.contentViewModal}>
        <Pressable onPress={decrement} style={styles.contentModal}>
          <Text style={styles.textModal}>-</Text>
        </Pressable>

        <Pressable>
          <Text style={{ fontSize: 18 }}>{value}</Text>
        </Pressable>

        <Pressable onPress={increment} style={styles.contentModal}>
          <Text style={styles.textModal}>+</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default Counter;
