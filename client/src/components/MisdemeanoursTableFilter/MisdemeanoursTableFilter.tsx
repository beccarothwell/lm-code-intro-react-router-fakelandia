import { MisdemeanourTableFilterOption } from "../MisdemeanoursTable/MisdemeanoursTable.types";
import "./MisdemeanoursTableFilter.scss";

interface MisdemeanoursTableFilterProps {
  defaultValue?: string;
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  options: Array<MisdemeanourTableFilterOption>;
  onChange: (value: string) => void;
}

const MisdemeanoursTableFilter: React.FC<MisdemeanoursTableFilterProps> = ({
  label,
  name,
  id,
  placeholder,
  options,
  onChange,
}) => (
  <label>
    <span className="visually-hidden">{`${label}: `}</span>
    <select
      className="misdemeanour-table__filter"
      name={name}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={""}
    >
      <option
        className="misdemeanour-table__filter-option"
        value=""
        disabled
        hidden
      >
        {placeholder ?? "--Please choose an option--"}
      </option>
      <option className="misdemeanour-table__filter-option" value="">
        All Misdemeanours
      </option>
      {options.map((option, i) => (
        <option
          className="misdemeanour-table__filter-option"
          key={i}
          value={option.value}
        >
          {option.text}
        </option>
      ))}
    </select>
  </label>
);

export default MisdemeanoursTableFilter;
