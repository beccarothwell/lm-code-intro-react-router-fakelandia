import { FormEvent, useMemo, useState } from "react";
import {
  JUST_TALK,
  JUST_TALK_TEXT,
  MISDEMEANOURS_MAP,
} from "../../types/misdemeanours.types";
import SelectInput from "../SelectInput/SelectInput";
import { TextInput } from "../TextInput/TextInput";
import {
  ConfessionFormData,
  ConfessionInputTouched,
  ConfessionValidationErrors,
  ConfessionValidationFunctions,
  ReasonForContactOption,
} from "./ConfessionForm.types";
import validateSubject from "../../validation/validate_subject";
import validateReason from "../../validation/validate_reason";
import validateMessage from "../../validation/validate_message";

const DEFAULT_INPUT_DATA: ConfessionFormData = {
  subject: "",
  reasonForContact: "",
  message: "",
};

const DEFAULT_VALIDATION_ERRORS: ConfessionValidationErrors = {
  subject: [],
  reasonForContact: [],
  message: [],
};

const DEFAULT_INPUT_TOUCHED: ConfessionInputTouched = {
  subject: false,
  reasonForContact: false,
  message: false,
};

const confessionValidationFunctions: ConfessionValidationFunctions = {
  subject: validateSubject,
  reasonForContact: validateReason,
  message: validateMessage,
};

const misdemeanourOptions: ReasonForContactOption[] = Array.from(
  MISDEMEANOURS_MAP,
  ([value, text]) => ({ value, text })
);

const reasonForContactOptions: ReasonForContactOption[] = [
  ...misdemeanourOptions,
  { value: JUST_TALK, text: JUST_TALK_TEXT },
];

const ConfessionForm: React.FC = () => {
  const [inputData, setInputData] =
    useState<ConfessionFormData>(DEFAULT_INPUT_DATA);

  const [validationErrors, setValidationErrors] =
    useState<ConfessionValidationErrors>(DEFAULT_VALIDATION_ERRORS);

  const [touched, setTouched] = useState<ConfessionInputTouched>(
    DEFAULT_INPUT_TOUCHED
  );

  function handleBlur(id: string) {
    if (touched[id as keyof ConfessionFormData] === false) {
      setTouched((currentState) => {
        return {
          ...currentState,
          [id]: true,
        };
      });
    }

    const validationFn =
      confessionValidationFunctions[id as keyof ConfessionFormData];
    const currentValue = inputData[id as keyof ConfessionFormData];
    const validationErrors = validationFn(currentValue);

    if (validationErrors) {
      setValidationErrors((currentState) => {
        return {
          ...currentState,
          [id]: validationErrors,
        };
      });
    }
  }

  function handleChange(id: string, value: string) {
    if (touched[id as keyof ConfessionFormData] === false) {
      setTouched((currentState) => {
        return {
          ...currentState,
          [id]: true,
        };
      });
    }
    setInputData((currentState) => {
      return {
        ...currentState,
        [id]: value,
      };
    });

    const validationFn =
      confessionValidationFunctions[id as keyof ConfessionFormData];
    const validationErrors = validationFn(value);

    if (validationErrors) {
      setValidationErrors((currentState) => {
        return {
          ...currentState,
          [id]: validationErrors,
        };
      });
    }
  }

  const disableSubmit = useMemo(() => {
    const errors = Object.values(validationErrors).flat(2);
    const untouched = Object.values(touched).find((value) => value === false);
    if (untouched !== undefined || errors.length !== 0) {
      return true;
    }
    return false;
  }, [validationErrors, touched]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validationErrors) {
      console.log(validationErrors);
    } else {
      console.log(inputData);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextInput
        label={"Subject: "}
        name={"subject"}
        type="text"
        id={"subject"}
        value={inputData.subject}
        onChange={handleChange}
        validationErrors={validationErrors.subject}
        onBlur={handleBlur}
      />
      <SelectInput
        label={"Reason for contact: "}
        name={"reasonForContact"}
        id={"reasonForContact"}
        value={inputData.reasonForContact}
        placeholder={"Select"}
        defaultValue=""
        onChange={handleChange}
        options={reasonForContactOptions}
        validationErrors={validationErrors.reasonForContact}
        onBlur={handleBlur}
      />
      <TextInput
        label={""}
        name={"message"}
        type="textarea"
        id={"message"}
        value={inputData.message}
        onChange={handleChange}
        validationErrors={validationErrors.message}
        onBlur={handleBlur}
      />
      <button className={"btn"} type="submit" disabled={disableSubmit} id={""}>
        Confess
      </button>
    </form>
  );
};

export default ConfessionForm;
