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
  <tr className="misdemeanour-table__data-row">
    <td className="misdemeanour-table__data-cell" data-label={"Citizen ID"}>
      {citizenId}
    </td>
    <td className="misdemeanour-table__data-cell" data-label={"Date"}>
      {date}
    </td>
    <td className="misdemeanour-table__data-cell" data-label={"Misdemeanour"}>
      {misdemeanour}
    </td>
    <td
      className="misdemeanour-table__data-cell"
      data-label={"Punishment Idea"}
    >
      <picture>
        <source
          media="(max-width: 399.98px)"
          srcSet={`${punishmentIdea}/400/200`}
        />
        <source
          media="(max-width: 599.98px)"
          srcSet={`${punishmentIdea}/600/200`}
        />
        <source
          media="(max-width: 799.98px)"
          srcSet={`${punishmentIdea}/300/200`}
        />
        <source
          media="(min-width: 800px)"
          srcSet={`${punishmentIdea}/250/150`}
        />
        <img
          className="misdemeanour-table__data-img"
          src={`${punishmentIdea}/400`}
        />
      </picture>
    </td>
  </tr>
);

export default MisdeameanoursTableRow;
