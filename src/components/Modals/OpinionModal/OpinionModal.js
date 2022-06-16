import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import OpinionCard from '../../OpinionCard/OpinionCard';
import styles from './opinionmodal.module.css'
import {Accordion} from 'react-bootstrap'
import OpinionForm from '../../OpinionForm/OpinionForm';
import { fetchOpinion } from "../../../http/opinionAPI";
import {observer} from 'mobx-react-lite';

const OpinionModal =  ({show, onHide}) => {
    const [opinions, setOpinions] = useState([])
    const [needRender, setNeedRender] = useState('')
    const [showForm, setShowForm] = useState(false)
    const toggleShow = () => {
      setShowForm(!showForm)
    }
    useEffect(() =>{
      fetchOpinion().then(data => setOpinions(data)).catch(e=>console.log(e))
    },[needRender])
    return ( 

        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered    
            >
      <Modal.Body>
        <div className={styles.container}>
          <div className={styles.wrapper}>
          <button 
            className={styles.btn}
            onClick={toggleShow}>Оставить отзыв</button>
          </div>
          {showForm && <OpinionForm callback={setNeedRender}/>}
          {opinions && opinions.map(opinion => <OpinionCard key={opinion.id} props={opinion} />)}
        </div>
      </Modal.Body>
        </Modal>
     );
}

export default OpinionModal;