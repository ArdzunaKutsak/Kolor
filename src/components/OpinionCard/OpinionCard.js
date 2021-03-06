import React, { useContext } from 'react';
import styles from './opinioncard.module.css'
import {observer} from 'mobx-react-lite'
import { AdminContext } from '../../App';
import { deleteOpinion } from '../../http/opinionAPI';

const OpinionCard = ({props}) => {
    const {admin} = useContext(AdminContext)
    const year = new Date(props.createdAt).getFullYear()
    const month = new Date(props.createdAt).getMonth() + 1
    const day = new Date(props.createdAt).getDate()
    const date = day + "." + month + "." + year
    const del = () => {
        console.log('del')
        deleteOpinion(props.id)
    }
    return ( 
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.text}>
                {props.text}
                </div>
                <img  className={styles.picture} src={'http://localhost:5000/' + props.picture} />
            </div>
            {admin.login && <button className={styles.deleteBtn} onClick={del}>Удалить пост</button>}
        </div>
     );
}

export default OpinionCard;