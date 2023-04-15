import React from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { View, Text } from 'react-native';
import { styles } from './searchresults.styles';
import { useNavigation } from '@react-navigation/native';

const SearchResults = ({ data, search, setSearch }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(search.toLowerCase())) {
            if (search === '') {
              return null;
            } else {
              return (
                <Pressable
                  style={styles.content}
                  onPress={() => {
                    setSearch(item.place);
                    navigation.navigate('Main', { input: item.place });
                  }}
                >
                  <View>
                    <Image
                      style={{ width: 70, height: 70 }}
                      source={{ uri: item.placeImage }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: '500' }}>
                      {item.place}
                    </Text>
                    <Text style={{ marginVertical: 4 }}>
                      {item.shortDescription}
                    </Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>
                      {item.properties.length}
                    </Text>
                  </View>
                </Pressable>
              );
            }
          }
        }}
      />
    </View>
  );
};

export default SearchResults;
