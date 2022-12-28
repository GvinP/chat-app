import { Text, View } from "../Themed";
import React, { useState } from "react";
import styles from "./styles";
import {
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { sendMessage } from "../../utils/requests";
import EmojiSelector from "react-native-emoji-selector";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [isEmpjiPickerOpen, setIsEmpjiPickerOpen] = useState(false);
  const height = useHeaderHeight();
  const onPress = () => {
    sendMessage(message);
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
          <Pressable onPress={onPress} style={styles.buttonContainer}>
            {message ? (
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
