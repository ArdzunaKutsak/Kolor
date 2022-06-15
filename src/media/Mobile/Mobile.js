import React from 'react';
import About from '../../components/About/About';
import Contacts from '../../components/Contacts/Contacts';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Price from '../../components/Price/Price';
import Slider from '../../components/Slider/Slider';
import Tagline from '../../components/Tagline/Tagline';
import Work from '../../components/Work/Work';
import Navbar from '../../components/Navbar/Navbar';
import Promo from '../../components/Promo/Promo';
import { observer } from 'mobx-react-lite';

const Mobile = observer(() =>{
    return(
        <Container>
            <Navbar />
            <Header/>
            <Tagline />
            <Slider />
            <Promo />
            <Work />
            <Price />
            <About />
            <Contacts />
        </Container>
    )
})

export default Mobile