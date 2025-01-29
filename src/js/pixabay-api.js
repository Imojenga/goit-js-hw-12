import axios from 'axios';

export const fetchByQuery = (userQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: '48469093-05e82502d9118a70767c30ea2',
      q: userQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  };

  return axios.get('https://pixabay.com/api/', axiosOptions);
};
