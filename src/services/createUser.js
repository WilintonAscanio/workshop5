import axios from "axios";

export const createUser = async (user) => {
  try {
    const url = "https://back-workshop5-production.up.railway.app/usuarios";
    const response = await axios.post(`${url}`, user);

  } catch (error) {
    console.log(error);
    return error;
  }
};
