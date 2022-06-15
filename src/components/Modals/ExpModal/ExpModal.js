import React from 'react';
import {Modal} from 'react-bootstrap'
import styles from './expmodal.module.css'

function ExpModal({show, onHide})
      {
        return (
          <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
          <Modal.Body>
                <div className={styles.body}>
                    Опыт работы – в тату студии с 2014 год, в салоне с 2015 года.
                    <br/>
                    Места работы: 'ROY TATTOO', 'SYNDROME', 'Литература', 'Real Ink'.
                    <br/>
                    Стили: Neo Traditional, графика, акварель.
                    <br/>
                    Частная практика.
                    <br/>
                    2017 и 2019 учавствовала в тату-фестивалях.
                </div>
          </Modal.Body>
        </Modal>
    
        )
      
}

export default ExpModal;