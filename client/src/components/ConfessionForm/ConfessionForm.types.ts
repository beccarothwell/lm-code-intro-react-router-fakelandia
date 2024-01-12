import {
  JustTalk,
  JustTalkText,
  MisdemeanourKind,
  MisdemeanourKindText,
} from "../../types/misdemeanours.types";

export type ReasonForContact = MisdemeanourKind | JustTalk;

export interface ReasonForContactOption {
  text: MisdemeanourKindText | JustTalkText;
  value: ReasonForContact;
}

export interface ConfessionFormData {
  subject: string;
  reason: ReasonForContact | "";
  details: string;
}

export type ConfessionValidationErrors = {
  [Property in keyof ConfessionFormData]: string[];
};

export type ConfessionValidationFunctions = {
  [Property in keyof ConfessionFormData]: (value: string) => string[];
};

export type ConfessionInputTouched = {
  [Property in keyof ConfessionFormData]: boolean;
};

export interface ConfessionResponse {
  success: boolean;
  justTalked: boolean;
  message: string;
}
