import styles from "./Button.module.scss";

import type React from "react";

interface IProps {
    children: React.ReactNode;
}

export const Button = ({ children, ...props }: IProps) => (
    <button className={styles.button} {...props}>
        {children}
    </button>
);
