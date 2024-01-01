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
      <tr>
        {columnHeads.map(({ filters, title, key }) => {
          if (!filters) {
            return <th key={key}></th>;
          }
          return (
            <th key={key}>
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
    <tr>
      {columnHeads.map(({ title, key }) => {
        return <th key={key}>{title}</th>;
      })}
    </tr>
  </thead>
);

export default MisdeameanoursTableHeader;
