import {$host } from './index'

export const createOpinion = async (opinion) => {
    const {data} = await $host.post('api/opinion', opinion)
    return data
} 

export const fetchOpinion = async () => {
    const {data} = await $host.get('api/opinion')
    return data
} 
