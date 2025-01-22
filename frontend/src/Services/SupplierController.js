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
}

export default SupplierController