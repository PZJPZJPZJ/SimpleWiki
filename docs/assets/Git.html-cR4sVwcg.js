import{_ as s,e as a,f as n,o as i}from"./app-DaBYsrDG.js";const t={};function l(r,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="git-版本控制" tabindex="-1"><a class="header-anchor" href="#git-版本控制"><span>Git:版本控制</span></a></h1><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址"><span>下载地址</span></a></h2><ul><li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git 官网</a></li><li><a href="https://github.com/git-for-windows/git/releases" target="_blank" rel="noopener noreferrer">Git Github</a><ul><li><a href="https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/Git-2.49.0-64-bit.exe" target="_blank" rel="noopener noreferrer">Windows Installer x64(安装版)</a></li><li><a href="https://github.com/git-for-windows/git/releases/download/v2.48.1.windows.1/Git-2.48.1-32-bit.exe" target="_blank" rel="noopener noreferrer">Windows Installer x32(安装版)</a></li><li><a href="https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/PortableGit-2.49.0-64-bit.7z.exe" target="_blank" rel="noopener noreferrer">Windows Portable x64(便携版)</a></li><li><a href="https://github.com/git-for-windows/git/releases/download/v2.48.1.windows.1/PortableGit-2.48.1-32-bit.7z.exe" target="_blank" rel="noopener noreferrer">Windows Portable x32(便携版)</a></li></ul></li></ul><h2 id="编辑配置" tabindex="-1"><a class="header-anchor" href="#编辑配置"><span>编辑配置</span></a></h2><ol><li>Github等版本控制托管站禁止默认邮箱推送</li><li>访问Github&gt;Setting&gt;Email中查看匿名邮箱配置</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 查看配置和存储位置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--list</span> --show-origin</span>
<span class="line"><span class="token comment"># 配置全局用户信息</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;用户名&quot;</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;邮箱&quot;</span></span>
<span class="line"><span class="token comment"># 配置单个项目用户信息，在项目目录下运行</span></span>
<span class="line"><span class="token function">git</span> config user.name <span class="token string">&quot;用户名&quot;</span></span>
<span class="line"><span class="token function">git</span> config user.email <span class="token string">&quot;邮箱&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const c=s(t,[["render",l],["__file","Git.html.vue"]]),p=JSON.parse('{"path":"/wiki/Git.html","title":"Git:版本控制","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"下载地址","slug":"下载地址","link":"#下载地址","children":[]},{"level":2,"title":"编辑配置","slug":"编辑配置","link":"#编辑配置","children":[]}],"git":{"updatedTime":1738248754000,"contributors":[{"name":"PZJPZJPZJ","username":"PZJPZJPZJ","email":"68857304+PZJPZJPZJ@users.noreply.github.com","commits":3,"url":"https://github.com/PZJPZJPZJ"}],"changelog":[{"hash":"6187a40a654ec7b4819383a7e84c21f37744d6d8","time":1738248754000,"email":"68857304+PZJPZJPZJ@users.noreply.github.com","author":"PZJ","message":"Commit"},{"hash":"de4608db92bb57c5501d037ed0af4785e8085430","time":1737043451000,"email":"68857304+PZJPZJPZJ@users.noreply.github.com","author":"PZJ","message":"Commit"},{"hash":"5121e758b201f9c295cf2e4ea108886d0519e3c1","time":1737042390000,"email":"68857304+PZJPZJPZJ@users.noreply.github.com","author":"PZJ","message":"Initial commit"}]},"filePathRelative":"wiki/Git.md"}');export{c as comp,p as data};
