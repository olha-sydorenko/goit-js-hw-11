const e=document.querySelector(".search-form"),t=document.querySelector(".gallery"),s=document.querySelector(".load-more"),o=new class{searchPhotos(){return fetch(`https://pixabay.com/api/?key=32917411-0bf5fafbdbcee2600446b2252&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){this.page=1,this.query=null}};function n(e){const s=e.map((({webformatURL:e,tags:t,likes:s,views:o,comments:n,downloads:i})=>`<div class="photo-card">\n         <img class="photo" src="${e}" alt="${t}" loading="lazy" />\n        <div class="info">\n          <p class="info-item">\n            <b>Likes</b> ${s}\n          </p>\n          <p class="info-item">\n            <b>Views</b> ${o}\n          </p>\n          <p class="info-item">\n            <b>Comments</b> ${n}\n          </p>\n          <p class="info-item">\n            <b>Downloads</b> ${i}\n          </p>\n        </div>\n      </div>`)).join("");t.insertAdjacentHTML("beforeend",s)}e.addEventListener("submit",(e=>{e.preventDefault(),o.query=e.currentTarget.searchQuery.value,o.page=1,o.searchPhotos().then((i=>{if(!i.hits.length)return alert("oops!"),e.target.reset(),t.innerHTML="",void s.classList.add("is-hidden");i.hits.length*o.page<40?(n(i.hits),console.log(i.hits.length),console.log(i.totalHits),console.log(i.hits.length*o.page)):(n(i.hits),console.log(i),s.classList.remove("is-hidden"))})).catch((e=>{console.log(e)}))})),s.addEventListener("click",(e=>{o.page+=1,o.searchPhotos().then((e=>{e.hits.length*o.page<=40&&(n(e.hits),console.log(e.hits.length),console.log(e.totalHits),s.classList.add("is-hidden")),n(e.hits),console.log(e.hits.length),console.log(e.totalHits),console.log(e.hits.length*o.page)})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.7b014efb.js.map
