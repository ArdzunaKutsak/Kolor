import {useEffect} from 'react'

const useScrollNav = (setOffset) => {
    useEffect(()=>{
        const container = document.querySelector('#navbar')
        const handleScroll = () => {
          
            if(window.pageYOffset >= 400){
               container.style.display = 'flex'
              
            }
            if(window.pageYOffset < 400){
                container.style.display = 'none'
                setOffset('300px')
            }}   
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)   
    }, [])
    
}


export default useScrollNav