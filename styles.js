import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  form: {
    backgroundColor: '#fff',
    width: "100%",
    maxHeight: 400,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: '#B0C4DE',
    color: '#000',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#4682B4',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20
  },
  buttonLabel: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});