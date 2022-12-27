import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Photo } from "../../screens/ChatRoomScreen";
import { getFile, getUserProfilePhotos, GET_FILE } from "../../utils/requests";
import { Text, View } from "../Themed";
import styles from "./styles";

interface MessageProps {
  message: string;
  userId: number;
  isMe: boolean;
}

export interface File {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  file_path: string;
}

const Message: React.FC<MessageProps> = ({ message, isMe, userId }) => {
  const [data, setData] = useState<Photo[]>();
  const [file, setFile] = useState<File>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserProfilePhotos(userId);
        setData(response.result?.photos?.[0]);
        const response2 = await getFile(
          response.result?.photos?.[0]?.[0]?.file_id || ""
        );
        setFile(response2.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {!isMe && (
        <Image
          source={{ uri: GET_FILE + file?.file_path }}
          style={[styles.avatar, { marginLeft: 10 }]}
        />
      )}
      <View
        style={[
          styles.messageContainer,
          isMe ? styles.containerRight : styles.containerLeft,
        ]}
      >
        <Text style={[styles.text, { color: isMe ? "#333" : "#fff" }]}>
          {message}
        </Text>
      </View>
      {isMe && (
        <Image
          source={{ uri: GET_FILE + file?.file_path }}
          style={[styles.avatar, { marginRight: 10 }]}
        />
      )}
    </View>
  );
};

export default Message;
