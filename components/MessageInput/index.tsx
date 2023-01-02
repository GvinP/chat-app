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
import { ImagePickerAsset } from "expo-image-picker/build/ImagePicker.types";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [isEmpjiPickerOpen, setIsEmpjiPickerOpen] = useState(false);
  const [image, setImage] = useState<ImagePickerAsset[] | null>(null);
  const height = useHeaderHeight();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets);
    }
  };

  const takePhoto = async () => {
    try {
      const permisssion = await ImagePicker.getCameraPermissionsAsync();
      console.log(permisssion);
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
      });
      if (!result.canceled) {
        setImage(result.assets);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onsendMessage = () => {
    if (image) sendImage(image);
    if (message) sendMessage(message);
    setMessage("");
    setImage(null);
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
        <View style={styles.sendMessageContainer}>
          <Image
            source={{ uri: image?.[0].uri }}
            style={{
              width: 100,
              aspectRatio: 1,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <Pressable onPress={() => setImage(null)}>
            <AntDesign
              name="close"
              size={24}
              color={"#fff"}
              style={{ padding: 10 }}
            />
          </Pressable>
        </View>
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
            <Pressable onPress={takePhoto}>
              <Feather
                name="camera"
                size={24}
                color={"#888"}
                style={styles.icon}
              />
            </Pressable>
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
