import { API } from './index';

const PREFIX_URL = '/posts';

export const postUploadMeme = async (body, token) => {
  try {
    const { data } = await API.post(
      `${PREFIX_URL}`,
      {
        type: `${body.type}`,
        category: `${body.category}`,
        title: `${body.title}`,
        description: `${body.description}`,
        example: `${body.example}`,
        keyw: `${body.keyw}`,
      },
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