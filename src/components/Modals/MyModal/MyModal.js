import { observer } from "mobx-react-lite";
import React,{useContext, useState} from "react";
import Modal from 'react-bootstrap/Modal'
import { AdminContext } from "../../../App";
import { deleteLips } from "../../../http/lipsAPI";
import { deletePermanent } from "../../../http/permanentAPI";
import { deleteTattoo } from "../../../http/tattooAPI";
import AddCard from "../../AddCard/AddCard";
import styles from './mymodal.module.css'


const MyModal = ({show, onHide, array, createWhat}) => {
    const {admin} = useContext(AdminContext)
    const deletePhoto = (id) => {
      if(createWhat === 'tattoo'){deleteTattoo(id)}
      if(createWhat === 'lips'){deleteLips(id)}
      if(createWhat === 'permanent'){deletePermanent(id)}
      }
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
           <Modal.Header>
           {admin.login && <AddCard createWhat={createWhat}/>}
           </Modal.Header>
          <Modal.Body className={styles.body}>
        {array.slice(0).reverse().map(each =>   
            <div className={styles.wrapper}>
              <img 
                key={each.id}
                className={styles.img} 
                loading="lazy" 
                src={each.link}
                />
              {admin.login && <button key={each.id} onClick={()=>deletePhoto(each.id)} className={styles.deleteBtn}>Удалить</button>}
            </div>
            )}
      </Modal.Body>
    </Modal>

    )
  }

export default MyModal;