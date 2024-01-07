import {
  MisdemeanourKind,
  MisdemeanourKindTextEmoji,
} from "../../types/misdemeanours.types";

export interface MisdemeanourTableFilterOption {
  value: MisdemeanourKind;
  text: MisdemeanourKindTextEmoji | MisdemeanourKind;
}

export interface MisdeameanoursRowData {
  citizenId: number;
  date: string;
  misdemeanour: MisdemeanourTableFilterOption;
}
