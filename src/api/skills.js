import http from './http';

export const getSkillsDetail = async () => {
  const res = await http.get('/skills');
  return res.data;
};

