import axios from "axios";

export const getFiscaless = async () =>
  await axios.get(`${process.env.REACT_APP_API}/fiscales`);

export const getFiscal = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/Fiscal/${slug}`);

export const removeFiscal = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/Fiscal/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateFiscal = async (slug, Fiscal, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/Fiscal/${slug}`, Fiscal, {
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