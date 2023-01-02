import { FlatList, View, StyleSheet, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/native";
import { getUpdates } from "../utils/requests";

export interface From {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username: string;
}

export interface Chat {
  id: number;
  title: string;
  username: string;
  type: string;
}

export interface Thumb {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  width: number;
  height: number;
}

export interface Video {
  duration: number;
  width: number;
  height: number;
  file_name: string;
  mime_type: string;
  thumb: Thumb;
  file_id: string;
  file_unique_id: string;
  file_size: number;
}

export interface Document {
  file_name: string;
  mime_type: string;
  file_id: string;
  file_unique_id: string;
  file_size: number;
  thumb: Thumb;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Contact {
  phone_number: string;
  first_name: string;
  vcard: string;
  user_id: number;
}

export interface Voice {
  duration: number;
  mime_type: string;
  file_id: string;
  file_unique_id: string;
  file_size: number;
}

export interface Sticker {
  width: number;
  height: number;
  emoji: string;
  set_name: string;
  is_animated: boolean;
  is_video: boolean;
  type: string;
  thumb: Thumb;
  file_id: string;
  file_unique_id: string;
  file_size: number;
}

export interface Animation {
  file_name: string;
  mime_type: string;
  duration: number;
  width: number;
  height: number;
  thumb: Thumb;
  file_id: string;
  file_unique_id: string;
  file_size: number;
}

export interface Photo {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  width: number;
  height: number;
}
export interface Message {
  message_id: number;
  from: From;
  chat: Chat;
  date: number;
  video?: Video;
  document?: Document;
  location?: Location;
  contact?: Contact;
  voice?: Voice;
  sticker?: Sticker;
  text?: string;
  animation?: Animation;
  forward_from?: From;
  forward_date?: number;
  media_group_id?: string;
  photo?: Photo[];
  caption?: string;
  forward_from_chat?: Chat;
  forward_from_message_id?: number;
  message_thread_id?: number;
  reply_to_message?: Message;
}

export interface Result {
  update_id: number;
  message: Message;
}

export default function ChatRoomScreen() {
  const [data, setData] = useState<Result[]>();
  const [isLoaded, setIsLoaded] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  //@ts-ignore
  navigation.setOptions({ title: route?.params?.title });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUpdates();
        setData(response.result);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
// console.log(JSON.stringify(data))
  return (
    <View style={styles.page}>
      {/* <ScrollView>
        <Text style={{ color: "#fff" }}>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView> */}
      {isLoaded && (
        <FlatList
          data={data?.reverse()}
          renderItem={({ item }) => (
            <Message {...{item}}/>
          )}
          inverted
        />
      )}
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
