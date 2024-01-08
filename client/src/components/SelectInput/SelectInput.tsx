import classnames from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface SelectOption {
  value: string;
  text: string;
}

interface SelectInputProps {
  className?: string;
  label: string;
  isHiddenLabel?: boolean;
  name: string;
  id: string;
  placeholder?: string;
  defaultValue?: string;
  options: Array<SelectOption>;
  value: string;
  onChange: (id: string, value: string) => void;
  onBlur: (id: string) => void;
  validationErrors: string[];
}

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const {
    className,
    label,
    isHiddenLabel = false,
    name,
    id,
    placeholder,
    defaultValue,
    options,
    onChange,
    onBlur,
    validationErrors,
  } = props;
  return (
    <div
      className={classnames(
        "select-input",
        { "select-input--error": validationErrors?.length },
        className
      )}
    >
      <label>
        {label && (
          <span className={classnames({ "visually-hidden": isHiddenLabel })}>
            {label}
          </span>
        )}
        <select
          name={name}
          id={id}
          onChange={(e) => onChange(e.target.id, e.target.value)}
          defaultValue={defaultValue}
          onBlur={(e) => onBlur(e.target.id)}
        >
          <option value="" disabled hidden>
            {placeholder ?? "--Please choose an option--"}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {validationErrors && validationErrors.length > 0 && (
          <ErrorMessage messages={validationErrors} />
        )}
      </label>
    </div>
  );
};

export default SelectInput;
