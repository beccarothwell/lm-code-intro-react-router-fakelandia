import { FormEvent, useMemo, useState } from "react";
import {
  JUST_TALK,
  JUST_TALK_TEXT,
  MISDEMEANOURS_TEXT_MAP,
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
import validateDetails from "../../validation/validate_details";

const DEFAULT_INPUT_DATA: ConfessionFormData = {
  subject: "",
  reason: "",
  details: "",
};

const DEFAULT_VALIDATION_ERRORS: ConfessionValidationErrors = {
  subject: [],
  reason: [],
  details: [],
};

const DEFAULT_INPUT_TOUCHED: ConfessionInputTouched = {
  subject: false,
  reason: false,
  details: false,
};

const confessionValidationFunctions: ConfessionValidationFunctions = {
  subject: validateSubject,
  reason: validateReason,
  details: validateDetails,
};

const misdemeanourOptions: ReasonForContactOption[] = Array.from(
  MISDEMEANOURS_TEXT_MAP,
  ([value, text]) => ({ value, text })
);

const reasonForContactOptions: ReasonForContactOption[] = [
  ...misdemeanourOptions,
  { value: JUST_TALK, text: JUST_TALK_TEXT },
];

interface ConfessionFormProps {
  submitData: (data: ConfessionFormData) => void;
}

const ConfessionForm: React.FC<ConfessionFormProps> = ({ submitData }) => {
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
    if (Object.values(validationErrors).flat(2).length !== 0) {
      console.log(validationErrors);
    } else {
      console.log(inputData);
      submitData(inputData);
    }
  }

  return (
    <form name="Confession" onSubmit={(e) => handleSubmit(e)}>
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
        name={"reason"}
        id={"reason"}
        value={inputData.reason}
        placeholder={"Select"}
        defaultValue=""
        onChange={handleChange}
        options={reasonForContactOptions}
        validationErrors={validationErrors.reason}
        onBlur={handleBlur}
      />
      <TextInput
        label={""}
        name={"details"}
        type="textarea"
        id={"details"}
        value={inputData.details}
        onChange={handleChange}
        validationErrors={validationErrors.details}
        onBlur={handleBlur}
      />
      <button className={"btn"} type="submit" disabled={disableSubmit} id={""}>
        Confess
      </button>
    </form>
  );
};

export default ConfessionForm;
