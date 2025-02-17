import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/inventory';

class InventoryController {

  static async getInventory() {
    try {
      // Axios automatically parses the response as JSON
      const response = await axios.get(BASE_URL);
      return response.data; // Access the parsed data directly
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error; // Re-throw the error for further handling
    }
  }

  static async addInventoryItem(values){
    try{
      const response = await axios.post(BASE_URL,values)
      return response.data
    }catch(error){
      console.log('error adding data', error)
      throw error
    }
  }

  static async editItem(id, value){
    try{
      const response = await axios.patch(`${BASE_URL}/${id}`,value)
      return response.data
    }catch(error){
      console.log('error updating data', error)
      throw error
    }
  }

  static async deleteItem(id){
    try{
      const response = await axios.delete(`${BASE_URL}/${id}`)
      return response.data
    }catch(error){
      console.log('error deleting data', error)
      throw error
    }
  }


}

export default InventoryController;
