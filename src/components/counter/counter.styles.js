import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  viewModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  contentViewModal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentModal: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: '#BEBEBE',
    backgroundColor: '#E0E0E0',
  },
  textModal: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    paddingHorizontal: 6,
  },
});
