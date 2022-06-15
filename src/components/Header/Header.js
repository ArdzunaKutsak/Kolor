import React from "react";
import styles from './header.module.css'
import hands from '../../assests/руки.jpg'
import logo from '../../assests/logo.svg'

const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.back} src={hands} />
            <img className={styles.logo} src={logo} />
        </div>

    )
}

export default Header;