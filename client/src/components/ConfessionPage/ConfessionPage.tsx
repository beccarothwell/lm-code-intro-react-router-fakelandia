import { useState } from "react";
import ConfessionForm from "../ConfessionForm/ConfessionForm";
import { ConfessionFormData } from "../ConfessionForm/ConfessionForm.types";

const DEFAULT_INPUT_DATA: ConfessionFormData = {
  subject: "",
  reason: "",
  details: "",
};

const ConfessionPage: React.FC = () => {
  const [submissionData, setSubmissionData] =
    useState<ConfessionFormData>(DEFAULT_INPUT_DATA);

  const submitData = (data: ConfessionFormData) => {
    setSubmissionData(data);
  };
  console.log(submissionData);
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
