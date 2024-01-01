import "./MisdemeanoursTableRow.scss";

interface MisdeameanoursRowProps {
  citizenId: number;
  date: string;
  misdemeanour: string;
  punishmentIdea: string;
}

const MisdeameanoursTableRow: React.FC<MisdeameanoursRowProps> = ({
  citizenId,
  date,
  misdemeanour,
  punishmentIdea,
}) => (
  <tr className="misdemeanour-table__row">
    <td data-label={"Citizen ID"}>{citizenId}</td>
    <td data-label={"Date"}>{date}</td>
    <td data-label={"Misdemeanour"}>{misdemeanour}</td>
    <td data-label={"Punishment Idea"}>
      <img src={punishmentIdea} />
    </td>
  </tr>
);

export default MisdeameanoursTableRow;
