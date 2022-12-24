import { FlatList } from "react-native";
import Message from "../components/Message";
import chat from "../assets/dummy-data/Chats";

export default function ChatRoomScreen() {
  return (
    <FlatList
      data={chat.messages.reverse()}
      renderItem={({ item }) => (
        <Message
          message={item.content}
          isMe={chat.users[0].id === item.user.id}
        />
      )}
      inverted
    />
  );
}
