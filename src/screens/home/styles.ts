import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonDefault: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#1d87ad',
    borderRadius: 10,
  },
  defaultText: {
    color: 'white',
    fontSize: 16,
  },
  activeText: {
    color: 'black',
    fontSize: 16,
  },
  buttonActive: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderColor: '#1d6aad',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 15,
  },
});
