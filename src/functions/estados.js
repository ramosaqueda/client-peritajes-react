import axios from "axios";

export const getEstados = async () =>
  await axios.get(`${process.env.REACT_APP_API}/estados`);

export const getEstado = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/readeestaod/${_id}`);

export const removeEstado = async (_id, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/removeestado/${_id}`, {
    headers: {
      authtoken,
    },
  });
 
export const createEstado = async (Estado,  authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/estado`, Estado, {
    headers: {
      authtoken,
    },
  });
 