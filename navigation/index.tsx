import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Image, useWindowDimensions } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList } from "../types";
import NotFoundScreen from "../screens/NotFoundScreen";
import { Text, View } from "../components/Themed";
import { Feather } from "@expo/vector-icons";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader, headerBackVisible: false }}
      />
      <Stack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

const HomeHeader = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width,
        padding: 10,
        marginLeft: -15,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
        }}
        style={{ width: 30, aspectRatio: 1, borderRadius: 15 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 40,
          fontSize: 17,
          fontWeight: "600",
        }}
      >
        Home
      </Text>
      <Feather
        name="camera"
        size={24}
        color={"#fff"}
        style={{ marginHorizontal: 5 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color={"#fff"}
        style={{ marginHorizontal: 5 }}
      />
    </View>
  );
};
const ChatRoomHeader = (props: any) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width - 35,
        padding: 10,
        marginLeft: -15,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
        }}
        style={{ width: 30, aspectRatio: 1, borderRadius: 15 }}
      />
      <Text
        style={{
          flex: 1,
          marginLeft: 20,
          fontSize: 17,
          fontWeight: "600",
        }}
      >
        {props?.children}
      </Text>
      <Feather
        name="camera"
        size={24}
        color={"#fff"}
        style={{ marginHorizontal: 5 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color={"#fff"}
        style={{ marginHorizontal: 5 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color={"#fff"}
        style={{ marginHorizontal: 5 }}
      />
    </View>
  );
};
