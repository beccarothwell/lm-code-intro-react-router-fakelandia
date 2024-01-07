import classnames from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export interface TextInputProps {
  className?: string;
  label: string;
  isHiddenLabel?: boolean;
  type: "text" | "textarea";
  name: string;
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  onBlur: (id: string) => void;
  validationErrors: string[];
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    className,
    label,
    isHiddenLabel = false,
    type,
    name,
    id,
    value,
    onChange,
    onBlur,
    validationErrors,
  } = props;

  return (
    <div
      className={classnames(
        "text-input",
        { "text-input--error": validationErrors?.length },
        className
      )}
    >
      <label className="text-input__label">
        {label && (
          <span className={classnames({ "visually-hidden": isHiddenLabel })}>
            {label}
          </span>
        )}
        {type === "text" && (
          <input
            className="text-input__field"
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.id, e.target.value)}
            onBlur={(e) => onBlur(e.target.id)}
          />
        )}
        {type === "textarea" && (
          <textarea
            className="text-input__field"
            name={name}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.id, e.target.value)}
            onBlur={(e) => onBlur(e.target.id)}
          />
        )}
        {validationErrors && validationErrors.length > 0 && (
          <ErrorMessage
            className={"text-input__error"}
            messages={validationErrors}
          />
        )}
      </label>
    </div>
  );
};
