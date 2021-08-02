import axios from "axios";

const domain = process.env.REACT_APP_api_path;
const classifyPath = "classify";

export const fetchClassification = async ({
  sentence,
  subWordInclusive,
  caseSensitive,
}) => {
  const url = domain + classifyPath;
  return await axios.post(url, {
    subWordInclusive: subWordInclusive,
    caseSensitive: caseSensitive,
    sentence: sentence,
  });
};
