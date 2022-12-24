import { FlatList, View, StyleSheet } from "react-native";
import Message from "../components/Message";
import chat from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
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
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  }
})
