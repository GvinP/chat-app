import { FlatList, View, StyleSheet } from "react-native";
import Message from "../components/Message";
import chat from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  //@ts-ignore
  navigation.setOptions({title: route?.params?.title})
  return (
    <View style={styles.page}>
      <FlatList
        data={chat.messages}
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
    flex: 1,
  },
});
