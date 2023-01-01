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
  username: string;
  last_name: string;
}

export interface Chat {
  id: number;
  title: string;
  username: string;
  type: string;
}

export interface Photo {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  width: number;
  height: number;
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

export interface Message {
  message_id: number;
  from: From;
  chat: Chat;
  date: number;
  photo?: Photo[];
  video?: Video;
  document?: Document;
  location?: Location;
  contact?: Contact;
  voice?: Voice;
  sticker?: Sticker;
  text?: string;
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
