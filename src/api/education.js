import http from "./http";


export const getEducationDetail = async () => {
  const res = await http.get('/education');
  return res.data;
};
