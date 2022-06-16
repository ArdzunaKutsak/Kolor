import {$host} from './index'

export const createPermanent = async (link) => {
    const {data} = await $host.post('api/permanent', link)
    return data
} 

export const fetchPermanent = async () => {
    const {data} = await $host.get('api/permanent')
    return data
} 
export const deletePermanent = async (id) => {
    await $host.delete(`api/permanent/${id}`)
} 
