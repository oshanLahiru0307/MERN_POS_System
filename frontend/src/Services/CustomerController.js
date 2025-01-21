import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api/customer'

class customerController{

    static async getAllCustomer(){
        try{
            const response = await axios.get(BASE_URL)
            return response.data
        }catch(error){
            console.error("Error while fetching teachers:", error);
            throw error;
        }
    }

    static async addNewCustomer(values){
        try{
            const response = await axios.post(BASE_URL, values)
            console.log('successfuly added new cutomer',values)
            return response.data
        }catch(error){
            console.log('error adding data',error)
            throw error
        }
    }

    static async deleteCustomer(id){
        try{
            const response = await axios.delete(`${BASE_URL}/${id}`)
            return response.data
        }catch(error){
            console.log('error deleting data',error)
            throw error
        }
    }

    static async editCustomer(id, values){
        try{
            const response = await axios.patch(`${BASE_URL}/${id}`, values)
            return response.data
        }catch(error){
            console.log('error updating data', error)
            throw error
        }
    }
}

export default customerController