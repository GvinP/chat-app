const token = "5975195874:AAH6lZIDDEgysQ0BW3KnOdQVbo_OvxmUiPE";
const BASE_URL = `https://api.telegram.org/bot${token}`;
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

"https://api.telegram.org/bot5975195874:AAH6lZIDDEgysQ0BW3KnOdQVbo_OvxmUiPE/getFile?file_id="
"https://api.telegram.org/file/bot5975195874:AAH6lZIDDEgysQ0BW3KnOdQVbo_OvxmUiPE/<file_path>"