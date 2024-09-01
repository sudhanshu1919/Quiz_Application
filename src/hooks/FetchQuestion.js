import { useEffect, useState } from "react";
import data from "../Database/data";
import { useDispatch } from "react-redux";
// Redux Action

import * as Action from "../redux/question_reducer";
// Fetch question hook to feth api data set value to store
export const useFetchQuestion = () => {
  const dispatch = useDispatch();

  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, Loading: true }));
    // async Function fetch backend data
    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));

          // dispatch an action
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("No Question Avalibale..!");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};
