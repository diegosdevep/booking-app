import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { styles } from './advertising.styles';

const Advertising = () => {
  return (
    <>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <Pressable style={[styles.container, { backgroundColor: '#003580' }]}>
          <Text style={[styles.title, { color: 'white' }]}>Genius</Text>
          <Text style={[styles.text, { color: 'white' }]}>
            You are ate genius level one in our loyalty program
          </Text>
        </Pressable>
        <Pressable style={styles.container}>
          <Text style={styles.title}>15% Discounts</Text>
          <Text style={styles.text}>Complete 5 stays to unlock level 2</Text>
        </Pressable>
        <Pressable style={styles.container}>
          <Text style={styles.title}>10% Discounts</Text>
          <Text style={styles.text}>
            Enjoys Discounts at participating at properties worldwide
          </Text>
        </Pressable>
      </ScrollView>

      <Pressable style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png',
          }}
        />
      </Pressable>
    </>
  );
};

export default Advertising;
