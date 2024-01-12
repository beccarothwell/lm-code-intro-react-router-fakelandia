import { useContext, useState } from "react";
import ConfessionForm from "../ConfessionForm/ConfessionForm";
import {
  ConfessionFormData,
  ConfessionResponse,
} from "../ConfessionForm/ConfessionForm.types";
import { isError } from "../../helpers/is_error";
import { MisdemeanoursContext } from "../../context/MisdemeanoursContext";
import {
  Misdemeanour,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";

const ConfessionPage: React.FC = () => {
  const { updateMisdemeanours } = useContext(MisdemeanoursContext);
  const [submissionResponse, setSubmissionResponse] =
    useState<ConfessionResponse | null>(null);

  const constructMisdemeanour = (reason: MisdemeanourKind): Misdemeanour => {
    return {
      citizenId: Math.floor(1 + Math.random() * 37 * (Math.random() * 967)),
      misdemeanour: reason,
      date: new Date().toLocaleDateString(),
    };
  };

  const submitData = async (data: ConfessionFormData) => {
    try {
      const response = await fetch("http://localhost:8080/api/confess/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      setSubmissionResponse(json);
      if (response.ok) {
        if (!json.justTalked) {
          if (data.reason !== "just-talk" && data.reason !== "") {
            const misdemeanour = constructMisdemeanour(data.reason);
            updateMisdemeanours([misdemeanour]);
          }
        }
      }
    } catch (e: unknown) {
      console.log(isError(e) ? e.message : "Unknown error!");
    }
  };

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
      <ConfessionForm
        submitData={submitData}
        submissionResponse={submissionResponse}
      />
    </>
  );
};

export default ConfessionPage;
