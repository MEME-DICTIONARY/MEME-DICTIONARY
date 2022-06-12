import { API } from './index';

const PREFIX_URL = '/posts';

export const getMemeWithType = async (type) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/list?type=${type}`
    );
    return { data };
  } catch (err) {
    return null;
  }
};
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
      `${PREFIX_URL}/${id}/comment`,
      { content: body },
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

export const postForbiddenWord = async (word) => {
  try {
    const { data } = await API.post('/forbidden', { word: word });
    return { data };
  } catch (err) {
    return null;
  }
};

export const postDetailReport = async (id) => {
  try {
    const { data } = await API.post(`${PREFIX_URL}/${id}/report`);
    return { data };
  } catch (err) {
    return null;
  }
};

export const postDelete = async (id, token) => {
  try {
    const { data } = await API.post(`${PREFIX_URL}/delete/${id}`);
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return { data };
  } catch (err) {
    return null;
  }
};
