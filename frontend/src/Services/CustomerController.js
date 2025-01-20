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
}

export default customerController