import { Dispatch, SetStateAction } from "react";

type DispatchType<T> = Dispatch<SetStateAction<T>>;

type Steps =
  | "get started"
  | "lets go"
  | "question 1"
  | "question 2" 
  | "question 2 go"
  | "question 3"
  | "results";

