import axios from "axios";

export const getUsers = async () => {
  try {
    
    const URL = "https://back-workshop5-production.up.railway.app/usuarios";
    const { data } = await axios.get(URL);
    return data;

  } catch (error) {
    console.log(error);
    return error;
  }
};
