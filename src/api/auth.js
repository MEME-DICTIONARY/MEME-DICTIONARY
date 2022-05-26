import {serverAxios} from './index';

const PREFIX_URL = '/auth';

export const postUserData = async (body) => {
  try{
    const { data } = await serverAxios.post(`${PREFIX_URL}/signup`, {
    });
    return { data };
  }catch(err){
    return null;
  }
}