import{a as v,i,S as x}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const h=t=>`<li class="gallery-item">
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
  </li>`,f=(t,e)=>{const a={params:{key:"48469093-05e82502d9118a70767c30ea2",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return v.get("https://pixabay.com/api/",a)},L=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".load-more-btn"),l=document.querySelector(".loader");l.style.display="none";let c=1,y="",m,g,p,b;const S=15,q=t=>{window.scrollBy({top:t,behavior:"smooth"})},E=async t=>{try{if(t.preventDefault(),n.classList.add("is-hidden"),u.innerHTML="",c=1,l.style.display="block",y=t.currentTarget.elements.user_query.value.trim(),!y){t.currentTarget.elements.user_query.value="",l.style.display="none",i.warning({message:"Please fill in the field!",position:"topRight"});return}const{data:e}=await f(y,c);if(l.style.display="none",e.total===0){i.error({message:"Sorry, there are no images matching</br> your search query. Please try again!",position:"topRight"}),L.reset();return}e.totalHits/e.hits.length>1&&(n.classList.remove("is-hidden"),n.addEventListener("click",w)),e.totalHits===e.hits.length&&i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const a=e.hits.map(o=>h(o)).join("");u.innerHTML=a,m=new x(".gallery a",{captionsData:"alt"}),m.refresh(),g=document.querySelector(".gallery-item"),p=g.getBoundingClientRect(),b=(p.bottom-p.top)*2+48}catch(e){l.style.display="none",i.error({message:`${e}`,position:"topRight"})}};L.addEventListener("submit",E);const w=async t=>{try{c++,l.style.display="block";const{data:e}=await f(y,c);l.style.display="none";const a=e.hits.map(o=>h(o)).join("");u.insertAdjacentHTML("beforeend",a),m.refresh(),q(b),c===Math.ceil(e.totalHits/S)&&(n.classList.add("is-hidden"),n.removeEventListener("click",w),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){l.style.display="none",i.error({message:`${e}`,position:"topRight"})}};
//# sourceMappingURL=index.js.map
