import styles from "./Button.module.scss";

import type React from "react";

interface IProps {
    type?: string;
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ type, children, onClick, ...props }: IProps) => (
    <button className={`${styles.button} ${type && styles[type]}`} {...props} onClick={onClick}>
        {children}
    </button>
);
