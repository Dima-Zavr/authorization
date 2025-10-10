import styles from "./PageLayout.module.scss";

import React from "react";

interface IProps {
    children: React.ReactNode;
    className?: string;
}
export function PageLayout({ children, className = "" }: IProps) {
    return (
        <div className={`${styles.page} ${className}`}>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
