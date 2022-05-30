import { API } from './index';

const PREFIX_URL = '/posts';

export const postUploadMeme = async (body) => {
  try {
    const { data } = await API.post(`${PREFIX_URL}`, {
      type: `${body.type}`,
      category: `${body.category}`,
      title: `${body.title}`,
      description: `${body.description}`,
      example: `${body.example}`,
      keyw: `${body.keyw}`,
    });
    return { data };
  } catch (err) {
    return null;
  }
};
