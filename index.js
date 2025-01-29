import{a as L,i as d,S as b}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&i(y)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const m=t=>`<li class="gallery-item">
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
  </li>`,g=(t,e)=>{const a={params:{key:"48469093-05e82502d9118a70767c30ea2",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return L.get("https://pixabay.com/api/",a)},h=document.querySelector(".search-form"),u=document.querySelector(".gallery"),o=document.querySelector(".load-more-btn"),l=document.querySelector(".loader");l.style.display="none";let n=1,c="",p;const v=async t=>{try{if(t.preventDefault(),u.innerHTML="",l.style.display="block",c=t.currentTarget.elements.user_query.value.trim(),!c){t.currentTarget.elements.user_query.value="",l.style.display="none";return}n=1,o.classList.add("is-hidden");const{data:e}=await g(c,n);if(l.style.display="none",e.total===0){d.error({message:"Sorry, there are no images matching</br> your search query. Please try again!",position:"topRight"}),h.reset();return}e.totalHits/e.hits.length>1&&(o.classList.remove("is-hidden"),o.addEventListener("click",f)),e.totalHits===e.hits.length&&d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const a=e.hits.map(i=>m(i)).join("");u.innerHTML=a,p=new b(".gallery a",{captionsData:"alt"}),p.refresh()}catch(e){l.style.display="none",console.log(e)}};h.addEventListener("submit",v);const f=async t=>{try{n++,l.style.display="block";const{data:e}=await g(c,n);l.style.display="none";const a=e.hits.map(i=>m(i)).join("");u.insertAdjacentHTML("beforeend",a),p.refresh(),n===Math.ceil(e.totalHits/e.hits.length)&&(o.classList.add("is-hidden"),o.removeEventListener("click",f),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){l.style.display="none",console.log(e)}};
//# sourceMappingURL=index.js.map
