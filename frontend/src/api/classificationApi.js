import axios from "axios";

const domain = process.env.REACT_APP_api_path;
const classifyPath = "classify";

export const fetchClassification = async (options) => {
  const url = domain + classifyPath;
  return await axios.post(url, {
    subWordInclusive: options.subWordInclusive,
    caseSensitive: options.caseSensitive,
    sentence: options.sentence,
  });
};
