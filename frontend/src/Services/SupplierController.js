import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api/supliers'

class SupplierController{

    static async getSuppliers(){
        try{
            const response = await axios.get(BASE_URL)
            return response.data
        }catch(error){
            console.log('error getting data', error)
            throw error
        }
    }

    static async addSupplier(values){
        try{
            const response = await axios.post(BASE_URL, values)
            return response.data
        }catch(error){
            console.log('error adding data', error)
            throw error
        }
    }

    static async deleteSupplier(supplierId){
        try{
            const response = await axios.delete(`${BASE_URL}/${supplierId}`)
            return response.data
        }catch(error){
            console.log('error deleting data', error)
            throw error
        }
    }

    static async updateSupplier(supplierId, values){
        try{
            const response = await axios.patch(`${BASE_URL}/${supplierId}`, values)
            return response.data
        }catch(error){
            console.log('error updating data', error)
            throw error
        }
    }
}

export default SupplierController