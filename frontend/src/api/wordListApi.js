import axios from "axios";

const domain = process.env.REACT_APP_api_path;
const wlPath = "wordlists";

export const fetchWordList = async () => {
  const url = domain + wlPath;
  return await axios.get(url);
};
