import {$host} from './index'

export const createTattoo = async (link) => {
    const {data} = await $host.post('api/tattoo', link)
    return data
} 

export const fetchTattoo = async () => {
    const {data} = await $host.get('api/tattoo')
    return data
} 
