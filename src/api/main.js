import {API} from './index';


const PREFIX_URL = '/main';

export const getMemeRanking = async () => {
  try {
    const { data } = await API.get(
      `${PREFIX_URL}/ranking`
    );
    return { data };
  } catch (err) {
    return null;
  }
};