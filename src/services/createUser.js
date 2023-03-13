import axios from "axios";

export const createUser = async (user) => {
  try {
    const url = "http://localhost:3001/usuarios";
    const response = await axios.post(`${url}`, user);

  } catch (error) {
    console.log(error);
    return error;
  }
};
