import {
  MISDEMEANOURS_TEXT_MAP,
  JUST_TALK,
  JUST_TALK_TEXT,
} from "../../types/misdemeanours.types";
import validateDetails from "../../validation/validate_details";
import validateReason from "../../validation/validate_reason";
import validateSubject from "../../validation/validate_subject";
import {
  ConfessionFormData,
  ConfessionInputTouched,
  ConfessionValidationErrors,
  ConfessionValidationFunctions,
  ReasonForContactOption,
} from "./ConfessionForm.types";

export const DEFAULT_INPUT_DATA: ConfessionFormData = {
  subject: "",
  reason: "",
  details: "",
};

export const DEFAULT_VALIDATION_ERRORS: ConfessionValidationErrors = {
  subject: [],
  reason: [],
  details: [],
};

export const DEFAULT_INPUT_TOUCHED: ConfessionInputTouched = {
  subject: false,
  reason: false,
  details: false,
};

export const confessionValidationFunctions: ConfessionValidationFunctions = {
  subject: validateSubject,
  reason: validateReason,
  details: validateDetails,
};

export const misdemeanourOptions: ReasonForContactOption[] = Array.from(
  MISDEMEANOURS_TEXT_MAP,
  ([value, text]) => ({ value, text })
);

export const reasonForContactOptions: ReasonForContactOption[] = [
  ...misdemeanourOptions,
  { value: JUST_TALK, text: JUST_TALK_TEXT },
];
