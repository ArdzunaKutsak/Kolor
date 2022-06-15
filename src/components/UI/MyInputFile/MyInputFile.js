import React, { useEffect, useState } from 'react';
import styles from './myinputfile.module.css'
import {observer} from 'mobx-react-lite'
import Sizing from '../../../handlers/Sizing'
const MyInputFile =  observer(({ name, onChange, required=false}) => {
    const desktop = Sizing()
    let text = 'Фотография*';
    if(desktop){
        text = 'Загрузить фотографию*'
    }
    const [picName, setPicName] = useState('')
    const change = (event)=>{
        setPicName(event.target.files[0].name)
        onChange(event)
    } 
    return ( 
        <div className={styles.wrapper}>
            <input id='inputFile' onChange={change} className={styles.input} required={required} name={name} type='file'/>
            <label className={styles.label} for='inputFile'>
                {picName ? `${picName}` : text}
                <span className={styles.required}>{picName ? '' : 'обязательно'}</span>
            </label>
        </div>
     );
})

export default MyInputFile;