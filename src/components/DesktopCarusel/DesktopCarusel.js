import React from "react";
import styles from './desktopcarusel.module.css'
import Carousel from 'react-bootstrap/Carousel'
import briliant from '../../assests/briliant.svg'
import circul from '../../assests/circul.svg'
import laurel from '../../assests/laurel.svg'
import Contacts from "../Contacts/Contacts";
import { observer } from "mobx-react-lite";


const DesktopCarusel = () => {
    return (
        <div style={{width: 1000, height:800, position: "absolute", top: 100}}>
            <Carousel fade>
                <Carousel.Item>
                   <Contacts />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <h3>Уникальность</h3>
                        <p>Разработка эскизов под каждого клиента</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Опыт</h3>
                        <p>Сотни выполненных работ и довольных клиентов</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default DesktopCarusel;