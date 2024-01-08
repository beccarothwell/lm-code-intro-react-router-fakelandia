import {
  MisdemeanourKind,
  MisdemeanourKindText,
} from "../../types/misdemeanours.types";

export interface MisdemeanourTableFilterOption {
  value: MisdemeanourKind;
  text: MisdemeanourKindText | MisdemeanourKind;
}

export interface MisdeameanoursRowData {
  citizenId: number;
  date: string;
  misdemeanour: MisdemeanourTableFilterOption;
}
