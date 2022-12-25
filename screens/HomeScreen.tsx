import { FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";

import chatRoomsData from "../assets/dummy-data/ChatRooms";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => (
          <ChatRoomItem
            id={item.id}
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
    </SafeAreaView>
  );
}
