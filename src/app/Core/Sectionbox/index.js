import React from 'react';
import styles from './Sectionbox.module.css'

const Sectionbox = ({children}) => {
    return (
        <div className={styles.container_box}>
            {children}
        </div>
    );
};

export default Sectionbox;