import axios from "axios";

export const getPizza = async (id) => {
  try {
    const URL = 'http://localhost:3001/pizzas'

    const { data } = await axios.get(`${URL}/?name=${id}`)
    return data
    
  } catch (error) {
    console.log(error);
    return error
    
  }
}