import React, { createContext } from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Promo from './components/Promo/Promo';
import Slider from './components/Slider/Slider';
import Tagline from './components/Tagline/Tagline';
import './main.css'
import Work from './components/Work/Work';
import Contacts from './components/Contacts/Contacts';
import Sizing from './handlers/Sizing';
import Price from './components/Price/Price';
import About from './components/About/About';
import { Admin } from './admin/admin';
import Tablet from './media/Tablet/Tablet';
import Usual from './media/Desktop/Desktop';
import Screen from './media/Screen';
import { observer } from 'mobx-react-lite';

export const AdminContext = createContext(null)

const App = observer(() => {
  
  return (
    <AdminContext.Provider value={{
      admin: new Admin()
    }}>
      <Screen />
    </AdminContext.Provider>
   
  );
})

export default App;
