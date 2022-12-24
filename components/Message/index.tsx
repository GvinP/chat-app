import React from "react";
import { Text, View } from "../Themed";
import styles from "./styles";

interface MessageProps {
  message: string;
  isMe: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isMe }) => {
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.containerRight : styles.containerLeft,
      ]}
    >
      <Text style={[styles.text, { color: isMe ? "#333" : "#fff" }]}>
        {message}
      </Text>
    </View>
  );
};

export default Message;
