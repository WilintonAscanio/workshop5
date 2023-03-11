import axios from "axios";

export const getPizza = async (name) => {
  try {
    const URL = 'http://localhost:3001/pizzas'

<<<<<<< Updated upstream
    const { data } = await axios.get(`${URL}/?name=${name}`)
=======
    const { data } = await axios.get(`${URL}/?id=${id}`)
>>>>>>> Stashed changes
    return data
    
  } catch (error) {
    console.log(error);
    return error
    
  }
}