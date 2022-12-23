import { StyleSheet, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import chatRoomsData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => (
          <ChatRoomItem
            name={item.users[1].name}
            image={item.users[1].imageUri}
            date={item.lastMessage.createdAt}
            lastMessage={item.lastMessage.content}
            newMessages={2}
          />
        )}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
