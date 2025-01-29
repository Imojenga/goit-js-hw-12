import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCard } from './js/render-functions';
import { fetchByQuery } from './js/pixabay-api';

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more-btn');
const loaderEl = document.querySelector('.loader');

loaderEl.style.display = 'none';
let page = 1;
let userQuery = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    galleryEl.innerHTML = '';
    loaderEl.style.display = 'block';

    userQuery = event.currentTarget.elements.user_query.value.trim();

    if (!userQuery) {
      event.currentTarget.elements.user_query.value = '';
      loaderEl.style.display = 'none';
      return;
    }

    page = 1;
    loadMoreBtnEl.classList.add('is-hidden');

    const { data } = await fetchByQuery(userQuery, page);

    loaderEl.style.display = 'none';

    if (data.total === 0) {
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

    if (data.totalHits / data.hits.length > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

    if (data.totalHits === data.hits.length) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#000000',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#b0e0e6',
        theme: 'light',
        position: 'topRight',
        progressBarColor: '#5f9ea0',
      });
    }

    const createGallery = data.hits
      .map(image => createGalleryCard(image))
      .join('');

    galleryEl.innerHTML = createGallery;

    const modalWindow = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
    });

    modalWindow.refresh();
  } catch (error) {
    loaderEl.style.display = 'none';
    console.log(error);
  }
};

formEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;
    loaderEl.style.display = 'block';

    const { data } = await fetchByQuery(userQuery, page);

    loaderEl.style.display = 'none';

    const createGallery = data.hits
      .map(image => createGalleryCard(image))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', createGallery);

    if (page === Math.ceil(data.totalHits / data.hits.length)) {
      loadMoreBtnEl.classList.add('is-hidden');
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);

      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#000000',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#b0e0e6',
        theme: 'light',
        position: 'topRight',
        progressBarColor: '#5f9ea0',
      });
    }
  } catch (err) {
    loaderEl.style.display = 'none';
    console.log(err);
  }
};
