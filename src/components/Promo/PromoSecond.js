
import React, { useState } from "react"
import {Accordion} from 'react-bootstrap'
import styles from './promo.module.css'
import Sizing from '../../handlers/Sizing'

const PromoSecond = ({title, img, body}) => {
    const [bright, setBright] = useState(1)
    function toggleBright() {
        if(Sizing())
        {if(bright === 1) {setBright(0.2)}
        else(setBright(1))}
    }
    return (
            <div className={styles.item}>
                <h2 className={styles.secondTitle}>{title}</h2>
                <img className={styles.img} src={img} style={{ filter:`brightness(${bright})`}} />
                <div>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={toggleBright} as='button'>Подробнее</Accordion.Header>
                        <Accordion.Body>
                            <div className={styles.body}>
                                {body.map((b,i)=><div key={i}>{b}</div>)}
                                
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
            </div>
       

    )
}

export default PromoSecond;