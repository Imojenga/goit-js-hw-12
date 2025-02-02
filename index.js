import{a as w,i,S as x}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const h=t=>`<li class="gallery-item">
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
  </li>`,f=(t,e)=>{const a={params:{key:"48469093-05e82502d9118a70767c30ea2",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return w.get("https://pixabay.com/api/",a)},L=document.querySelector(".search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".load-more-btn"),l=document.querySelector(".loader");l.style.display="none";let n=1,y="",m,g,p,b;const S=t=>{window.scrollBy({top:t,behavior:"smooth"})},v=async t=>{try{if(t.preventDefault(),c.classList.add("is-hidden"),u.innerHTML="",n=1,l.style.display="block",y=t.currentTarget.elements.user_query.value.trim(),!y){t.currentTarget.elements.user_query.value="",l.style.display="none";return}const{data:e}=await f(y,n);if(l.style.display="none",e.total===0){i.error({message:"Sorry, there are no images matching</br> your search query. Please try again!",position:"topRight"}),L.reset();return}e.totalHits/e.hits.length>1&&(c.classList.remove("is-hidden"),c.addEventListener("click",q)),e.totalHits===e.hits.length&&i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const a=e.hits.map(o=>h(o)).join("");u.innerHTML=a,m=new x(".gallery a",{captionsData:"alt"}),m.refresh(),g=document.querySelector(".gallery-item"),p=g.getBoundingClientRect(),b=(p.bottom-p.top)*2+48}catch(e){l.style.display="none",i.error({message:`${e}`,position:"topRight"})}};L.addEventListener("submit",v);const q=async t=>{try{n++,l.style.display="block";const{data:e}=await f(y,n);l.style.display="none";const a=e.hits.map(o=>h(o)).join("");u.insertAdjacentHTML("beforeend",a),m.refresh(),S(b),n===Math.ceil(e.totalHits/e.hits.length)&&(c.classList.add("is-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.style.display="none",i.error({message:`${error}`,position:"topRight"})}};
//# sourceMappingURL=index.js.map
