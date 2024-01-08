import "./MisdemeanoursTable.scss";
import MisdemeanoursTableHeader from "../MisdemeanoursTableHeader/MisdemeanoursTableHeader";
import MisdemeanoursTableRow from "../MisdemeanoursTableRow/MisdemeanoursTableRow";
import { useMemo, useState } from "react";
import { MisdeameanoursColumnHead } from "../MisdemeanoursTableHeader/MisdemeanoursTableHeader";
import { MisdeameanoursRowData } from "./MisdemeanoursTable.types";
import { MISDEMEANOURS_EMOJI_MAP } from "../../types/misdemeanours.types";

interface MisdemeanoursTableProps {
  headerData: MisdeameanoursColumnHead[];
  bodyData: MisdeameanoursRowData[];
}

const MisdemeanoursTable: React.FC<MisdemeanoursTableProps> = ({
  headerData,
  bodyData,
}) => {
  const [misdemeanourFilter, setMisdemeanorFilter] = useState<string>("");

  const filteredValues = useMemo(() => {
    if (misdemeanourFilter) {
      return bodyData.filter(
        ({ misdemeanour }) => misdemeanour.value === misdemeanourFilter
      );
    }
    return bodyData;
  }, [bodyData, misdemeanourFilter]);

  function handleFilter(value: string) {
    setMisdemeanorFilter(value);
  }

  return (
    <table className="misdemeanours-table">
      <MisdemeanoursTableHeader
        columnHeads={headerData}
        handleFilter={handleFilter}
      />
      <tbody>
        {filteredValues.map(({ citizenId, date, misdemeanour }, i) => {
          const { text, value } = misdemeanour;
          const punishmentIdeaSeed =
            citizenId.toString() + date.replaceAll("/", "") + value;
          return (
            <MisdemeanoursTableRow
              key={i}
              citizenId={citizenId}
              date={date}
              misdemeanour={`${text} ${MISDEMEANOURS_EMOJI_MAP.get(value)}`}
              punishmentIdea={`https://picsum.photos/seed/${punishmentIdeaSeed}`}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default MisdemeanoursTable;
