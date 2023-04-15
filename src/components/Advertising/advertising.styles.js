import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderWidth: 0.1,
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 7,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  imgContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 40,
    resizeMode: 'cover',
  },
});
