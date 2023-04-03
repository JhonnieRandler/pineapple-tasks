import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    marginTop: 20,
  },
  main: {
    paddingBottom: 20,
  },
  null: {
    flex: 1,
    flexDirection: 'row',
    width: "60%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: 'Cairo',
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    color: '#5600A0',
    textAlign: "center"
  }
});

export default styles;
