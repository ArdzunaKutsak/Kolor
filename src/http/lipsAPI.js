import {$host } from './index'

export const createLips = async (link) => {
    const {data} = await $host.post('api/lips', link)
    return data
} 

export const fetchLips = async () => {
    const {data} = await $host.get('api/lips')
    return data
} 
export const deleteLips = async (id) => {
    await $host.delete(`api/lips/${id}`)
} 
