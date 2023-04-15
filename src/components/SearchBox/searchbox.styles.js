import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#FFC72C',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: '#FFC72C',
    borderWidth: 2,
  },
  calendar: {
    width: 350,
    height: 30,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  btn: {
    width: '80%',
    marginHorizontal: '3%',
  },
  btnContent: {
    backgroundColor: '#003580',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
  },
  search: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: '#FFC72C',
    borderWidth: 2,
    backgroundColor: '#003580',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  modal: {
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#003580',
  },
  subtitle: {
    marginHorizontal: 20,
    fontSize: 17,
    fontWeight: '500',
  },
});
