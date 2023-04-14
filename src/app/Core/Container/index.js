import React from 'react';
import styles from './Container.module.css'

const Container = ({children}) => {
    return (
        <div className={styles.container}>
           <div className='item-flex'>
           {
            children
           }
           </div>
        </div>
    );
};

export default Container;