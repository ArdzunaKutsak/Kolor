import React from 'react';
import styles from './mytextarea.module.css'

function MyTextArea({value, onChange, name, placeholder, required=false}) {
    return ( 
        <textarea value={value} onChange={onChange}  required={required} name={name} className={styles.textarea} placeholder={placeholder}/>
     );
}

export default MyTextArea;