import React from 'react';
import About from '../../components/About/About';
import Contacts from '../../components/Contacts/Contacts';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Price from '../../components/Price/Price';
import Slider from '../../components/Slider/Slider';
import Work from '../../components/Work/Work';
import styles from './tablet.module.css'
import { observer } from 'mobx-react-lite';

const Tablet = observer(() =>{
    return(
        <Container>
            <Header />
            <Slider />
            <Work />
            <div className={styles.container}>
                <div className={styles.container2}>
                    <About />
                    <Contacts />
                </div>
                <div className={styles.container3}>
                <Price />
                </div>
            </div>
        </Container>
    )
})

export default Tablet