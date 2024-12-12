import { Dispatch, SetStateAction } from "react";

type DispatchType<T> = Dispatch<SetStateAction<T>>;

type Steps =
  | "get started"
  | "lets go"
  | "question 1"
  | "question 2"
  | "question 2 go"
  | "question 3"
  | "results"
  | "question 4"
  | "congratulations"
  | "question 5"
  | "question 6"
  | "question 7"
  | "question 8"
  | "question 9"
  | "question 10"
  | "question 11";

type UpdateQuestionStep = {
  updateQuestion: DispatchType<Steps>;
};
