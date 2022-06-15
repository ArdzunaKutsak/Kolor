import React, { useEffect, useState } from "react";
import styles from './tagline.module.css'
import { Parallax, Background } from 'react-parallax';

const Tagline = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
    <div id='tagline' className={styles.container}>
        <div className={styles.front} style={{transform:`translateY(${offsetY * 0.1}px) translateX(${offsetY * 0.05}px)`}}>Искусство на вашем теле</div>
        <div className={styles.back} style={{transform:`translateY(${-offsetY * 0.1}px) translateX(${-offsetY * 0.05}px)`}}>Искусство</div>
    </div>
    )
}

export default Tagline;