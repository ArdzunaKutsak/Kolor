import React, { useState } from 'react';
import styles from './addcard.module.css'
import addPhoto from '../../handlers/addPhoto';
import { observer } from 'mobx-react-lite';
const AddCard = ({createWhat}) => {
    const [link, setLink] = useState('')
    const add = () => addPhoto(link, setLink, createWhat)
   
    return (
        <div className={styles.container}>
            <input value={link} onChange={(e)=>setLink(e.target.value)} className={styles.input}/>  
            <button onClick={add} className={styles.button}>Добавить ссылку на фото</button> 
        </div>  
    )
}


export default AddCard