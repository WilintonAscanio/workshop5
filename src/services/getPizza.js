import axios from "axios";

export const getPizza = async (id) => {
  try {
    const URL = 'https://back-workshop5-production.up.railway.app/pizzas'

    const { data } = await axios.get(`${URL}/?id=${id}`)
    return data
    
  } catch (error) {
    console.log(error);
    return error
    
  }
}