import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerForm: {
    paddingVertical: 10,
  },
  sectionInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    marginVertical: 5
  },
  containerIcon: {
    borderRightWidth: 1,
    borderRightColor: '#ced4da',
    backgroundColor: '#e9ecef',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    width: 40
  },
  containerInput: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingShow: {
    marginRight: 5,
  },
  buttonContainer: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: '#fff',
  },
});

export default styles;
