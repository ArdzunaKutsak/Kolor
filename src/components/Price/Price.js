import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './price.module.css'


const Price = () => {
    return ( 
        <div id='price' className={styles.container}>
            <h1 className={styles.title}>Цены</h1>
            <ul className={styles.listContainer}>
                <li className={styles.item}>
                    <h2>Татуировки</h2>
                    <div className={styles.price}>от 5000</div>
                    <div className={styles.price}>1 сеанс (4 часа) - 10 000</div>
                    <div className={styles.price}>2 сеансa (8 часов) - 20 000</div>   
                </li>
                <li className={styles.item}>
                    <h2>Перманент</h2>
                    <div className={styles.price}>от 3000</div>
                    <div className={styles.price}>Брови - 6 000</div>
                    <div className={styles.price}>Губы - 6 000</div>
                </li>
                <li className={styles.item}>
                    <h2>Увеличение губ</h2>
                    <div className={styles.price}>Sardenya Deep с лидокаином 1,1 мл - 8 000</div>
                        
                </li>
            </ul>
        </div>
     );
}

export default Price;