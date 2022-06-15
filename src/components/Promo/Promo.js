import React from "react";
import styles from './promo.module.css'
import hands from '../../assests/руки.jpg'
import lips from '../../assests/lipsPromo.webp'
import permanent from '../../assests/permanentPromo.webp'
import PromoSecond from "./PromoSecond.js";

const Promo = () => {
    const tatooBody = ['Индивидуальные эскизы', 'Качество', 'Большой опыт']
    const permanentBody = ['Держится 2-3 года', 'Точные контуры', 'Естесственная внешность']
    const lipsBody = ['Держится 2-3 года', 'Точные контуры', 'Обезболивание']
    return (
        <div id='promo' className={styles.container}>
            <h1 className={styles.title}>Услуги</h1>
            <PromoSecond title={'Татуировки'} img={hands} body={tatooBody}/>
            <PromoSecond title={'Перманент'} img={permanent} body={permanentBody}/>
            <PromoSecond title={'Увеличение губ'} img={lips} body={lipsBody}/>
        </div>
        // <div id='promo' className={styles.container}>
        //     <div className={styles.item}>
        //         <h2>Татуировки</h2>
        //         <img className={styles.img} src={hands} />
        //         <PromoTatoo />
        //     </div>
        //     <div className={styles.item}>
        //         <h2>Перманент</h2>
        //         <img className={styles.img} src={hands} />
        //         <PromoPermanent />
        //     </div>
        //     <div className={styles.item}>
        //         <h2>Увеличение губ</h2>
        //         <img className={styles.img} src={hands} />
        //         <PromoLips />
        //     </div>
        // </div>

    )
}

export default Promo;