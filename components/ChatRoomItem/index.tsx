import { Image } from "react-native";
import { Text, View } from "../Themed";
import React from "react";
import styles from "./styles";

interface ChatRoomItemProps {
  name: string;
  lastMessage: string;
  image: string;
  date: string;
  newMessages: number;
}

const ChatRoomItem: React.FC<ChatRoomItemProps> = ({
  name,
  image,
  date,
  lastMessage,
  newMessages,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text} numberOfLines={1}>
            {lastMessage}
          </Text>
          <View style={styles.bage} lightColor="#828282" darkColor="#cecece">
            <Text lightColor="#fff" darkColor="#000">
              {newMessages}
            </Text>
          </View>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </View>
  );
};

export default ChatRoomItem;
