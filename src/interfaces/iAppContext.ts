import { iPitanje } from "./iPitanje";

export interface iAppContext {
  pitanja: iPitanje[];
  setPitanja: React.Dispatch<React.SetStateAction<iPitanje[]>>;
}
