import axios from "axios";

export const getPizza = async (name) => {
  try {
    const URL = 'https://back-workshop5-production.up.railway.app/pizzas'

    const { data } = await axios.get(`${URL}/?name=${name}`)
    return data
    
  } catch (error) {
    console.log(error);
    return error
    
  }
}