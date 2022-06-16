import React from "react";
import styles from './header.module.css'
import back from '../../assests/header-back2.jpg'
import logo from '../../assests/logo.svg'
import { observer } from "mobx-react-lite";

const Header =() => {
    return (
        <div className={styles.container}>
            <img className={styles.back} src={back} />
            <img className={styles.logo} src={logo} />
        </div>

    )
}

export default Header;