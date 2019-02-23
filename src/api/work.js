import http from "./http";


export const getWorkDetail = async () => {
  const res = await http.get('/work');
  return res.data;
};