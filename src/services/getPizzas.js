import axios from "axios";

export const getPizzas = async () => {
  try {

    const URL = 'https://back-workshop5-production.up.railway.app/pizzas'
    const { data } = await axios.get(URL)
    return data
    
  } catch (error) {
    console.log(error);
    return error
    
  }
}
getPizzas()