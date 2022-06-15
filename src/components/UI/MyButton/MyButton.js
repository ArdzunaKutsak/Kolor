import React from 'react';
import styles from './mybutton.module.css'

function MyButton({onClick}) {
    return ( 
        <button onClick={onClick} className={styles.submit}>Отправить</button>
     );
}

export default MyButton;