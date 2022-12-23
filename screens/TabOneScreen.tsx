import { StyleSheet, Image } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <ChatRoomItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
