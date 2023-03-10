import axios from "axios";

export const getUsers = async () => {
  try {
    
    const URL = "http://localhost:3001/usuarios";
    const { data } = await axios.get(URL);
    return data;

  } catch (error) {
    console.log(error);
    return error;
  }
};
