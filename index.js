import{a as f,i as y,S as b}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const g=s=>`<li class="gallery-item">
    <a class="gallery-link" href="${s.largeImageURL}">
      <img
        class="gallery-img"
        src="${s.webformatURL}"
        alt="${s.tags}"
      />
    </a>
    <ul class="gallery-list">
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Likes</p>
        <p class="gallery-list-text">${s.likes}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Views</p>
        <p class="gallery-list-text">${s.views}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Comments</p>
        <p class="gallery-list-text">${s.comments}</p>
      </li>
      <li class="gallery-list-item">
        <p class="gallery-list-text-name">Downloads</p>
        <p class="gallery-list-text">${s.downloads}</p>
      </li>
    </ul>
  </li>`,u=(s,e)=>{const a={params:{key:"48469093-05e82502d9118a70767c30ea2",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return f.get("https://pixabay.com/api/",a)},m=document.querySelector(".search-form"),p=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn"),l=document.querySelector(".loader");l.style.display="none";let n=1,c="";const L=async s=>{try{if(s.preventDefault(),p.innerHTML="",l.style.display="block",c=s.currentTarget.elements.user_query.value.trim(),!c){s.currentTarget.elements.user_query.value="",l.style.display="none";return}n=1,i.classList.add("is-hidden");const{data:e}=await u(c,n);if(l.style.display="none",e.total===0){y.show({message:"Sorry, there are no images matching</br> your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#ef4040",theme:"dark",position:"topRight",progressBarColor:"#b51b1b"}),m.reset();return}e.totalHits/e.hits.length>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",h)),e.totalHits===e.hits.length&&y.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#000000",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#b0e0e6",theme:"light",position:"topRight",progressBarColor:"#5f9ea0"});const a=e.hits.map(t=>g(t)).join("");p.innerHTML=a,new b(".gallery a",{captionsData:"alt"}).refresh()}catch(e){l.style.display="none",console.log(e)}};m.addEventListener("submit",L);const h=async s=>{try{n++,l.style.display="block";const{data:e}=await u(c,n);l.style.display="none";const a=e.hits.map(o=>g(o)).join("");p.insertAdjacentHTML("beforeend",a),n===Math.ceil(e.totalHits/e.hits.length)&&(i.classList.add("is-hidden"),i.removeEventListener("click",h),y.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#000000",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#b0e0e6",theme:"light",position:"topRight",progressBarColor:"#5f9ea0"}))}catch(e){l.style.display="none",console.log(e)}};
//# sourceMappingURL=index.js.map
