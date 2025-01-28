import{i as u,S as y}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const m=t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-img"
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>
    <ul class="gallery-list">
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Likes</p>
        <p class="gallery-list-text">${t.likes}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Views</p>
        <p class="gallery-list-text">${t.views}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Comments</p>
        <p class="gallery-list-text">${t.comments}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Downloads</p>
        <p class="gallery-list-text">${t.downloads}</p>
      </li>
    </ul>
  </li>`,p=t=>{const s=new URLSearchParams({key:"48469093-05e82502d9118a70767c30ea2",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})},c=document.querySelector(".search-form"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const d=t=>{t.preventDefault(),n.innerHTML="",a.style.display="block";const s=t.currentTarget.elements.user_query.value.trim();if(!s){t.currentTarget.elements.user_query.value="",a.style.display="none";return}p(s).then(l=>{if(a.style.display="none",l.hits.length===0){u.show({message:"Sorry, there are no images matching</br> your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#ef4040",theme:"dark",position:"topRight",progressBarColor:"#b51b1b"}),c.reset();return}const o=l.hits.map(r=>m(r)).join("");n.innerHTML=o,new y(".gallery a",{captionsData:"alt"}).refresh()}).catch(l=>{a.style.display="none",console.log(l)})};c.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
