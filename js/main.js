document.addEventListener("DOMContentLoaded",function(){let s,i;let t=false;const e=e=>{const t=e=>{let t=0;e.length&&Array.from(e).forEach(e=>{t+=e.offsetWidth});return t};if(e){const o=t(document.querySelector("#blog-info > a").children);const c=t(document.getElementById("menus").children);s=o+c;i=document.getElementById("nav")}let n="";if(window.innerWidth<=768)n=true;else n=s>i.offsetWidth-120;if(n){i.classList.add("hide-menu")}else{i.classList.remove("hide-menu")}};const n=()=>{e(true);i.classList.add("show")};const o={open:()=>{btf.sidebarPaddingR();document.body.style.overflow="hidden";btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s");document.getElementById("sidebar-menus").classList.add("open");t=true},close:()=>{const e=document.body;e.style.overflow="";e.style.paddingRight="";btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s");document.getElementById("sidebar-menus").classList.remove("open");t=false}};const c=()=>{const e=document.getElementById("scroll-down");e&&e.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)})};const l=function(){const e=GLOBAL_CONFIG.highlight;if(!e)return;const t=e.highlightCopy;const n=e.highlightLang;const o=GLOBAL_CONFIG_SITE.isHighlightShrink;const i=e.highlightHeightLimit;const l=t||n||o!==undefined;const c=e.plugin==="highlighjs"?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!((l||i)&&c.length))return;const s=e.plugin==="prismjs";let a="";let r="";const d=o===true?"closed":"";if(o!==undefined){a=`<i class="fas fa-angle-down expand ${d}"></i>`}if(t){r='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'}const u=(e,t)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){document.execCommand("copy");if(GLOBAL_CONFIG.Snackbar!==undefined){btf.snackbarShow(GLOBAL_CONFIG.copy.success)}else{const n=t.previousElementSibling;n.innerText=GLOBAL_CONFIG.copy.success;n.style.opacity=1;setTimeout(()=>{n.style.opacity=0},700)}}else{if(GLOBAL_CONFIG.Snackbar!==undefined){btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)}else{t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport}}};const f=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection();const o=document.createRange();if(s)o.selectNodeContents(t.querySelectorAll("pre code")[0]);else o.selectNodeContents(t.querySelectorAll("table .code pre")[0]);n.removeAllRanges();n.addRange(o);const c=n.toString();u(c,e.lastChild);n.removeAllRanges();t.classList.remove("copy-true")};const m=e=>{const t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed");if(btf.isHidden(t[t.length-1])){t.forEach(e=>{e.style.display="block"})}else{t.forEach(e=>{e.style.display="none"})}};const h=function(e){const t=e.target.classList;if(t.contains("expand"))m(this);else if(t.contains("copy-button"))f(this)};const g=function(){this.classList.toggle("expand-done")};function p(e,t,n){const o=document.createDocumentFragment();if(l){const c=document.createElement("div");c.className=`highlight-tools ${d}`;c.innerHTML=a+e+r;c.addEventListener("click",h);o.appendChild(c)}if(i&&t.offsetHeight>i+30){const s=document.createElement("div");s.className="code-expand-btn";s.innerHTML='<i class="fas fa-angle-double-down"></i>';s.addEventListener("click",g);o.appendChild(s)}if(n==="hl"){t.insertBefore(o,t.firstChild)}else{t.parentNode.insertBefore(o,t)}}if(n){if(s){c.forEach(function(e){const t=e.getAttribute("data-language")?e.getAttribute("data-language"):"Code";const n=`<div class="code-lang">${t}</div>`;btf.wrap(e,"figure",{class:"highlight"});p(n,e)})}else{c.forEach(function(e){let t=e.getAttribute("class").split(" ")[1];if(t==="plain"||t===undefined)t="Code";const n=`<div class="code-lang">${t}</div>`;p(n,e,"hl")})}}else{if(s){c.forEach(function(e){btf.wrap(e,"figure",{class:"highlight"});p("",e)})}else{c.forEach(function(e){p("",e,"hl")})}}};function a(){document.querySelectorAll("#article-container img").forEach(function(e){const t=e.parentNode;const n=e.title||e.alt;if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center";o.textContent=n;t.insertBefore(o,e.nextSibling)}})}const r=()=>{btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)"))};const d=function(e){const s=e=>{let o="";const c=e=>e.replace(/"/g,"&quot;");e.forEach(e=>{const t=e.alt?`alt="${c(e.alt)}"`:"";const n=e.title?`title="${c(e.title)}"`:"";o+=`<div class="fj-gallery-item"><img src="${e.url}" ${t+n}"></div>`});return o};const i=(e,t,n)=>{const o=n;const c=t.length;if(c>o)e.insertAdjacentHTML("beforeend",s(t.splice(0,o)));else{e.insertAdjacentHTML("beforeend",s(t));e.classList.remove("lazyload")}return c>o?o:c};const n=async e=>{const t=await fetch(e);return await t.json()};const o=(t,n)=>{if(!t.classList.contains("lazyload"))t.innerHTML=s(n);else{const o=t.getAttribute("data-limit");i(t,n,o);const c=()=>{const e=i(t,n,o);fjGallery(t,"appendImages",t.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${e})`));btf.loadLightbox(t.querySelectorAll("img"));e<o&&t.nextElementSibling.removeEventListener("click",c)};t.nextElementSibling.addEventListener("click",c)}btf.initJustifiedGallery(t);btf.loadLightbox(t.querySelectorAll("img"))};const t=()=>{e.forEach(t=>{t.classList.contains("url")?n(t.textContent).then(e=>{o(t,e)}):o(t,JSON.parse(t.textContent))})};if(window.fjGallery){t();return}getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`);getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(t)};const u=e=>{const t=btf.getScrollPercent(e,document.body);const n=document.getElementById("go-up");if(t<95){n.classList.add("show-percent");n.querySelector(".scroll-percent").textContent=t}else{n.classList.remove("show-percent")}};const f=function(){const n=document.getElementById("rightside");const o=window.innerHeight+56;if(document.body.scrollHeight<=o){n.style.cssText="opacity: 1; transform: translateX(-58px)";return}function c(e){const t=e>s;s=e;return t}let s=0;let i=true;const l=document.getElementById("page-header");const a=typeof chatBtnHide==="function";const r=typeof chatBtnShow==="function";const d=GLOBAL_CONFIG.percent.rightside;const e=btf.throttle(()=>{const e=window.scrollY||document.documentElement.scrollTop;const t=c(e);if(e>56){if(t){if(l.classList.contains("nav-visible"))l.classList.remove("nav-visible");if(r&&i===true){chatBtnHide();i=false}}else{if(!l.classList.contains("nav-visible"))l.classList.add("nav-visible");if(a&&i===false){chatBtnShow();i=true}}l.classList.add("nav-fixed");if(window.getComputedStyle(n).getPropertyValue("opacity")==="0"){n.style.cssText="opacity: 0.8; transform: translateX(-58px)"}}else{if(e===0){l.classList.remove("nav-fixed","nav-visible")}n.style.cssText="opacity: ''; transform: ''"}d&&u(e);if(document.body.scrollHeight<=o){n.style.cssText="opacity: 0.8; transform: translateX(-58px)"}},200);window.scrollCollect=e;window.addEventListener("scroll",scrollCollect)};const m=function(){const n=GLOBAL_CONFIG_SITE.isToc;const e=GLOBAL_CONFIG.isAnchor;const t=document.getElementById("article-container");if(!(t&&(n||e)))return;let i,l,a,o,r;if(n){const s=document.getElementById("card-toc");l=s.getElementsByClassName("toc-content")[0];i=l.querySelectorAll(".toc-link");o=s.querySelector(".toc-percentage");r=l.classList.contains("is-expand");window.mobileToc={open:()=>{s.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:()=>{s.style.animation="toc-close .2s";setTimeout(()=>{s.style.cssText="opacity:''; animation: ''; right: ''"},100)}};l.addEventListener("click",e=>{e.preventDefault();const t=e.target.classList;if(t.contains("toc-content"))return;const n=t.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300);if(window.innerWidth<900){window.mobileToc.close()}});a=e=>{const t=e.getBoundingClientRect().top;const n=l.scrollTop;if(t>document.documentElement.clientHeight-100){l.scrollTop=n+150}if(t<100){l.scrollTop=n-150}}}const d=t.querySelectorAll("h1,h2,h3,h4,h5,h6");let u="";const c=function(o){if(o===0){return false}let c="";let s="";d.forEach(function(e,t){if(o>btf.getEleTop(e)-80){const n=e.id;c=n?"#"+encodeURI(n):"";s=t}});if(u===s)return;if(e)btf.updateAnchor(c);u=s;if(n){l.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")});if(c===""){return}const t=i[s];t.classList.add("active");setTimeout(()=>{a(t)},0);if(r)return;let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode){if(e.matches("li"))e.classList.add("active")}}};window.tocScrollFn=btf.throttle(()=>{const e=window.scrollY||document.documentElement.scrollTop;if(n&&GLOBAL_CONFIG.percent.toc){o.textContent=btf.getScrollPercent(e,t)}c(e)},100);window.addEventListener("scroll",tocScrollFn)};const h={switchReadMode:()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button";t.className="fas fa-sign-out-alt exit-readmode";e.appendChild(t);function n(){e.classList.remove("read-mode");t.remove();t.removeEventListener("click",n)}t.addEventListener("click",n)},switchDarkMode:()=>{const e=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";if(e==="light"){activateDarkMode();saveToLocal.set("theme","dark",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{activateLightMode();saveToLocal.set("theme","light",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}typeof utterancesTheme==="function"&&utterancesTheme();typeof changeGiscusTheme==="function"&&changeGiscusTheme();typeof FB==="object"&&window.loadFBComment&&window.loadFBComment();typeof runMermaid==="function"&&window.runMermaid()},showOrHideBtn:e=>{const t=document.getElementById("rightside-config-hide").classList;t.toggle("show");if(e.classList.contains("show")){t.add("status");setTimeout(()=>{t.remove("status")},300)}e.classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2);e.toggle("hide-aside")},runMobileToc:()=>{if(window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")==="0")window.mobileToc.open();else window.mobileToc.close()}};document.getElementById("rightside").addEventListener("click",function(e){const t=e.target.id?e.target:e.target.parentNode;switch(t.id){case"go-up":h.scrollToTop();break;case"rightside_config":h.showOrHideBtn(t);break;case"mobile-toc-button":h.runMobileToc();break;case"readmode":h.switchReadMode();break;case"darkmode":h.switchDarkMode();break;case"hide-aside-btn":h.hideAsideBtn();break;default:break}});const g=()=>{document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide")})})};const p=()=>{const o=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{e.preventDefault();let t;const n=window.getSelection(0).toString();if(n.length>o.limitCount){t=n+"\n"+"\n"+"\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info}else{t=n}if(e.clipboardData){return e.clipboardData.setData("text",t)}else{return window.clipboardData.setData("text",t)}}};const y=()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime}};const L=()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.innerText=btf.diffDate(t,true)}};const b=()=>{const e=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");if(e.length){e.forEach(e=>{btf.wrap(e,"div",{class:"table-wrap"})})}};const E=function(){const e=document.querySelectorAll("#article-container .hide-button");if(e.length){e.forEach(function(e){e.addEventListener("click",function(e){const t=this;t.classList.add("open");const n=t.nextElementSibling.querySelectorAll(".fj-gallery");n.length&&btf.initJustifiedGallery(n)})})}};const v={clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){const t=this;const n=t.parentNode;if(!n.classList.contains("active")){const o=n.parentNode.nextElementSibling;const c=btf.siblings(n,".active")[0];c&&c.classList.remove("active");n.classList.add("active");const s=t.getAttribute("data-href").replace("#","");const i=[...o.children];i.forEach(e=>{if(e.id===s)e.classList.add("active");else e.classList.remove("active")});const l=o.querySelectorAll(`#${s} .fj-gallery`);if(l.length>0){btf.initJustifiedGallery(l)}}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})}};const w=function(){const e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");if(e.length){e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();const t=this;t.classList.toggle("expand");const n=t.parentNode.nextElementSibling;if(btf.isHidden(n)){n.style.display="block"}else{n.style.display="none"}})})}};const A=function(){let e=false;const t=document.querySelector("#comment-switch > .switch-btn");t&&t.addEventListener("click",function(){this.classList.toggle("move");document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){if(btf.isHidden(e)){e.style.cssText="display: block;animation: tabshow .5s"}else{e.style.cssText="display: none;animation: ''"}});if(!e&&typeof loadOtherComment==="function"){e=true;loadOtherComment()}})};const S=function(){const e=GLOBAL_CONFIG.noticeOutdate;const t=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const n=document.createElement("div");n.className="post-outdate-notice";n.textContent=e.messagePrev+" "+t+" "+e.messageNext;const o=document.getElementById("article-container");if(e.position==="top"){o.insertBefore(n,o.firstChild)}else{o.appendChild(n)}}};const O=()=>{const n=e=>{e.target.removeEventListener("load",n);if(e.target.contentDocument&&e.target.contentDocument.head){const t=document.createElement("style");t.textContent="body { display: flex; align-items: center; justify-content: center }";e.target.contentDocument.head.appendChild(t)}};for(let e of document.querySelectorAll("iframe[data-src]")){e.addEventListener("load",n)}};const B=function(e){e.forEach(e=>{const t=e;const n=t.getAttribute("datetime");t.innerText=btf.diffDate(n,true);t.style.display="inline"})};const G=function(){window.addEventListener("resize",()=>{e(false);btf.isHidden(document.getElementById("toggle-menu"))&&t&&o.close()});document.getElementById("menu-mask").addEventListener("click",e=>{o.close()});g();GLOBAL_CONFIG.islazyload&&O();GLOBAL_CONFIG.copyright!==undefined&&p()};const C=function(){delayScripts.forEach(t=>{setTimeout(()=>{var e=document.createElement("script");e.async=true;e.src=t.src;e.onload=t.onload;document.body.appendChild(e)},t.delay||0)});delayStyles.forEach(t=>{setTimeout(()=>{var e=document.createElement("link");e.href=t.href;e.rel="preload";e.as="style";e.onload=function(){this.onload=null;this.rel="stylesheet"};document.head.appendChild(e)},t.delay||0)})};window.initLazyLoad=function(){window.lazyLoadInstance=new LazyLoad({elements_selector:"iframe,img",threshold:0,data_src:"src"})};window.runLightbox=r;window.refreshFn=function(){n();if(GLOBAL_CONFIG_SITE.isPost){GLOBAL_CONFIG.noticeOutdate!==undefined&&S();GLOBAL_CONFIG.relativeDate.post&&B(document.querySelectorAll("#post-meta time"))}else{GLOBAL_CONFIG.relativeDate.homepage&&B(document.querySelectorAll("#recent-posts time"));GLOBAL_CONFIG.runtime&&y();L();w()}m();GLOBAL_CONFIG_SITE.isHome&&c();l();GLOBAL_CONFIG.isPhotoFigcaption&&a();f();const e=document.querySelectorAll("#article-container .fj-gallery");e.length&&d(e);b();E();v.clickFnOfTabs();v.backToTop();A();document.getElementById("toggle-menu").addEventListener("click",()=>{o.open()})};refreshFn();G();C()});