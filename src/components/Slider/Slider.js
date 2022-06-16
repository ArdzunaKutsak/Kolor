import React from "react";
import styles from './slider.module.css'
import Carousel from 'react-bootstrap/Carousel'
import briliant from '../../assests/briliant.svg'
import circul from '../../assests/circul.svg'
import laurel from '../../assests/laurel.svg'
import { observer } from "mobx-react-lite";


const Slider = () => {
    return (
        <div className={styles.slider}>
        <Carousel fade controls={false} indicators={false}>
            <Carousel.Item className={styles.container}>
                <img
                    className={styles.img}
                    src={circul}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className={styles.header}>Точность</h3>
                    <p className={styles.description}>Качественное оборудование для качественной отрисовки</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.container}>
                <img
                    className={styles.img}
                    src={briliant}
                    alt="Second slide"
                />

                <Carousel.Caption >
                    <h3 className={styles.header}>Уникальность</h3>
                    <p className={styles.description}>Разработка эскизов под каждого клиента</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.container}>
                <img
                    className={styles.img}
                    src={laurel}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className={styles.header}>Опыт</h3>
                    <p className={styles.description}>Сотни выполненных работ и довольных клиентов</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default Slider;