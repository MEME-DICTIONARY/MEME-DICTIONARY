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
}