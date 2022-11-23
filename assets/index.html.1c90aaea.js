import{_ as l,r as s,o as i,c,a as e,b as n,d as t,w as d,e as r}from"./app.6002ca23.js";const u={},p=r('<h1 id="시작-페이지" tabindex="-1"><a class="header-anchor" href="#시작-페이지" aria-hidden="true">#</a> 시작 페이지</h1><h2 id="vuepress-설정하기" tabindex="-1"><a class="header-anchor" href="#vuepress-설정하기" aria-hidden="true">#</a> Vuepress 설정하기</h2><h3 id="routing-page" tabindex="-1"><a class="header-anchor" href="#routing-page" aria-hidden="true">#</a> Routing Page</h3><p>기본적으로, <strong>Page</strong> 의 라우트 경로는 마크다운 파일의 상대경로로 결정</p><h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h3>',5),h={href:"https://yaml.org",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"frontmatter",-1),_=r(`<p><code>frontmatter</code>는 파일의 시작에 위치하고, <code>---</code>(tripple-dashed line)로 감싼다.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token key atrule">title</span><span class="token punctuation">:</span> Title of this page
<span class="token key atrule">description</span><span class="token punctuation">:</span> Description of this page</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=e("li",null,[n("현재 페이지의 "),e("code",null,"언어(lang)"),n(", "),e("code",null,"제목(title)"),n(" 등을 재정의 할 수 있다.")],-1),g={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://v2.vuepress.vuejs.org/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html",target:"_blank",rel:"noopener noreferrer"};function x(L,y){const a=s("ExternalLinkIcon"),o=s("RouterLink");return i(),c("div",null,[p,e("p",null,[n("마크다운 파일은 "),e("strong",null,[e("a",h,[n("YAML"),t(a)])]),n(),m,n("를 포함할 수 있다.")]),_,e("ul",null,[e("li",null,[n("필드들은 설정 파일의 "),t(o,{to:"/config/"},{default:d(()=>[n("사이트 설정(Site Config)")]),_:1}),n("과 유사하다.")]),f]),e("div",g,[k,e("ul",null,[e("li",null,[e("a",v,[n("Built-in Frontmatter FULL List"),t(a)])]),e("li",null,[e("a",b,[n("디폴트 테마의 Frontmatter"),t(a)])])])])])}const w=l(u,[["render",x],["__file","index.html.vue"]]);export{w as default};