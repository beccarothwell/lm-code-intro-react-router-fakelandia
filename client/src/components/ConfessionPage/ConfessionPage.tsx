import { useEffect, useState } from "react";
import ConfessionForm from "../ConfessionForm/ConfessionForm";
import { ConfessionFormData } from "../ConfessionForm/ConfessionForm.types";
import { useFetch } from "../../hooks/use_fetch/use_fetch";

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

  /*const submission = useFetch(
    "http://localhost:8080/api/confess/",
    "POST",
    submissionData
  );
  console.log(submission);*/

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/confess/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
          //signal: abortController.signal,
        });
        //setIsFetching(false);
        if (!response.ok) {
          if (response.status === 404) {
            //setErrorMessage(`${response.status} Not Found`);
          } else if (response.status === 418) {
            //setErrorMessage(`${response.status} I'm a tea pot, silly`);
          } else if (response.status === 500) {
            //setErrorMessage(
            //   `${response.status} Oops... something went wrong, try again 🤕`
            // );
          } else {
            //setErrorMessage(`${response.status} ${response.statusText}`);
          }
        }
        if (response.status === 200 || response.status === 201) {
          const json = await response.json();
          //setData(json);
          console.log(json);
        }
      } catch (e: unknown) {
        //setIsFetching(false);
        console
          .log
          //  isError(e) && e.name !== "AbortError" ? e.message : "Unknown error!"
          ();
      }
    };
    fetchData();
  }, [submissionData]);*/

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
