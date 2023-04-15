import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003580',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  border: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
    padding: 8,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
});
