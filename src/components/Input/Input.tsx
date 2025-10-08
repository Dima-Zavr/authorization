import styles from "./Input.module.scss";

export const Input = ({ ...props }) => (
    <input {...props} className={styles.input} />
);
