import { API } from './index';

export const postUploadWordMeme = async (body, token) => {
  try {
    const { data } = await API.post('/posts', body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return { data };
  } catch (err) {
    return null;
  }
};
export const postUploadImageMeme = async (body, token) => {
  try {
    const { data } = await API.post('/image', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return { data };
  } catch (err) {
    return null;
  }
};
export const filterForbiddenWord = async (word) => {
  try {
    const { data } = await API.get(`/forbidden/exist?word=${word}`);
    return { data };
  } catch (err) {
    return null;
  }
};
