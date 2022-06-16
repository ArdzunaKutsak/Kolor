import React from "react";
import styles from './contacts.module.css'
import vkIcon from '../../assests/vkIcon.svg'
import instaIcon from '../../assests/instaIcon.svg'
import waIcon from '../../assests/waIcon.svg'
import drawIcon from '../../assests/draw-logo.svg'
import Sizing from '../../handlers/Sizing'
import {observer} from 'mobx-react-lite'

const Contacts = () => {
    const desktop = Sizing()
    return (
        <div id='contacts' className={styles.container}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.infoContainer}>
                <h2 className={styles.workplace}>Места работы</h2>
                <div className={styles.info}>
                    <a 
                        href="https://yandex.ru/maps/org/roy_tattoo/192286265060/?ll=30.358105%2C59.920803&z=16.33" 
                        className={styles.adress}
                        >ROY TATTOO
                    </a>
                    <a href="" className={styles.adress}>CO-WORKING</a>
                </div>
            </div>
            <div className={styles.social}>
                <a className={styles.socialItem} href="https://vk.com/innamixton"><img className={styles.icon} src={vkIcon} /></a>
                <a className={styles.socialItem} href="https://www.instagram.com/inna_tattoo"><img className={styles.icon} src={instaIcon} /></a>
                <a className={styles.socialItem} href="https://drawinks.ru/masters/innakolor"><img className={styles.icon} src={drawIcon} /></a>
                {desktop && <a href="tel:+79817047769" className={styles.wa}><img className={styles.icon} src={waIcon} /> 8 981 704 77 69</a>}
            </div>
            {!desktop && <a href="tel:+79817047769" className={styles.wa}><img className={styles.icon} src={waIcon} /> 8 981 704 77 69</a>}     
        </div>
    )
}

export default Contacts;