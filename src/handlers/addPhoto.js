import axios from "axios"
import { createTattoo } from "../http/tattooAPI"
import { createPermanent } from "../http/permanentAPI"
import { createLips } from "../http/lipsAPI"


const addPhoto = (link, setLink, createWhat) => {
    if(createWhat === 'tattoo'){
        axios.get(link)
            .then(res=>createTattoo({link:link}))
            .catch(e=>alert('Ссылка на изображение не работает'))
    }
    if(createWhat === 'lips'){
        axios.get(link)
            .then(res=>createLips({link:link}))
            .catch(e=>alert('Ссылка на изображение не работает'))
       
    }
    if(createWhat === 'permanent'){
        axios.get(link)
            .then(res=>createPermanent({link:link}))
            .catch(e=>alert('Ссылка на изображение не работает'))
    }
    setLink('')
}

export default addPhoto;