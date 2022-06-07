import { API } from './index';

const PREFIX_URL = '/mypage';

export const getMyPageUpload = async (token, params) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/posts?type=${params.type}`,
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );
    return { data };
  } catch (err) {
    return null;
  }
};

export const getMyPageComment = async (token) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/comment`,
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );
    return { data };
  } catch (err) {
    return null;
  }
};
