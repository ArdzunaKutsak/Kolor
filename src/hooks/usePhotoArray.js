import React, { useState, useEffect } from 'react';
import { fetchTattoo } from "../http/tattooAPI";
import { fetchPermanent } from "../http/permanentAPI";
import { fetchLips } from "../http/lipsAPI";

const usePhotoArray = () => {
    const [tattooArr, setTattooArr] = useState([])
    const [permanentArr, setPermanentArr] = useState([])
    const [lipsArr, setLipsArr] = useState([])
    useEffect(()=>{
        fetchTattoo().then(res=> {setTattooArr(res)})
        fetchPermanent().then(res=> {setPermanentArr(res)})
        fetchLips().then(res=> {setLipsArr(res)})
    },[])
    return {
        tattooArr,
        permanentArr,
        lipsArr,
    }
}

export default usePhotoArray