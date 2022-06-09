import { API } from './index';

const PREFIX_URL = '/posts';

export const postUploadMeme = async (body, token) => {
  try {
    const { data } = await API.post(
      `${PREFIX_URL}`,
      body,
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );
    return { data };
  } catch (err) {
    return null;
  }
};
export const filterForbiddenWord = async(word) => {
  try{
    const { data } = await API.get(
      `/forbidden/exist?word=${word}`,
    );
    return { data };
  }catch(err){
    return null;
  }
}