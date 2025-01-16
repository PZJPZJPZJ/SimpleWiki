import{_ as n,c as a,a as p,o as t}from"./app-C0b3YH3R.js";const e={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[p(`<h1 id="alist-开源网盘" tabindex="-1"><a class="header-anchor" href="#alist-开源网盘"><span>Alist:开源网盘</span></a></h1><h2 id="官方地址" tabindex="-1"><a class="header-anchor" href="#官方地址"><span>官方地址</span></a></h2><ul><li><a href="https://alist.nn.ci/" target="_blank" rel="noopener noreferrer">官网</a></li><li><a href="https://github.com/AlistGo/alist" target="_blank" rel="noopener noreferrer">Github</a></li></ul><h2 id="dockercompose部署" tabindex="-1"><a class="header-anchor" href="#dockercompose部署"><span>DockerCompose部署</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">alist</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> xhofe/alist<span class="token punctuation">:</span>latest</span>
<span class="line">        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> alist</span>
<span class="line">        <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> ./config<span class="token punctuation">:</span>/opt/alist/data</span>
<span class="line">        <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host</span>
<span class="line">        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行命令" tabindex="-1"><a class="header-anchor" href="#运行命令"><span>运行命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Docker</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> alist ./alist admin <span class="token builtin class-name">set</span> NEW_PASSWORD</span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line">.<span class="token punctuation">\\</span>alist.exe admin <span class="token builtin class-name">set</span> NEW_PASSWORD</span>
<span class="line"><span class="token comment"># Linux macOS</span></span>
<span class="line">./alist admin <span class="token builtin class-name">set</span> NEW_PASSWORD</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;force&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;site_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;cdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;jwt_secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random_generated&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;token_expires_in&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sqlite3&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//数据库类型</span></span>
<span class="line">    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//数据库地址</span></span>
<span class="line">    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>          <span class="token comment">//数据库端口号</span></span>
<span class="line">    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//数据库账号</span></span>
<span class="line">    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//数据库密码</span></span>
<span class="line">    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//数据库库名</span></span>
<span class="line">    <span class="token property">&quot;db_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\data.db&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//数据库位置,sqlite3使用的</span></span>
<span class="line">    <span class="token property">&quot;table_prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;x_&quot;</span><span class="token punctuation">,</span>           <span class="token comment">//数据库表名前缀</span></span>
<span class="line">    <span class="token property">&quot;ssl_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//来控制SSL握手时的加密选项,参数自行搜索，或者查看下方来自ChatGPT的回答</span></span>
<span class="line">    <span class="token property">&quot;dsn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>           <span class="token comment">// https://github.com/alist-org/alist/pull/6031</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token property">&quot;meilisearch&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:7700&quot;</span><span class="token punctuation">,</span>    <span class="token comment">//使用\`meilisearch\`的链接，默认使用的是本机</span></span>
<span class="line">    <span class="token property">&quot;api_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>                      <span class="token comment">//请查阅\`meilisearch\`文档</span></span>
<span class="line">    <span class="token property">&quot;index_prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>                  <span class="token comment">//请查阅\`meilisearch\`文档</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;scheme&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// 要监听的 http/https 地址，默认为 0.0.0.0</span></span>
<span class="line">    <span class="token property">&quot;http_port&quot;</span><span class="token operator">:</span> <span class="token number">5244</span><span class="token punctuation">,</span>      <span class="token comment">// 监听的 http 端口,默认的 &#39;5244&#39;,如果你想禁用 http,将其设置为 &#39;-1&#39;</span></span>
<span class="line">    <span class="token property">&quot;https_port&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>       <span class="token comment">// https 端口监听,默认的 &#39;-1&#39;,如果你想启用 https,将其设置为非 &#39;-1&#39;</span></span>
<span class="line">    <span class="token property">&quot;force_https&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// 是否强制使用 HTTPS 协议,如果设置为 true ,则用户只能通过 HTTPS 访问该网站</span></span>
<span class="line">    <span class="token property">&quot;cert_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\cert.crt&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 证书文件路径</span></span>
<span class="line">    <span class="token property">&quot;key_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\key.key&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 证书密钥文件路径</span></span>
<span class="line">    <span class="token property">&quot;unix_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>         <span class="token comment">// Unix 监听套接字文件路径,默认的空的,如果你想使用 Unix socket,将其设置为非空</span></span>
<span class="line">    <span class="token property">&quot;unix_file_perm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>     <span class="token comment">// Unix 监听套接字文件，设置为合适的权限</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;temp_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\temp&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;bleve_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\bleve&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dist_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>					<span class="token comment">//开启日志记录功能，默认为开启状态 true</span></span>
<span class="line">    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data\\\\log\\\\log.log&quot;</span><span class="token punctuation">,</span>	<span class="token comment">//日志文件的路径和名称</span></span>
<span class="line">    <span class="token property">&quot;max_size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>					<span class="token comment">//单个日志文件的最大大小，单位为 MB。达到指定大小后会自动切分文件</span></span>
<span class="line">    <span class="token property">&quot;max_backups&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>				<span class="token comment">//保留的日志备份数量，超过数量会自动删除旧的备份</span></span>
<span class="line">    <span class="token property">&quot;max_age&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>					<span class="token comment">//日志文件保存的最大天数，超过天数的日志文件会被删除</span></span>
<span class="line">    <span class="token property">&quot;compress&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>				<span class="token comment">//是否启用日志文件压缩功能。压缩后可以减小文件大小，但查看时需要解压缩，默认为关闭状态 false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;delayed_start&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;max_connections&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;tls_insecure_skip_verify&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;download&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;max_retry&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;transfer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;max_retry&quot;</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;upload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;max_retry&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;copy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;workers&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;max_retry&quot;</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;cors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;allow_origins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;*&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;allow_methods&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;*&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;allow_headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;*&quot;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const i=n(e,[["render",o],["__file","Alist.html.vue"]]),r=JSON.parse('{"path":"/guide/Alist.html","title":"Alist:开源网盘","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"官方地址","slug":"官方地址","link":"#官方地址","children":[]},{"level":2,"title":"DockerCompose部署","slug":"dockercompose部署","link":"#dockercompose部署","children":[]},{"level":2,"title":"运行命令","slug":"运行命令","link":"#运行命令","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}],"git":{},"filePathRelative":"guide/Alist.md"}');export{i as comp,r as data};
