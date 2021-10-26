import axios from "axios";

export const createPeritajes = async (Peritajes,  authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/peritaje`, Peritajes, {
    headers: {
      authtoken,
    },
  });