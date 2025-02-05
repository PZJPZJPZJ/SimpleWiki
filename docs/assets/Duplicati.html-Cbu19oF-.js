import{_ as s,c as a,a as e,o as i}from"./app-6QIuFVSn.js";const l={};function p(t,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="duplicati-定时备份工具" tabindex="-1"><a class="header-anchor" href="#duplicati-定时备份工具"><span>Duplicati:定时备份工具</span></a></h1><h2 id="dockercompose部署" tabindex="-1"><a class="header-anchor" href="#dockercompose部署"><span>DockerCompose部署</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">duplicati</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/duplicati<span class="token punctuation">:</span>latest</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> duplicati</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> PUID=1000</span>
<span class="line">      <span class="token punctuation">-</span> PGID=1000</span>
<span class="line">      <span class="token punctuation">-</span> TZ=Asia/Shanghai</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./config<span class="token punctuation">:</span>/config</span>
<span class="line">      <span class="token punctuation">-</span> ./backups<span class="token punctuation">:</span>/backups</span>
<span class="line">      <span class="token punctuation">-</span> ./source<span class="token punctuation">:</span>/source</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 8200<span class="token punctuation">:</span><span class="token number">8200</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const o=s(l,[["render",p],["__file","Duplicati.html.vue"]]),u=JSON.parse('{"path":"/wiki/Duplicati.html","title":"Duplicati:定时备份工具","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"DockerCompose部署","slug":"dockercompose部署","link":"#dockercompose部署","children":[]}],"git":{"updatedTime":1737043451000,"contributors":[{"name":"PZJ","email":"68857304+PZJPZJPZJ@users.noreply.github.com","commits":2,"url":"https://github.com/PZJ"}]},"filePathRelative":"wiki/Duplicati.md"}');export{o as comp,u as data};
