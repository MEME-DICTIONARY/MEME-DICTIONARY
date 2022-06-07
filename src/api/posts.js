import { API } from './index';

const PREFIX_URL = '/posts';

export const getMemeWithCategory = async (params) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/list?type=${params.type}&category=${params.category}`
    );
    return { data };
  } catch (err) {
    return null;
  }
};
export const getMemeWithKeyWord = async (params) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/search?keyw=${params.keyword}&type=${params.type}`
    );
    return { data };
  } catch (err) {
    return null;
  }
};

export const getDetailContent = async (id) => {
  try {
    const { data } = await API.get(`${PREFIX_URL}/${id}`);
    return { data };
  } catch (err) {
    return null;
  }
};

export const postDetailLikes = async (id) => {
  try {
    const { data } = await API.post(`${PREFIX_URL}/${id}/likes`);

    return { data };
  } catch (err) {
    return null;
  }
};

export const postDetailComment = async (token, id, body) => {
  try {
    const { data } = await API.post(
      `${PREFIX_URL}/${id}/comments`,
      { content: `${body.content}` },
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );

    return { data };
  } catch (err) {
    return null;
  }
};

export const postDetailBookMark = async (id) => {
  try {
    const { data } = await API.post(`${PREFIX_URL}/${id}/bookmark`);
    return { data };
  } catch (err) {
    return null;
  }
};
