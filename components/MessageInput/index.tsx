import { Text, View } from "../Themed";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import {
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { sendImage, sendMessage } from "../../utils/requests";
import EmojiSelector from "react-native-emoji-selector";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerResult } from "expo-image-picker/build/ImagePicker.types";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [isEmpjiPickerOpen, setIsEmpjiPickerOpen] = useState(false);
  const [image, setImage] = useState<ImagePickerResult | null>(null);
  const height = useHeaderHeight();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result);
    }
  };
  const onsendMessage = () => {
    if (image) sendImage(image);
    if (message) sendMessage(message);
    setMessage("");
    setIsEmpjiPickerOpen(false);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={height}
      enabled
      style={{ height: isEmpjiPickerOpen ? "70%" : "auto" }}
    >
      {image && (
        <Image
          source={{ uri: image?.assets?.[0].uri }}
          style={{ width: 50, aspectRatio: 1 }}
        />
      )}
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Pressable onPress={() => setIsEmpjiPickerOpen(!isEmpjiPickerOpen)}>
              <SimpleLineIcons
                name="emotsmile"
                size={24}
                color={"#888"}
                style={styles.icon}
              />
            </Pressable>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="message ..."
              placeholderTextColor={"#888"}
            />
            <Pressable onPress={pickImage}>
              <Feather
                name="image"
                size={24}
                color={"#888"}
                style={styles.icon}
              />
            </Pressable>
            <Feather
              name="camera"
              size={24}
              color={"#888"}
              style={styles.icon}
            />
            <MaterialCommunityIcons
              name="microphone-outline"
              size={24}
              color={"#888"}
              style={styles.icon}
            />
          </View>
          <Pressable onPress={onsendMessage} style={styles.buttonContainer}>
            {message || image ? (
              <Ionicons name="send" size={24} color={"#fff"} />
            ) : (
              <AntDesign name="plus" size={24} color={"#fff"} />
            )}
          </Pressable>
        </View>
      </View>
      {isEmpjiPickerOpen && (
        <EmojiSelector
          onEmojiSelected={(emoji) => setMessage((prev) => prev + emoji)}
          columns={8}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
