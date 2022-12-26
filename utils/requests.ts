//@ts-ignore
import {TOKEN} from "@env"

const BASE_URL = `https://api.telegram.org/bot${TOKEN}`;
const SEND_MESSAGE = BASE_URL + "/sendMessage?chat_id=@foxgroupp&text=";
const GET_UPDATES = BASE_URL + "/getUpdates";

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

"https://api.telegram.org/bot<>/getFile?file_id="
"https://api.telegram.org/file/bot<>/<file_path>"