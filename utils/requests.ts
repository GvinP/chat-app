//@ts-ignore
import { TOKEN } from "@env";
import { ImagePickerResult } from "expo-image-picker/build/ImagePicker.types";

const BASE_URL = `https://api.telegram.org`;
const BOT = `/bot${TOKEN}`;
const SEND_MESSAGE = BASE_URL + BOT + "/sendMessage?chat_id=@foxgroupp&text=";
const GET_UPDATES = BASE_URL + BOT + "/getUpdates";
const SEND_PHOTO = BASE_URL + BOT + "/sendPhoto?chat_id=@foxgroupp";
const GET_USER_PROFILE_PHOTOS =
  BASE_URL + BOT + "/getUserProfilePhotos?user_id=";
const GET_FILE_REQUEST = BASE_URL + BOT + "/getFile?file_id=";
export const GET_FILE = BASE_URL + "/file" + BOT + "/";

export const getUpdates = async () => {
  try {
    const response = await fetch(GET_UPDATES);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = async (message: string) => {
  try {
    const response = await fetch(SEND_MESSAGE + message);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfilePhotos = async (userId: number) => {
  try {
    const response = await fetch(GET_USER_PROFILE_PHOTOS + userId);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getFile = async (fileId: string) => {
  try {
    const response = await fetch(GET_FILE_REQUEST + fileId);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const sendImage = async (image: ImagePickerResult) => {
  const localUri = image.assets?.[0].uri;
  const filename = localUri?.split("/").pop();
  const match = /\.(\w+)$/.exec(filename || "");
  const type = match ? `image/${match[1]}` : `image`;
  const formData = new FormData();
  formData.append("photo", {
    //@ts-ignore
    uri: localUri,
    name: filename || "image",
    type,
  });
  try {
    const response = await fetch(SEND_PHOTO, {
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
