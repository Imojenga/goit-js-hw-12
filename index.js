import{a as w,i as u,S as x}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function a(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=a(l);fetch(l.href,s)}})();const h=t=>`<li class="gallery-item">
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
  </li>`,f=(t,e)=>{const a={params:{key:"48469093-05e82502d9118a70767c30ea2",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return w.get("https://pixabay.com/api/",a)},L=document.querySelector(".search-form"),p=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn"),r=document.querySelector(".loader");r.style.display="none";let n=1,c="",m,g,d,b;const S=t=>{window.scrollBy({top:t,behavior:"smooth"})},q=async t=>{try{if(t.preventDefault(),p.innerHTML="",r.style.display="block",c=t.currentTarget.elements.user_query.value.trim(),!c){t.currentTarget.elements.user_query.value="",r.style.display="none";return}n=1,i.classList.add("is-hidden");const{data:e}=await f(c,n);if(r.style.display="none",e.total===0){u.error({message:"Sorry, there are no images matching</br> your search query. Please try again!",position:"topRight"}),L.reset();return}e.totalHits/e.hits.length>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",v)),e.totalHits===e.hits.length&&u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const a=e.hits.map(o=>h(o)).join("");p.innerHTML=a,m=new x(".gallery a",{captionsData:"alt"}),m.refresh(),g=document.querySelector(".gallery-item"),d=g.getBoundingClientRect(),b=(d.bottom-d.top)*2+48}catch(e){r.style.display="none",console.log(e)}};L.addEventListener("submit",q);const v=async t=>{try{n++,r.style.display="block";const{data:e}=await f(c,n);r.style.display="none";const a=e.hits.map(o=>h(o)).join("");p.insertAdjacentHTML("beforeend",a),m.refresh(),S(b),n===Math.ceil(e.totalHits/e.hits.length)&&(i.classList.add("is-hidden"),i.removeEventListener("click",v),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){r.style.display="none",console.log(e)}};
//# sourceMappingURL=index.js.map
