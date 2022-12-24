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
import { useHeaderHeight } from '@react-navigation/elements'

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const height = useHeaderHeight()
  const onPress = () => {};
  return (
    <KeyboardAvoidingView
      //   style={styles.container}
      behavior={Platform.OS === "ios" ? "position" : "position"}
      keyboardVerticalOffset={height}
      enabled
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="emotsmile"
            size={24}
            color={"#888"}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="message ..."
            placeholderTextColor={"#888"}
          />
          <Feather name="camera" size={24} color={"#888"} style={styles.icon} />
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
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
