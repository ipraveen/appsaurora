import React from 'react';
import * as styles from './theme-text.module.css';

interface Props {
    children: React.ReactNode;
}

const ThemeText: React.FC<Props> = ({ children }) => {
    return <span className={styles.themeFont}>{children}</span>;
};

export default ThemeText;
