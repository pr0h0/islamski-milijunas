import { iOdgovor } from "./iOdgovor";

export interface iPitanje {
  id: number;
  pitanje: string;
  odgovori: iOdgovor[];
}
