//@ts-ignore
import { TOKEN } from "@env";

const BASE_URL = `https://api.telegram.org`;
const BOT = `/bot${TOKEN}`;
const SEND_MESSAGE = BASE_URL + BOT + "/sendMessage?chat_id=@foxgroupp&text=";
const GET_UPDATES = BASE_URL + BOT + "/getUpdates";
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
