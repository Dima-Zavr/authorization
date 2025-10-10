import styles from "./Input.module.scss";

interface IProps {
    type: React.HTMLInputTypeAttribute;
    id?: string;
    name?: string;
    placeholder: string;
    value: string;
    error: string | null;
    onChange: (value: string) => void;
}
export const Input = ({ type = "text", id, name, placeholder, value, error, onChange, ...props }: IProps) => (
    <div>
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
        {error && <span className={styles.error}>{error}</span>}
    </div>
);
