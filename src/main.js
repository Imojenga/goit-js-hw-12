import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import axios from 'axios';
import { createGalleryCard } from './js/render-functions';
import { fetchByQuery } from './js/pixabay-api';

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

loaderEl.style.display = 'none';

const onSearchFormSubmit = event => {
  event.preventDefault();
  galleryEl.innerHTML = '';
  loaderEl.style.display = 'block';

  const userQuery = event.currentTarget.elements.user_query.value.trim();

  if (!userQuery) {
    event.currentTarget.elements.user_query.value = '';
    loaderEl.style.display = 'none';
    return;
  }

  fetchByQuery(userQuery)
    .then(data => {
      loaderEl.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching</br> your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',
          messageLineHeight: '24px',
          backgroundColor: '#ef4040',
          theme: 'dark',
          position: 'topRight',
          progressBarColor: '#b51b1b',
        });

        formEl.reset();
        return;
      }

      const createGallery = data.hits
        .map(image => createGalleryCard(image))
        .join('');

      galleryEl.innerHTML = createGallery;

      const modalWindow = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
      });

      modalWindow.refresh();
    })
    .catch(error => {
      loaderEl.style.display = 'none';
      console.log(error);
    });
};

formEl.addEventListener('submit', onSearchFormSubmit);
