import React from 'react';
import { Modal } from 'react-bootstrap';
import sertPermanent from '../../../assests/sertificat1.jpg'
import sertLips from '../../../assests/sertificat2.jpg'
import styles from './sertificatemodal.module.css'

function SertificateModal({show, onHide}) {
    return ( 

        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered    
            >
      <Modal.Body>
        <img className={styles.img} src={sertPermanent} />
        <img className={styles.img} src={sertLips} />
      </Modal.Body>
        </Modal>
     );
}

export default SertificateModal;