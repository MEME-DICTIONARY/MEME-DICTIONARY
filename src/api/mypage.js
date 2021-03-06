import { API } from './index';

const PREFIX_URL = '/mypage';

export const getMyPageUpload = async (params, token) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/posts?type=${params.type}&page=${params.page}`,
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );
    return { data };
  } catch (err) {
    return null;
  }
};

export const getMyPageBookmark = async (params, token) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/bookmark?type=${params.type}&page=${params.page}`,
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );
    return { data };
  } catch (err) {
    return null;
  }
};

export const getMyPageComment = async (params, token) => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/comment?page=${params.page}`,
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );
    return { data };
  } catch (err) {
    return null;
  }
};

export const postChangePassword = async (body) => {
  try {
    const { data } = await API.post(`${PREFIX_URL}/chage-pwd`, {
      oldPassword: body.oldPassword,
      newPassword: body.newPassword,
    });
    return { data };
  } catch (err) {
    return null;
  }
};
