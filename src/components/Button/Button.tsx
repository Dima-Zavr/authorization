import styles from "./Button.module.scss";

import type React from "react";

interface IProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick, ...props }: IProps) => (
    <button className={styles.button} {...props} onClick={onClick}>
        {children}
    </button>
);
