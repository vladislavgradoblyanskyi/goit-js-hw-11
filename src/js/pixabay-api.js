import axios from 'axios';

const api = 'https://pixabay.com/api/';
const api_key = '54662429-d0583973866d02e67b13f9c1b';

export function getImagesByQuery(query) {
  const params = {
    key: api_key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(api, { params })
    .then((res) =>{
      return res.data;
    })
    .catch(() => {
      throw new Error();
    });
}
