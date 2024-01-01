export interface MisdemeanourTableFilterOption {
  value: string;
  text: string;
}

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
      name={name}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={""}
    >
      <option value="" disabled hidden>
        {placeholder ?? "--Please choose an option--"}
      </option>
      <option value="">All Misdemeanours</option>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </label>
);

export default MisdemeanoursTableFilter;
