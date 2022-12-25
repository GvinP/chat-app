import { Image, Pressable } from "react-native";
import { Text, View } from "../Themed";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface ChatRoomItemProps {
  id: string;
  name: string;
  lastMessage: string;
  image: string;
  date: string;
  newMessages: number;
}

const ChatRoomItem: React.FC<ChatRoomItemProps> = ({
  id,
  name,
  image,
  date,
  lastMessage,
  newMessages,
}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ChatRoomScreen", { id, title: name });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
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
    </Pressable>
  );
};

export default ChatRoomItem;
