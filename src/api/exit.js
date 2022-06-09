import { API } from './index';
const PREFIX_URL = '';

export const postExit = async (token) => {
  try {
    const { data } = await API.post(
      `${PREFIX_URL}/exit`,
      (API.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    );
    return { data };
  } catch (err) {
    return null;
  }
};
