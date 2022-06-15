import React from 'react';
import About from '../../components/About/About';
import Contacts from '../../components/Contacts/Contacts';
import Container from '../../components/Container/Container';
import Price from '../../components/Price/Price';
import Tagline from '../../components/Tagline/Tagline';
import Work from '../../components/Work/Work';
import Navbar from '../../components/Navbar/Navbar';
import Promo from '../../components/Promo/Promo';
import { observer } from 'mobx-react-lite';

const Desktop = observer(() =>{
    return(
        <Container>
            <Navbar />
            <Tagline />
            <Promo />
            <Work />
            <Price />
            <About />
            <Contacts />
        </Container>
    )
})

export default Desktop