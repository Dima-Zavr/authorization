import styles from "./Input.module.scss";

interface IProps {
    type: React.HTMLInputTypeAttribute;
    id?: string;
    name?: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}
export const Input = ({ type = "text", id, name, placeholder, value, onChange, ...props }: IProps) => (
    <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        {...props}
        className={styles.input}
        onChange={(event) => onChange(event.target.value)}
    />
);
