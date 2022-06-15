import React, { useState } from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyInputFile from '../UI/MyInputFile/MyInputFile';
import MyButton from '../UI/MyButton/MyButton';
import MyTextArea from '../UI/MyTextAria/MyTextAria';
import styles from './opinionform.module.css'
import CreateOpinion from '../../handlers/createOpinion';
import {observer} from 'mobx-react-lite'

const OpinionForm = observer(({callback}) => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [picture, setPicture] = useState(null)
    const send =(event)=>{
        event.preventDefault()
        CreateOpinion({name: name, text: text, picture: picture})
        callback(Date.now())
    }
    return ( 
        <form id='opinionForm' className={styles.container}>
            <div className={styles.wrapper}>
                <MyTextArea value={text} onChange={event=>setText(event.target.value)} required={true} name={'text'} placeholder={'Отзыв'} />
            </div>
            <div className={styles.wrapper}>
                <MyInput value={name} onChange={(event)=>setName(event.target.value)} required={true} name={'name'} placeholder={'Имя'} type={'text'}/>
            </div>
            <div className={styles.wrapper}>
                <MyInputFile onChange={(event)=>setPicture(event.target.files[0])} required={true} name={'picture'} />
            </div>
            <div className={styles.wrapper}>
                <MyButton onClick={send}/>
            </div>
            
        </form>
     );
})

export default OpinionForm;