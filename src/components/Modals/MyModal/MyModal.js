import { observer } from "mobx-react-lite";
import React,{useContext, useState} from "react";
import Modal from 'react-bootstrap/Modal'
import { AdminContext } from "../../../App";
import AddCard from "../../AddCard/AddCard";
import styles from './mymodal.module.css'


const MyModal = observer(({show, onHide, array, createWhat}) => {
    const {admin} = useContext(AdminContext)
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
      <Modal.Body>
        {admin.login && <AddCard createWhat={createWhat}/>}
        {array.slice(0).reverse().map(each => 
            <img 
              key={each.id}
              className={styles.img} 
              loading="lazy" 
              src={each.link}
              /> )}
      </Modal.Body>
    </Modal>

    )
  })

export default MyModal;