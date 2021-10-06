import axios from "axios";

export const getFiscales = async () =>
  await axios.get(`${process.env.REACT_APP_API}/fiscales`);

export const getFiscal = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/readfiscal/${_id}`);

export const removeFiscal = async (_id, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/removefiscal/${_id}`, {
    headers: {
      authtoken,
    },
  });
/*
export const updateFiscal = async (slug, Fiscal, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/Fiscal/${slug}`, Fiscal, {
    headers: {
      authtoken,
    },
  });
*/
export const createFiscal = async (Fiscal,  authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/Fiscal`, Fiscal, {
    headers: {
      authtoken,
    },
  });

 /* export const getFiscalSubs = async (_id) =>
    await axios.get(`${process.env.REACT_APP_API}/Fiscal/subs/${_id}`);*/