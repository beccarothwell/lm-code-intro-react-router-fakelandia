import { useContext, useEffect, useState } from "react";
import ConfessionForm from "../ConfessionForm/ConfessionForm";
import { ConfessionFormData } from "../ConfessionForm/ConfessionForm.types";
import { isError } from "../../helpers/is_error";
import { MisdemeanoursContext } from "../../context/MisdemeanoursContext";
import {
  Misdemeanour,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";

interface ConfessionResponse {
  success: boolean;
  justTalked: boolean;
  message: string;
}

const ConfessionPage: React.FC = () => {
  const { updateMisdemeanours } = useContext(MisdemeanoursContext);

  const [submittedMisdemeanour, setSubmittedMisdemeanour] = useState<
    Misdemeanour | undefined
  >();
  const [submissionResponse, setSubmissionResponse] =
    useState<ConfessionResponse | null>(null);

  const postData = async (data: ConfessionFormData) => {
    try {
      const response = await fetch("http://localhost:8080/api/confess/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const json = await response.json();
        setSubmissionResponse(json);
      }
    } catch (e: unknown) {
      console.log(isError(e) ? e.message : "Unknown error!");
    }
  };

  const constructMisdemeanour = (reason: MisdemeanourKind): Misdemeanour => {
    const date = new Date().toLocaleDateString();
    return { citizenId: 0, misdemeanour: reason, date: date };
  };

  const submitData = (data: ConfessionFormData) => {
    if (data.reason !== "just-talk" && data.reason !== "") {
      const misdemeanour = constructMisdemeanour(data.reason);
      setSubmittedMisdemeanour(misdemeanour);
    }
    postData(data);
  };

  useEffect(() => {
    if (
      submissionResponse?.success &&
      !submissionResponse.justTalked &&
      submittedMisdemeanour
    ) {
      updateMisdemeanours([submittedMisdemeanour]);
    }
  }, [submissionResponse, submittedMisdemeanour, updateMisdemeanours]);

  return (
    <>
      <p className="page__text">
        It's very difficult to catch people committing misdemeanours so we
        appreciate it when citizens confess to us directly.
      </p>
      <p className="page__text">
        However, if you're just having a hard day and need to vent then you're
        welcome to contact us here too. Up to you!
      </p>
      <ConfessionForm submitData={submitData} />
    </>
  );
};

export default ConfessionPage;
