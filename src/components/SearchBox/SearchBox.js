import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput, Text } from 'react-native';
import { styles } from './searchbox.styles';
import { Feather, Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { Button } from 'react-native-elements';
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';
import Counter from '../counter/Counter';
import Advertising from '../Advertising/Advertising';
import { useNavigation, useRoute } from '@react-navigation/native';

const SearchBox = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const customButton = (onConfirm) => {
    return (
      <Button
        title='Submit'
        onPress={onConfirm}
        containerStyle={styles.btn}
        buttonStyle={styles.btnContent}
        titleStyle={styles.btnText}
      />
    );
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Pressable
            onPress={() => navigation.navigate('Search')}
            style={styles.content}
          >
            <Feather name='search' color='black' size={24} />
            <TextInput
              placeholderTextColor='black'
              placeholder={
                route?.params ? route.params.input : 'Enter Your Destination'
              }
            />
          </Pressable>

          <Pressable style={styles.content}>
            <Feather name='calendar' color='black' size={24} />
            <DatePicker
              style={styles.calendar}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 'auto',
                },
                headerStyle: {
                  backgroundColor: '#003580',
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 'auto',
                },
              }}
              selectedBgColor='#0047AB'
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDate(startDate, endDate)
              }
              allowFontScaling={false}
              mode={'range'}
              placeholder='Select Your Dates'
            />
          </Pressable>

          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.content}
          >
            <Ionicons name='person-outline' size={24} color='black' />
            <TextInput
              placeholderTextColor='red'
              placeholder={`${rooms} rooms + ${adults} adults + ${children} children`}
            />
          </Pressable>

          <Pressable style={styles.search}>
            <Text style={styles.text}>Search</Text>
          </Pressable>
        </View>

        <Text style={styles.subtitle}>Travel more spend less</Text>
        <Advertising />
      </ScrollView>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        footer={
          <ModalFooter>
            <ModalButton
              text='Apply'
              style={styles.modal}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title='Select rooms and guest' />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: '100%', height: 310 }}>
          <View style={styles.viewModal}>
            <Counter title='Rooms' value={rooms} setValue={setRooms} />
          </View>

          <View style={styles.viewModal}>
            <Counter title='Adults' value={adults} setValue={setAdults} />
          </View>

          <View style={styles.viewModal}>
            <Counter title='Children' value={children} setValue={setChildren} />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default SearchBox;
