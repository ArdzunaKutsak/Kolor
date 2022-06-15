import React, { useEffect, useState } from "react";
import styles from './work.module.css'
// import TatooModal from "../Modals/TatooModal/TatooModal";
// import {Image} from 'react-bootstrap'
// import tatooArray from '../../photoArray/tatooArray'
// import permanentArray from '../../photoArray/permanentArray'
// import lipsArray from '../../photoArray/lipsArray'
import tatooMachine from '../../assests/tatoo-machine.svg'
import inject from '../../assests/inject.svg'
import brows from '../../assests/brows.svg'
import MyModal from "../Modals/MyModal/MyModal";
import { fetchTattoo } from "../../http/tattooAPI";
import { fetchPermanent } from "../../http/permanentAPI";
import { fetchLips } from "../../http/lipsAPI";

const Work = ( ) => {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [array, setArray] = useState([])
   // сделать свой хук
   const [tattooArr, setTattooArr] = useState([])
   const [permanentArr, setPermanentArr] = useState([])
   const [lipsArr, setLipsArr] = useState([])
   const [createWhat, setCreateWhat] = useState(null)
   useEffect(()=>{
      fetchTattoo().then(res=> {setTattooArr(res)})
      fetchPermanent().then(res=> {setPermanentArr(res)})
      fetchLips().then(res=> {setLipsArr(res)})
   },[])


   const showModal = (array,what) => {
      setIsModalOpen(true)
      setArray(array)
      setCreateWhat(what)
   }

    return (
        <div id='work' className={styles.container}>
           <button onClick={()=>showModal(tattooArr, 'tattoo')} className={styles.item}>
              <img className={styles.itemIcon} src={tatooMachine} />
              <div className={styles.itemText}>Татуировки</div> 
           </button>
           <button onClick={()=>showModal(permanentArr, 'permanent')} className={styles.item}>
              <img className={styles.itemIcon} src={brows} />
              <div className={styles.itemText}>Перманент</div> 
           </button>
           <button onClick={()=>showModal(lipsArr, 'lips')} className={styles.item}>
              <img className={styles.itemIcon} src={inject} />
              <div className={styles.itemText}>Губы</div> 
           </button>
           <MyModal createWhat={createWhat} array={array} show={isModalOpen} onHide={()=>setIsModalOpen(false)}/>
        </div>

    )
}

export default Work;