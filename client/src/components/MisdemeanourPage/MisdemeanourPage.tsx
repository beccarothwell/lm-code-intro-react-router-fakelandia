import { useContext, useMemo } from "react";
import { MisdemeanoursContext } from "../../App";
import MisdemeanoursTable from "../MisdemeanoursTable/MisdemeanoursTable";
import {
  MISDEMEANOURS_MAP,
  MISDEMEANOURS_TEXT_WITH_EMOJI_MAP,
} from "../../types/misdemeanours.types";
import {
  MisdeameanoursRowData,
  MisdemeanourTableFilterOption,
} from "../MisdemeanoursTable/MisdemeanoursTable.types";

const MisdemeanourPage: React.FC = () => {
  const { data, isFetching, errorMessage } = useContext(MisdemeanoursContext);

  const misdemeanourValues: MisdeameanoursRowData[] | undefined = useMemo(
    () =>
      data?.misdemeanours.map((misdemeanourObj) => {
        const { misdemeanour } = misdemeanourObj;

        return {
          ...misdemeanourObj,
          misdemeanour: {
            text:
              MISDEMEANOURS_TEXT_WITH_EMOJI_MAP.get(misdemeanour) ??
              misdemeanour,
            value: misdemeanour,
          },
        };
      }),
    [data]
  );

  const misdemeanourFilters: MisdemeanourTableFilterOption[] = useMemo(
    () => [
      ...new Map(
        misdemeanourValues?.map(({ misdemeanour }) => [
          misdemeanour.value,
          {
            ...misdemeanour,
            text:
              MISDEMEANOURS_MAP.get(misdemeanour.value) ?? misdemeanour.value,
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
      {isFetching && "...Loading"}
      {!isFetching && misdemeanourValues && misdemeanourFilters && (
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
