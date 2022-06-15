import React, { useState } from 'react';
import ExpModal from '../Modals/ExpModal/ExpModal';
import OpinionModal from '../Modals/OpinionModal/OpinionModal';
import SertificateModal from '../Modals/SertifacateModal/SertificateModal';
import styles from './about.module.css'
function About() {
    const [sertificateIsOpen, setSertificateIsOpen] = useState(false)
    const [expIsOpen, setExpIsOpen] = useState(false)
    const [opinionIsOpen, setOpinionIsOpen] = useState(false)
    const openModal = (setWhat) => {
        setWhat(true)
    }
    return ( 
        <div id='about' className={styles.container}>
            <h1 className={styles.title}>Обо мне</h1>
            <div className={styles.info}>
            Если вы решились украсить свое тело тату, то первое, от чего зависит успех всего процесса - это выбор специалиста. На современном рынке услуг представлено множество различных техник, и каждый мастер, как правило, специализируется на своей. У меня на консультации вы сможете скорректировать эскиз и согласовать отдельные моменты предстоящей работы.
            Желаете иметь стойкий макияж при любых условиях? Благодаря перманентным пигментам это возможно. Мне известно, как подчеркнуть вашу естественную красоту, не прибегая к аппаратной косметологии. Перманент вводится аккуратно и точно так, что начинает выцветать лишь по прошествии 2-3 года. С помощью татуажа можно акцентировать идеально ровные стрелки, всегда аккуратные брови, а для ценителей всего необычного — яркие веснушки и томные родинки.
            </div>
            <div id='info' className={styles.dopInfo}>
                <div onClick={()=>{openModal(setSertificateIsOpen)}} className={styles.dopItem}>Сертификаты</div>
                <div onClick={()=>{openModal(setExpIsOpen)}} className={styles.dopItem}>Опыт работы</div>
                <div onClick={()=>{openModal(setOpinionIsOpen)}} className={styles.dopItem}>Отзывы</div>
            </div>
            <SertificateModal show={sertificateIsOpen} onHide={()=>{setSertificateIsOpen(false)}} />
            <ExpModal show={expIsOpen} onHide={()=>{setExpIsOpen(false)}}/>
            <OpinionModal show={opinionIsOpen} onHide={()=>{setOpinionIsOpen(false)}} />
        </div>
     );
}

export default About;