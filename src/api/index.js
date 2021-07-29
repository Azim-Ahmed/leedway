import axios from 'axios'
const url = 'https://leedway-backend.herokuapp.com/api'
// const url = 'http://localhost:8000/api'
export const postContact = (data) => axios.post(`${url}/contact/create`, data)
export const getAllContact = () => axios.get(`${url}/contact/getAllContacts`)
export const getAllAbout = () => axios.get(`${url}/about/getAllAbouts`)
export const getAllLand = () => axios.get(`${url}/land/getAllLands`)
export const getAllCommercial = () => axios.get(`${url}/commercial/getAllCommercials`)
export const getAllConstruction = () => axios.get(`${url}/construction/getAllConstructions`)
export const deleteContact = (id) => axios.delete(`${url}/contact/delete/${id}`)
export const updateConstruction = (id, data) => axios.patch(`${url}/construction/update/${id}`, data)
export const updateCommercial = (id, data) => axios.patch(`${url}/commercial/update/${id}`, data)
export const updateAbout = (id, data) => axios.patch(`${url}//about/update/${id}`, data)
export const updateLand = (id, data) => axios.patch(`${url}//land/update/${id}`, data)