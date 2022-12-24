import { FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import { RootTabScreenProps } from "../types";

import chatRoomsData from "../assets/dummy-data/ChatRooms";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
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
  );
}
