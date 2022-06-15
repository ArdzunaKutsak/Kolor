import React from 'react';
import styles from './myinput.module.css'

function MyInput({onChange, value, name, type, placeholder, required=false}) {
    return ( 
        <input value={value} onChange={onChange}  required={required} name={name} className={styles.input} type={type} placeholder={placeholder}/>
     );
}

export default MyInput;