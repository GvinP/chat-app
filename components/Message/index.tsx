import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Photo, Result } from "../../screens/ChatRoomScreen";
import { getFile, getUserProfilePhotos, GET_FILE } from "../../utils/requests";
import { Text, View } from "../Themed";
import styles from "./styles";

interface MessageProps {
  item: Result;
}

export interface File {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  file_path: string;
}

const Message: React.FC<MessageProps> = ({ item }) => {
  const [data, setData] = useState<Photo[]>();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const isMe = 428522302 === item.message.from.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserProfilePhotos(item.message.from.id);
        setData(response.result?.photos?.[0]);
        const avatar = await getFile(
          response.result?.photos?.[0]?.[0]?.file_id || ""
        );
        setAvatar(avatar?.result?.file_path);
        if (item.message.photo) {
          const photo = await getFile(item.message.photo[2].file_id);
          setPhoto(photo.result.file_path);
        }
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
          source={{ uri: GET_FILE + avatar }}
          style={[styles.avatar, { marginLeft: 10 }]}
        />
      )}
      <View
        style={[
          styles.messageContainer,
          isMe ? styles.containerRight : styles.containerLeft,
        ]}
      >
        {!!item.message.text && (
          <Text style={[styles.text, { color: isMe ? "#333" : "#fff" }]}>
            {item.message.text}
          </Text>
        )}
        {photo && (
          <Image
            source={{ uri: GET_FILE + photo }}
            style={{ width: 250, aspectRatio: 1 }}
          />
        )}
      </View>
      {isMe && (
        <Image
          source={{ uri: GET_FILE + avatar }}
          style={[styles.avatar, { marginRight: 10 }]}
        />
      )}
    </View>
  );
};

export default Message;
