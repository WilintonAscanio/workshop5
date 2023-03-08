import axios from "axios";

export const getPizza = async (name) => {
  try {
    const URL = 'http://localhost:3001/pizzas'

    const { data } = await axios.get(`${URL}/?name=${name}`)
    return data
    
  } catch (error) {
    console.log(error);
    return error
    
  }
}