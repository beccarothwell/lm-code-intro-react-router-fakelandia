import MisdemeanoursTableFilter from "../MisdemeanoursTableFilter/MisdemeanoursTableFilter";
import "./MisdemeanoursTableHeader.scss";
import { MisdemeanourTableFilterOption } from "../MisdemeanoursTableFilter/MisdemeanoursTableFilter";

export interface MisdeameanoursColumnHead {
  key: string;
  title: string;
  filters?: Array<MisdemeanourTableFilterOption>;
}

interface MisdeameanoursTableHeaderProps {
  columnHeads: MisdeameanoursColumnHead[];
  handleFilter?: (value: string) => void;
}

const MisdeameanoursTableHeader: React.FC<MisdeameanoursTableHeaderProps> = ({
  columnHeads,
  handleFilter,
}) => (
  <thead className="misdemeanour-table__header">
    {handleFilter && (
      <tr className="misdemeanour-table__header-row misdemeanour-table__header-filters">
        {columnHeads.map(({ filters, title, key }) => {
          if (!filters) {
            return <th key={key}></th>;
          }
          return (
            <th key={key} className="misdemeanour-table__header-cell">
              <MisdemeanoursTableFilter
                label={`Filter by ${title}`}
                name={key}
                id={key}
                placeholder={`Filter by ${title}`}
                options={filters}
                onChange={handleFilter}
              />
            </th>
          );
        })}
      </tr>
    )}
    <tr className="misdemeanour-table__header-row misdemeanour-table__header-titles">
      {columnHeads.map(({ title, key }) => {
        return (
          <th key={key} className="misdemeanour-table__header-cell">
            {title}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default MisdeameanoursTableHeader;
