import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
  inputContainer: {
    backgroundColor: "#ccc",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    padding: 5,
    borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: "#3777F0",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 35,
  },
  sendMessageContainer: {
    flexDirection: "row",
    margin: 10,
    alignSelf: "stretch",
    justifyContent: "space-between",
    borderColor: "#cecece",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default styles;
