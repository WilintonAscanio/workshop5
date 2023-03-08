import axios from "axios";

export const getPizzas = async () => {
  try {

    const URL = 'http://localhost:3001/pizzas'
    const { data } = await axios.get(URL)
    return data
    
  } catch (error) {
    console.log(error);
    return error
    
  }
}
getPizzas()