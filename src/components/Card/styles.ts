import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  img: {
    aspectRatio: 1,
    borderRadius: 8,
    height: undefined,
    marginVertical: 8,
    resizeMode: 'contain',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export { styles };
