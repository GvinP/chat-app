import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageContainer: {
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  containerRight: {
    backgroundColor: "#cecece",
    marginLeft: "auto",
    marginRight: 10,
  },
  containerLeft: {
    backgroundColor: "#3777F0",
    marginLeft: 10,
    marginRight: "auto",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    margin: 10,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
});

export default styles;
