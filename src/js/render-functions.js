export const createGalleryCard = imgInfo => {
  return `<li class="gallery-item">
    <a class="gallery-link" href="${imgInfo.largeImageURL}">
      <img
        class="gallery-img"
        src="${imgInfo.webformatURL}"
        alt="${imgInfo.tags}"
      />
    </a>
    <ul class="gallery-list">
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Likes</p>
        <p class="gallery-list-text">${imgInfo.likes}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Views</p>
        <p class="gallery-list-text">${imgInfo.views}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Comments</p>
        <p class="gallery-list-text">${imgInfo.comments}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Downloads</p>
        <p class="gallery-list-text">${imgInfo.downloads}</p>
      </li>
    </ul>
  </li>`;
};
