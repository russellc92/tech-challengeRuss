import { useEffect, useState } from "react";

import { fetchClassification } from "../api/classificationApi.js";

const useGetSentenceClassification = (
  sentence,
  subWordInclusive = true,
  caseSensitive = true
) => {
  const [classy, setClassy] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const sentenceClassy = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        let res = await fetchClassification(sentence);
        console.log(res);
        if (res?.data?.result?.classy) {
          setClassy(res.data.result);
        } else {
          throw new Error("error fetching classification");
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
        setClassy(null);
      }
      setIsLoading(false);
    };
    sentenceClassy();
  }, [sentence, subWordInclusive, caseSensitive]);
  return { classy, isLoading, isError };
};

export default useGetSentenceClassification;
