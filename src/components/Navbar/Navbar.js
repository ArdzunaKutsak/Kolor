import React, { useContext, useEffect, useState } from "react";
import styles from './navbar.module.css'
import burger from '../../assests/burger.svg'
import useScrollNav from "../hooks/useScrollNav";
import Menu from "../Menu/Menu";
import { observer } from "mobx-react-lite";
import Sizing from "../../handlers/Sizing";
import navClick from "../../handlers/navClick";
import initialOffsetMenu from "../../handlers/initialOffsetMenu";
import { AdminContext } from "../../App";


const Navbar = observer(() => {
    let {initialOffset, desktop} = initialOffsetMenu()
    const [offset, setOffset] = useState(initialOffset);
    useScrollNav(setOffset)
    const {admin} = useContext(AdminContext)
 
    return (
        <div id='navbar' className={styles.container}>
            <button 
                onClick={e=>navClick(e,admin, desktop, offset, setOffset)} 
                className={styles.btn}
                >
                <img 
                    className={styles.burger} 
                    src={burger} 
                    alt='menu'
                    />
            </button>
            <Menu 
                click={e=>navClick(e,admin, desktop, offset, setOffset)} 
                offset={offset}
                />
        </div>

    )
})

export default Navbar;