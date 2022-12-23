import { StyleSheet, Image } from "react-native";
import { Text, View } from "./Themed";
import React from "react";

const ChatRoomItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Toph Beifong</Text>
          <Text style={styles.date}>2:16 PM</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text} numberOfLines={1}>
            Наш мир полон тайн, которые кажутся неразрешимыми. Загадка Розуэлла,
            тайна убийства Кеннеди, гигантские надписи в пустыне Наска, что на
            самом деле случилось с группой Дятлова, куда делся экипаж «Марии
            Селесты» в Бермудском треугольнике и многие другие вопросы остаются
            без окончательного ответа и расшифровки.{" "}
          </Text>
          <View style={styles.bage} lightColor="#828282" darkColor="#cecece">
            <Text lightColor="#fff" darkColor="#000">
              3
            </Text>
          </View>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </View>
  );
};

export default ChatRoomItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  date: {
    fontSize: 14,
    fontWeight: "400",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    width: "85%",
  },
  bage: {
    width: 20,
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    height: 1,
    width: "100%",
    marginTop: 5,
  },
});
