import { API } from './index';

const PREFIX_URL = '/posts';

export const getAllPostsList = async () => {
  try {
    const { data } = await API.get(`${PREFIX_URL}/list/all`);
    return { data };
  } catch (err) {
    return null;
  }
};
