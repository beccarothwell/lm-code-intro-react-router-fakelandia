import "./MisdemeanoursTable.scss";
import MisdemeanoursTableHeader from "../MisdemeanoursTableHeader/MisdemeanoursTableHeader";
import MisdemeanoursTableRow from "../MisdemeanoursTableRow/MisdemeanoursTableRow";
import { useMemo, useState } from "react";
import { MisdeameanoursColumnHead } from "../MisdemeanoursTableHeader/MisdemeanoursTableHeader";
import { MisdemeanourTableFilterOption } from "../MisdemeanoursTableFilter/MisdemeanoursTableFilter";

interface MisdemeanoursTableProps {
  headerData: MisdeameanoursColumnHead[];
  bodyData: {
    citizenId: number;
    date: string;
    misdemeanour: MisdemeanourTableFilterOption;
  }[];
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
              misdemeanour={text}
              punishmentIdea={`https://picsum.photos/seed/${punishmentIdeaSeed}/200`}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default MisdemeanoursTable;
