import { Dispatch, SetStateAction } from "react";

type DispatchType<T> = Dispatch<SetStateAction<T>>;

type Steps = "get started" | "lets go" | "question 1" | "question 3";
