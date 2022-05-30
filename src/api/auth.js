import {API} from './index';

const PREFIX_URL = '/auth';

export const postSignup = async (body) => {
  try{
    const { data } = await API.post(`${PREFIX_URL}/signup`, {
      email: `${body.email}`,
      password: `${body.password}`,
    });   
    return { data };
  }catch(err){
    return null;  
  }
}

export const postLogin = async (body) => {
  try{
    const { data } = await API.post(`${PREFIX_URL}/login`, {
      email: `${body.email}`,
      password: `${body.password}`,
    });
    return { data };
  }catch(err){
    return null;
  }
}