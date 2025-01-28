export const fetchByQuery = userQuery => {
  const searchParams = new URLSearchParams({
    key: '48469093-05e82502d9118a70767c30ea2',
    q: `${userQuery}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
