import{a as f,S as d,i as n}from"./assets/vendor-DQiTczw4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="54662429-d0583973866d02e67b13f9c1b";function h(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(p,{params:o}).then(t=>t.data).catch(()=>{throw new Error})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`<li class="gallery-item">
              <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" />
              </a>
              <div class="info">
                <p><b>Likes</b> ${t.likes}</p>
                <p><b>Views</b> ${t.views}</p>
                <p><b>Comments</b> ${t.comments}</p>
                <p><b>Downloads</b> ${t.downloads}</p>
              </div>
            </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function L(){u.classList.add("is-visible")}function w(){u.classList.remove("is-visible")}const c=document.querySelector(".form");c.addEventListener("submit",function(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({message:"Поле пошуку порожнє!",position:"topRight"});return}b(),L(),h(o).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(()=>{n.error({message:"Помилка запиту на сервер",position:"topRight"})}).finally(()=>{w(),c.reset()})});
//# sourceMappingURL=index.js.map
