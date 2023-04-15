import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './search.styles';
import SearchResults from '../../components/SearchResult/SearchResults';
import { data } from '../../data/data';

const SearchScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={{ padding: Platform.OS === 'ios' ? 0 : 40 }}>
      <View style={styles.container}>
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder='Enter your Destination'
        />
        <Feather name='search' size={22} color='black' />
      </View>

      <SearchResults data={data} search={search} setSearch={setSearch} />
    </SafeAreaView>
  );
};

export default SearchScreen;
