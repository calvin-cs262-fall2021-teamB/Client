import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#800000',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 226,
    height: 47,
  },
  orderLists: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});