import React, { useContext, useEffect, useState } from "react";
import Sizing from "../../handlers/Sizing";
import styles from './menu.module.css'
import { observer } from "mobx-react-lite";

const Menu = ({click, offset}) => {
    const desktop = Sizing()
    
    return (
        <ul id='menu-ul' className={styles.container} style={{transform:`translateX(${offset})`}}>
            {/* <li className={styles.item}><a className={styles.link} onClick={click} href='#promo'>Услуги</a></li> */}
            <li className={styles.item}><a className={styles.link} onClick={click} href='#work'>Примеры работ</a></li> 
            <li className={styles.item}><a className={styles.link} onClick={click} href='#contacts'>Контакты</a></li>
            <li className={styles.item}><a className={styles.link} onClick={click} href='#price'>Цены</a></li>
            <li className={styles.item}><a className={styles.link} onClick={click} href='#about'>Обо мне</a></li>
            {!desktop && <li className={styles.item}><a className={styles.link} onClick={click} href='#info'>Отзывы</a></li>}
             
        </ul>

    )
}
export default Menu;