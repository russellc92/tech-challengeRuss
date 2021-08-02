import { useEffect, useState } from "react";

import { fetchWordList } from "../api/wordListApi.js";

const useGetWordList = () => {
  const [wl, setWl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const wordList = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        let res = await fetchWordList();
        if (res?.data?.results?.wordList) {
          setWl(res.data.results);
        } else {
          throw new Error("error fetching words and colours");
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
        setWl(null);
      }
      setIsLoading(false);
    };
    wordList();
  }, []);
  return { wl, isLoading, isError };
};

export default useGetWordList;
