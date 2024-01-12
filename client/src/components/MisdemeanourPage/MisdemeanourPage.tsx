import { useContext, useMemo } from "react";
import {
  MisdemeanoursContext,
  IsLoadingContext,
  ErrorMessageContext,
} from "../../context/MisdemeanoursContext";
import MisdemeanoursTable from "../MisdemeanoursTable/MisdemeanoursTable";
import { MISDEMEANOURS_TEXT_MAP } from "../../types/misdemeanours.types";
import {
  MisdeameanoursRowData,
  MisdemeanourTableFilterOption,
} from "../MisdemeanoursTable/MisdemeanoursTable.types";

const MisdemeanourPage: React.FC = () => {
  const { misdemeanours } = useContext(MisdemeanoursContext);
  const isLoading = useContext(IsLoadingContext);
  const errorMessage = useContext(ErrorMessageContext);

  const misdemeanourValues: MisdeameanoursRowData[] | undefined = useMemo(
    () =>
      misdemeanours.map((misdemeanourObj) => {
        const { misdemeanour } = misdemeanourObj;

        return {
          ...misdemeanourObj,
          misdemeanour: {
            text: MISDEMEANOURS_TEXT_MAP.get(misdemeanour) ?? misdemeanour,
            value: misdemeanour,
          },
        };
      }),
    [misdemeanours]
  );

  const misdemeanourFilters: MisdemeanourTableFilterOption[] = useMemo(
    () => [
      ...new Map(
        misdemeanourValues.map(({ misdemeanour }) => [
          misdemeanour.value,
          {
            ...misdemeanour,
            text:
              MISDEMEANOURS_TEXT_MAP.get(misdemeanour.value) ??
              misdemeanour.value,
          },
        ])
      ).values(),
    ],
    [misdemeanourValues]
  );

  const misdemeanourColumnHeads = [
    { key: "citizenId", title: "Citizen ID" },
    { key: "date", title: "Date" },
    {
      key: "misdemeanour",
      title: "Misdemeanour",
      filters: misdemeanourFilters,
    },
    { key: "punishmentIdea", title: "Punishment Idea" },
  ];

  return (
    <>
      {isLoading && "...Loading"}
      {!isLoading &&
        misdemeanourValues.length > 0 &&
        misdemeanourFilters.length > 0 && (
          <MisdemeanoursTable
            bodyData={misdemeanourValues}
            headerData={misdemeanourColumnHeads}
          />
        )}
      {errorMessage && errorMessage}
    </>
  );
};

export default MisdemeanourPage;
