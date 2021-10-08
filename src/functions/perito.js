import axios from "axios";

export const getPeritos = async () =>
  await axios.get(`${process.env.REACT_APP_API}/peritos`);

export const getPerito = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/readperito/${_id}`);

export const removePerito = async (_id, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/removeperito/${_id}`, {
    headers: {
      authtoken,
    },
  });

export const updatePerito = async (_id, Perito, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/perito/${_id}`, Perito, {
    headers: {
      authtoken,
    },
  });
 
export const createPerito = async (Perito,  authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/perito`, Perito, {
    headers: {
      authtoken,
    },
  });

 /* export const getFiscalSubs = async (_id) =>
    await axios.get(`${process.env.REACT_APP_API}/Fiscal/subs/${_id}`);*/