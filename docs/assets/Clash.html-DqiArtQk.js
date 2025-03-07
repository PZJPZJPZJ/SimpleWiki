import{_ as n,c as a,a as e,o as l}from"./app-orSVnw94.js";const p={};function i(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="clash-代理工具核心" tabindex="-1"><a class="header-anchor" href="#clash-代理工具核心"><span>Clash:代理工具核心</span></a></h1><h2 id="安装教程" tabindex="-1"><a class="header-anchor" href="#安装教程"><span>安装教程</span></a></h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><ul><li>将<a href="#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%A4%BA%E4%BE%8B">配置文件</a>命名为config.yaml，修改proxy-providers的url为订阅地址，放在<code>C:\\Users\\Admin\\.config\\clash</code>目录中,运行<code>clash.exe</code></li></ul><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><ul><li>将<a href="#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%A4%BA%E4%BE%8B">配置文件</a>命名为config.yaml，修改proxy-providers的url为订阅地址，放在<code>/root/.config/clash</code>目录中,运行<code>./clash</code></li></ul><h3 id="dockercli" tabindex="-1"><a class="header-anchor" href="#dockercli"><span>DockerCLI</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> clash <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--net</span><span class="token operator">=</span>host dreamacro/clash-premium</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置文件示例" tabindex="-1"><a class="header-anchor" href="#配置文件示例"><span>配置文件示例</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># HTTP(S) 代理服务端口</span></span>
<span class="line"><span class="token comment"># port: 7890</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># SOCKS5 代理服务端口</span></span>
<span class="line"><span class="token comment"># socks-port: 7891</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Linux 和 macOS 的透明代理服务端口 (TCP 和 TProxy UDP 重定向)</span></span>
<span class="line"><span class="token comment"># redir-port: 7892</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Linux 的透明代理服务端口 (TProxy TCP 和 TProxy UDP)</span></span>
<span class="line"><span class="token comment"># tproxy-port: 7893</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># HTTP(S) 和 SOCKS4(A)/SOCKS5 代理服务共用一个端口</span></span>
<span class="line"><span class="token key atrule">mixed-port</span><span class="token punctuation">:</span> <span class="token number">7890</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 本地 SOCKS5/HTTP(S) 代理服务的认证</span></span>
<span class="line"><span class="token comment"># authentication:</span></span>
<span class="line"><span class="token comment">#  - &quot;user1:pass1&quot;</span></span>
<span class="line"><span class="token comment">#  - &quot;user2:pass2&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置为 true 以允许来自其他 LAN IP 地址的连接</span></span>
<span class="line"><span class="token key atrule">allow-lan</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 仅当 \`allow-lan\` 为 \`true\` 时有效</span></span>
<span class="line"><span class="token comment"># &#39;*&#39;: 绑定所有 IP 地址</span></span>
<span class="line"><span class="token comment"># 192.168.122.11: 绑定单个 IPv4 地址</span></span>
<span class="line"><span class="token comment"># &quot;[aaaa::a8aa:ff:fe09:57d8]&quot;: 绑定单个 IPv6 地址</span></span>
<span class="line"><span class="token comment"># bind-address: &#39;*&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Clash 路由工作模式</span></span>
<span class="line"><span class="token comment"># rule: 基于规则的数据包路由</span></span>
<span class="line"><span class="token comment"># global: 所有数据包将被转发到单个节点</span></span>
<span class="line"><span class="token comment"># direct: 直接将数据包转发到互联网</span></span>
<span class="line"><span class="token key atrule">mode</span><span class="token punctuation">:</span> rule</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 默认情况下, Clash 将日志打印到 STDOUT</span></span>
<span class="line"><span class="token comment"># 日志级别: info / warning / error / debug / silent</span></span>
<span class="line"><span class="token key atrule">log-level</span><span class="token punctuation">:</span> info</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 当设置为 false 时, 解析器不会将主机名解析为 IPv6 地址</span></span>
<span class="line"><span class="token key atrule">ipv6</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># RESTful Web API 监听地址</span></span>
<span class="line"><span class="token key atrule">external-controller</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9090</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置目录的相对路径或静态 Web 资源目录的绝对路径. Clash core 将在</span></span>
<span class="line"><span class="token comment"># \`http://{{external-controller}}/ui\` 中提供服务.</span></span>
<span class="line"><span class="token comment"># 解压 clash-yacd-gh-pages.zip 并配置静态文件目录</span></span>
<span class="line"><span class="token comment"># external-ui: folder</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># RESTful API 密钥 (可选)</span></span>
<span class="line"><span class="token comment"># 通过指定 HTTP 头 \`Authorization: Bearer \${secret}\` 进行身份验证</span></span>
<span class="line"><span class="token comment"># 如果RESTful API在 0.0.0.0 上监听, 务必设置一个 secret 密钥.</span></span>
<span class="line"><span class="token comment"># secret: &quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 出站接口名称</span></span>
<span class="line"><span class="token comment"># interface-name: en0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># fwmark (仅在 Linux 上有效)</span></span>
<span class="line"><span class="token comment"># routing-mark: 6666</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 用于DNS服务器和连接建立的静态主机 (如/etc/hosts) .</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 支持通配符主机名 (例如 *.clash.dev, *.foo.*.example.com)</span></span>
<span class="line"><span class="token comment"># 非通配符域名优先级高于通配符域名</span></span>
<span class="line"><span class="token comment"># 例如 foo.example.com &gt; *.example.com &gt; .example.com</span></span>
<span class="line"><span class="token comment"># P.S. +.foo.com 等于 .foo.com 和 foo.com</span></span>
<span class="line"><span class="token comment"># hosts:</span></span>
<span class="line">  <span class="token comment"># &#39;*.clash.dev&#39;: 127.0.0.1</span></span>
<span class="line">  <span class="token comment"># &#39;.dev&#39;: 127.0.0.1</span></span>
<span class="line">  <span class="token comment"># &#39;alpha.clash.dev&#39;: &#39;::1&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># profile:</span></span>
<span class="line">  <span class="token comment"># 将 \`select\` 手动选择 结果存储在 $HOME/.config/clash/.cache 中</span></span>
<span class="line">  <span class="token comment"># 如果不需要此行为, 请设置为 false</span></span>
<span class="line">  <span class="token comment"># 当两个不同的配置具有同名的组时, 将共享所选值</span></span>
<span class="line">  <span class="token comment"># store-selected: true</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 持久化 fakeip</span></span>
<span class="line">  <span class="token comment"># store-fake-ip: false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># DNS 服务设置</span></span>
<span class="line"><span class="token comment"># 此部分是可选的. 当不存在时, DNS 服务将被禁用.</span></span>
<span class="line"><span class="token key atrule">dns</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">53</span></span>
<span class="line">  <span class="token comment"># ipv6: false # 当为 false 时, AAAA 查询的响应将为空</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 这些 名称服务器(nameservers) 用于解析下列 DNS 名称服务器主机名.</span></span>
<span class="line">  <span class="token comment"># 仅指定 IP 地址</span></span>
<span class="line">  <span class="token key atrule">default-nameserver</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> 114.114.114.114</span>
<span class="line">    <span class="token punctuation">-</span> 8.8.8.8</span>
<span class="line">  <span class="token comment"># enhanced-mode: fake-ip</span></span>
<span class="line">  <span class="token key atrule">fake-ip-range</span><span class="token punctuation">:</span> 198.18.0.1/16 <span class="token comment"># Fake IP 地址池 CIDR</span></span>
<span class="line">  <span class="token comment"># use-hosts: true # 查找 hosts 并返回 IP 记录</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># search-domains: [local] # A/AAAA 记录的搜索域</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 此列表中的主机名将不会使用 Fake IP 解析</span></span>
<span class="line">  <span class="token comment"># 即, 对这些域名的请求将始终使用其真实 IP 地址进行响应</span></span>
<span class="line">  <span class="token comment"># fake-ip-filter:</span></span>
<span class="line">  <span class="token comment">#   - &#39;*.lan&#39;</span></span>
<span class="line">  <span class="token comment">#   - localhost.ptlogin2.qq.com</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 支持 UDP、TCP、DoT、DoH. 您可以指定要连接的端口.</span></span>
<span class="line">  <span class="token comment"># 所有 DNS 查询都直接发送到名称服务器, 无需代理</span></span>
<span class="line">  <span class="token comment"># Clash 使用第一个收到的响应作为 DNS 查询的结果.</span></span>
<span class="line">  <span class="token key atrule">nameserver</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> 114.114.114.114 <span class="token comment"># 默认值</span></span>
<span class="line">    <span class="token punctuation">-</span> 8.8.8.8 <span class="token comment"># 默认值</span></span>
<span class="line">    <span class="token punctuation">-</span> tls<span class="token punctuation">:</span>//dns.rubyfish.cn<span class="token punctuation">:</span><span class="token number">853</span> <span class="token comment"># DNS over TLS</span></span>
<span class="line">    <span class="token punctuation">-</span> https<span class="token punctuation">:</span>//1.1.1.1/dns<span class="token punctuation">-</span>query <span class="token comment"># DNS over HTTPS</span></span>
<span class="line">    <span class="token punctuation">-</span> dhcp<span class="token punctuation">:</span>//en0 <span class="token comment"># 来自 dhcp 的 dns</span></span>
<span class="line">    <span class="token comment"># - &#39;8.8.8.8#en0&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 当 \`fallback\` 存在时, DNS 服务器将向此部分中的服务器</span></span>
<span class="line">  <span class="token comment"># 与 \`nameservers\` 中的服务器发送并发请求</span></span>
<span class="line">  <span class="token comment"># 当 GEOIP 国家不是 \`CN\` 时, 将使用 fallback 服务器的响应</span></span>
<span class="line">  <span class="token comment"># fallback:</span></span>
<span class="line">  <span class="token comment">#   - tcp://1.1.1.1</span></span>
<span class="line">  <span class="token comment">#   - &#39;tcp://1.1.1.1#en0&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 如果使用 \`nameservers\` 解析的 IP 地址在下面指定的子网中,</span></span>
<span class="line">  <span class="token comment"># 则认为它们无效, 并使用 \`fallback\` 服务器的结果.</span></span>
<span class="line">  <span class="token comment">#</span></span>
<span class="line">  <span class="token comment"># 当 \`fallback-filter.geoip\` 为 true 且 IP 地址的 GEOIP 为 \`CN\` 时,</span></span>
<span class="line">  <span class="token comment"># 将使用 \`nameservers\` 服务器解析的 IP 地址.</span></span>
<span class="line">  <span class="token comment">#</span></span>
<span class="line">  <span class="token comment"># 如果 \`fallback-filter.geoip\` 为 false, 且不匹配 \`fallback-filter.ipcidr\`,</span></span>
<span class="line">  <span class="token comment"># 则始终使用 \`nameservers\` 服务器的结果</span></span>
<span class="line">  <span class="token comment">#</span></span>
<span class="line">  <span class="token comment"># 这是对抗 DNS 污染攻击的一种措施.</span></span>
<span class="line">  <span class="token comment"># fallback-filter:</span></span>
<span class="line">  <span class="token comment">#   geoip: true</span></span>
<span class="line">  <span class="token comment">#   geoip-code: CN</span></span>
<span class="line">  <span class="token comment">#   ipcidr:</span></span>
<span class="line">  <span class="token comment">#     - 240.0.0.0/4</span></span>
<span class="line">  <span class="token comment">#   domain:</span></span>
<span class="line">  <span class="token comment">#     - &#39;+.google.com&#39;</span></span>
<span class="line">  <span class="token comment">#     - &#39;+.facebook.com&#39;</span></span>
<span class="line">  <span class="token comment">#     - &#39;+.youtube.com&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 通过特定的名称服务器查找域名</span></span>
<span class="line">  <span class="token comment"># nameserver-policy:</span></span>
<span class="line">  <span class="token comment">#   &#39;www.baidu.com&#39;: &#39;114.114.114.114&#39;</span></span>
<span class="line">  <span class="token comment">#   &#39;+.internal.crop.com&#39;: &#39;10.0.0.1&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># proxies:</span></span>
<span class="line"><span class="token comment">#   # Shadowsocks</span></span>
<span class="line"><span class="token comment">#   # 支持的加密方法:</span></span>
<span class="line"><span class="token comment">#   #   aes-128-gcm aes-192-gcm aes-256-gcm</span></span>
<span class="line"><span class="token comment">#   #   aes-128-cfb aes-192-cfb aes-256-cfb</span></span>
<span class="line"><span class="token comment">#   #   aes-128-ctr aes-192-ctr aes-256-ctr</span></span>
<span class="line"><span class="token comment">#   #   rc4-md5 chacha20-ietf xchacha20</span></span>
<span class="line"><span class="token comment">#   #   chacha20-ietf-poly1305 xchacha20-ietf-poly1305</span></span>
<span class="line"><span class="token comment">#   - name: &quot;ss1&quot;</span></span>
<span class="line"><span class="token comment">#     type: ss</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     cipher: chacha20-ietf-poly1305</span></span>
<span class="line"><span class="token comment">#     password: &quot;password&quot;</span></span>
<span class="line"><span class="token comment">#     # udp: true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   - name: &quot;ss2&quot;</span></span>
<span class="line"><span class="token comment">#     type: ss</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     cipher: chacha20-ietf-poly1305</span></span>
<span class="line"><span class="token comment">#     password: &quot;password&quot;</span></span>
<span class="line"><span class="token comment">#     plugin: obfs</span></span>
<span class="line"><span class="token comment">#     plugin-opts:</span></span>
<span class="line"><span class="token comment">#       mode: tls # or http</span></span>
<span class="line"><span class="token comment">#       # host: bing.com</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   - name: &quot;ss3&quot;</span></span>
<span class="line"><span class="token comment">#     type: ss</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     cipher: chacha20-ietf-poly1305</span></span>
<span class="line"><span class="token comment">#     password: &quot;password&quot;</span></span>
<span class="line"><span class="token comment">#     plugin: v2ray-plugin</span></span>
<span class="line"><span class="token comment">#     plugin-opts:</span></span>
<span class="line"><span class="token comment">#       mode: websocket # 暂不支持 QUIC</span></span>
<span class="line"><span class="token comment">#       # tls: true # wss</span></span>
<span class="line"><span class="token comment">#       # skip-cert-verify: true</span></span>
<span class="line"><span class="token comment">#       # host: bing.com</span></span>
<span class="line"><span class="token comment">#       # path: &quot;/&quot;</span></span>
<span class="line"><span class="token comment">#       # mux: true</span></span>
<span class="line"><span class="token comment">#       # headers:</span></span>
<span class="line"><span class="token comment">#       #   custom: value</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   # vmess</span></span>
<span class="line"><span class="token comment">#   # 支持的加密方法:</span></span>
<span class="line"><span class="token comment">#   #  auto/aes-128-gcm/chacha20-poly1305/none</span></span>
<span class="line"><span class="token comment">#   - name: &quot;vmess&quot;</span></span>
<span class="line"><span class="token comment">#     type: vmess</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     uuid: uuid</span></span>
<span class="line"><span class="token comment">#     alterId: 32</span></span>
<span class="line"><span class="token comment">#     cipher: auto</span></span>
<span class="line"><span class="token comment">#     # udp: true</span></span>
<span class="line"><span class="token comment">#     # tls: true</span></span>
<span class="line"><span class="token comment">#     # skip-cert-verify: true</span></span>
<span class="line"><span class="token comment">#     # servername: example.com # 优先于 wss 主机</span></span>
<span class="line"><span class="token comment">#     # network: ws</span></span>
<span class="line"><span class="token comment">#     # ws-opts:</span></span>
<span class="line"><span class="token comment">#     #   path: /path</span></span>
<span class="line"><span class="token comment">#     #   headers:</span></span>
<span class="line"><span class="token comment">#     #     Host: v2ray.com</span></span>
<span class="line"><span class="token comment">#     #   max-early-data: 2048</span></span>
<span class="line"><span class="token comment">#     #   early-data-header-name: Sec-WebSocket-Protocol</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   - name: &quot;vmess-h2&quot;</span></span>
<span class="line"><span class="token comment">#     type: vmess</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     uuid: uuid</span></span>
<span class="line"><span class="token comment">#     alterId: 32</span></span>
<span class="line"><span class="token comment">#     cipher: auto</span></span>
<span class="line"><span class="token comment">#     network: h2</span></span>
<span class="line"><span class="token comment">#     tls: true</span></span>
<span class="line"><span class="token comment">#     h2-opts:</span></span>
<span class="line"><span class="token comment">#       host:</span></span>
<span class="line"><span class="token comment">#         - http.example.com</span></span>
<span class="line"><span class="token comment">#         - http-alt.example.com</span></span>
<span class="line"><span class="token comment">#       path: /</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   - name: &quot;vmess-http&quot;</span></span>
<span class="line"><span class="token comment">#     type: vmess</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     uuid: uuid</span></span>
<span class="line"><span class="token comment">#     alterId: 32</span></span>
<span class="line"><span class="token comment">#     cipher: auto</span></span>
<span class="line"><span class="token comment">#     # udp: true</span></span>
<span class="line"><span class="token comment">#     # network: http</span></span>
<span class="line"><span class="token comment">#     # http-opts:</span></span>
<span class="line"><span class="token comment">#     #   # method: &quot;GET&quot;</span></span>
<span class="line"><span class="token comment">#     #   # path:</span></span>
<span class="line"><span class="token comment">#     #   #   - &#39;/&#39;</span></span>
<span class="line"><span class="token comment">#     #   #   - &#39;/video&#39;</span></span>
<span class="line"><span class="token comment">#     #   # headers:</span></span>
<span class="line"><span class="token comment">#     #   #   Connection:</span></span>
<span class="line"><span class="token comment">#     #   #     - keep-alive</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   - name: vmess-grpc</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     type: vmess</span></span>
<span class="line"><span class="token comment">#     uuid: uuid</span></span>
<span class="line"><span class="token comment">#     alterId: 32</span></span>
<span class="line"><span class="token comment">#     cipher: auto</span></span>
<span class="line"><span class="token comment">#     network: grpc</span></span>
<span class="line"><span class="token comment">#     tls: true</span></span>
<span class="line"><span class="token comment">#     servername: example.com</span></span>
<span class="line"><span class="token comment">#     # skip-cert-verify: true</span></span>
<span class="line"><span class="token comment">#     grpc-opts:</span></span>
<span class="line"><span class="token comment">#       grpc-service-name: &quot;example&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   # socks5</span></span>
<span class="line"><span class="token comment">#   - name: &quot;socks&quot;</span></span>
<span class="line"><span class="token comment">#     type: socks5</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     # username: username</span></span>
<span class="line"><span class="token comment">#     # password: password</span></span>
<span class="line"><span class="token comment">#     # tls: true</span></span>
<span class="line"><span class="token comment">#     # skip-cert-verify: true</span></span>
<span class="line"><span class="token comment">#     # udp: true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   # http</span></span>
<span class="line"><span class="token comment">#   - name: &quot;http&quot;</span></span>
<span class="line"><span class="token comment">#     type: http</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     # username: username</span></span>
<span class="line"><span class="token comment">#     # password: password</span></span>
<span class="line"><span class="token comment">#     # tls: true # https</span></span>
<span class="line"><span class="token comment">#     # skip-cert-verify: true</span></span>
<span class="line"><span class="token comment">#     # sni: custom.com</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   # Snell</span></span>
<span class="line"><span class="token comment">#   # 请注意, 目前还没有UDP支持.</span></span>
<span class="line"><span class="token comment">#   - name: &quot;snell&quot;</span></span>
<span class="line"><span class="token comment">#     type: snell</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 44046</span></span>
<span class="line"><span class="token comment">#     psk: yourpsk</span></span>
<span class="line"><span class="token comment">#     # version: 2</span></span>
<span class="line"><span class="token comment">#     # obfs-opts:</span></span>
<span class="line"><span class="token comment">#       # mode: http # or tls</span></span>
<span class="line"><span class="token comment">#       # host: bing.com</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   # Trojan</span></span>
<span class="line"><span class="token comment">#   - name: &quot;trojan&quot;</span></span>
<span class="line"><span class="token comment">#     type: trojan</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     password: yourpsk</span></span>
<span class="line"><span class="token comment">#     # udp: true</span></span>
<span class="line"><span class="token comment">#     # sni: example.com # aka 服务器名称</span></span>
<span class="line"><span class="token comment">#     # alpn:</span></span>
<span class="line"><span class="token comment">#     #   - h2</span></span>
<span class="line"><span class="token comment">#     #   - http/1.1</span></span>
<span class="line"><span class="token comment">#     # skip-cert-verify: true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   - name: trojan-grpc</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     type: trojan</span></span>
<span class="line"><span class="token comment">#     password: &quot;example&quot;</span></span>
<span class="line"><span class="token comment">#     network: grpc</span></span>
<span class="line"><span class="token comment">#     sni: example.com</span></span>
<span class="line"><span class="token comment">#     # skip-cert-verify: true</span></span>
<span class="line"><span class="token comment">#     udp: true</span></span>
<span class="line"><span class="token comment">#     grpc-opts:</span></span>
<span class="line"><span class="token comment">#       grpc-service-name: &quot;example&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   - name: trojan-ws</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     type: trojan</span></span>
<span class="line"><span class="token comment">#     password: &quot;example&quot;</span></span>
<span class="line"><span class="token comment">#     network: ws</span></span>
<span class="line"><span class="token comment">#     sni: example.com</span></span>
<span class="line"><span class="token comment">#     # skip-cert-verify: true</span></span>
<span class="line"><span class="token comment">#     udp: true</span></span>
<span class="line"><span class="token comment">#     # ws-opts:</span></span>
<span class="line"><span class="token comment">#       # path: /path</span></span>
<span class="line"><span class="token comment">#       # headers:</span></span>
<span class="line"><span class="token comment">#       #   Host: example.com</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#   # ShadowsocksR</span></span>
<span class="line"><span class="token comment">#   # 支持的加密方法: ss 中的所有流加密方法</span></span>
<span class="line"><span class="token comment">#   # 支持的混淆方式:</span></span>
<span class="line"><span class="token comment">#   #   plain http_simple http_post</span></span>
<span class="line"><span class="token comment">#   #   random_head tls1.2_ticket_auth tls1.2_ticket_fastauth</span></span>
<span class="line"><span class="token comment">#   # 支持的协议:</span></span>
<span class="line"><span class="token comment">#   #   origin auth_sha1_v4 auth_aes128_md5</span></span>
<span class="line"><span class="token comment">#   #   auth_aes128_sha1 auth_chain_a auth_chain_b</span></span>
<span class="line"><span class="token comment">#   - name: &quot;ssr&quot;</span></span>
<span class="line"><span class="token comment">#     type: ssr</span></span>
<span class="line"><span class="token comment">#     server: server</span></span>
<span class="line"><span class="token comment">#     port: 443</span></span>
<span class="line"><span class="token comment">#     cipher: chacha20-ietf</span></span>
<span class="line"><span class="token comment">#     password: &quot;password&quot;</span></span>
<span class="line"><span class="token comment">#     obfs: tls1.2_ticket_auth</span></span>
<span class="line"><span class="token comment">#     protocol: auth_sha1_v4</span></span>
<span class="line"><span class="token comment">#     # obfs-param: domain.tld</span></span>
<span class="line"><span class="token comment">#     # protocol-param: &quot;#&quot;</span></span>
<span class="line"><span class="token comment">#     # udp: true</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">proxy-groups</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 中继链路代理节点. 节点不应包含中继. 不支持 UDP.</span></span>
<span class="line">  <span class="token comment"># 流量节点链路: clash &lt;-&gt; http &lt;-&gt; vmess &lt;-&gt; ss1 &lt;-&gt; ss2 &lt;-&gt; Internet</span></span>
<span class="line">  <span class="token comment"># - name: &quot;relay&quot;</span></span>
<span class="line">  <span class="token comment">#   type: relay</span></span>
<span class="line">  <span class="token comment">#   proxies:</span></span>
<span class="line">  <span class="token comment">#     - http</span></span>
<span class="line">  <span class="token comment">#     - vmess</span></span>
<span class="line">  <span class="token comment">#     - ss1</span></span>
<span class="line">  <span class="token comment">#     - ss2</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># url-test 通过对 指定URL 进行基准速度测试来选择将使用哪个代理.</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;auto&quot;</span></span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test</span>
<span class="line">    <span class="token key atrule">use</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> provider1</span>
<span class="line">    <span class="token comment"># proxies:</span></span>
<span class="line">    <span class="token comment">#   - ss1</span></span>
<span class="line">    <span class="token comment">#   - ss2</span></span>
<span class="line">    <span class="token comment">#   - vmess1</span></span>
<span class="line">    <span class="token comment"># tolerance: 150</span></span>
<span class="line">    <span class="token comment"># lazy: true</span></span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://www.gstatic.com/generate_204&#39;</span></span>
<span class="line">    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">300</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># fallback-auto 基于优先级选择可用策略. 可用性通过访问 指定URL 来测试, 就像自动 url-test 组一样.</span></span>
<span class="line">  <span class="token comment"># - name: &quot;fallback-auto&quot;</span></span>
<span class="line">  <span class="token comment">#   type: fallback</span></span>
<span class="line">  <span class="token comment">#   proxies:</span></span>
<span class="line">  <span class="token comment">#     - ss1</span></span>
<span class="line">  <span class="token comment">#     - ss2</span></span>
<span class="line">  <span class="token comment">#     - vmess1</span></span>
<span class="line">  <span class="token comment">#   url: &#39;http://www.gstatic.com/generate_204&#39;</span></span>
<span class="line">  <span class="token comment">#   interval: 300</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 负载均衡: 同一 eTLD+1 的请求将拨号到同一代理.</span></span>
<span class="line">  <span class="token comment"># - name: &quot;load-balance&quot;</span></span>
<span class="line">  <span class="token comment">#   type: load-balance</span></span>
<span class="line">  <span class="token comment">#   proxies:</span></span>
<span class="line">  <span class="token comment">#     - ss1</span></span>
<span class="line">  <span class="token comment">#     - ss2</span></span>
<span class="line">  <span class="token comment">#     - vmess1</span></span>
<span class="line">  <span class="token comment">#   url: &#39;http://www.gstatic.com/generate_204&#39;</span></span>
<span class="line">  <span class="token comment">#   interval: 300</span></span>
<span class="line">    <span class="token comment"># strategy: consistent-hashing # or round-robin</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># select 手动选择, 用于选择代理或策略组</span></span>
<span class="line">  <span class="token comment"># 您可以使用 RESTful API 来切换代理, 建议在GUI中切换.</span></span>
<span class="line">  <span class="token comment"># - name: Proxy</span></span>
<span class="line">  <span class="token comment">#   type: select</span></span>
<span class="line">    <span class="token comment"># disable-udp: true</span></span>
<span class="line">    <span class="token comment"># filter: &#39;someregex&#39;</span></span>
<span class="line">    <span class="token comment"># proxies:</span></span>
<span class="line">    <span class="token comment">#   - ss1</span></span>
<span class="line">    <span class="token comment">#   - ss2</span></span>
<span class="line">    <span class="token comment">#   - vmess1</span></span>
<span class="line">    <span class="token comment">#   - auto</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 直接连接到另一个接口名称或fwmark</span></span>
<span class="line">  <span class="token comment"># - name: en1</span></span>
<span class="line">  <span class="token comment">#   type: select</span></span>
<span class="line">  <span class="token comment">#   interface-name: en1</span></span>
<span class="line">  <span class="token comment">#   routing-mark: 6667</span></span>
<span class="line">  <span class="token comment">#   proxies:</span></span>
<span class="line">  <span class="token comment">#     - DIRECT</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 直接连接到另一个代理提供者</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> UseProvider</span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> select</span>
<span class="line">    <span class="token key atrule">use</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> provider1</span>
<span class="line">    <span class="token comment"># proxies:</span></span>
<span class="line">    <span class="token comment">#   - Proxy</span></span>
<span class="line">    <span class="token comment">#   - DIRECT</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">proxy-providers</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">provider1</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> http</span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;url&quot;</span></span>
<span class="line">    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">3600</span></span>
<span class="line">    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./provider1.yaml</span>
<span class="line">    <span class="token key atrule">health-check</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span></span>
<span class="line">      <span class="token comment"># lazy: true</span></span>
<span class="line">      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204</span>
<span class="line">  <span class="token comment"># test:</span></span>
<span class="line">  <span class="token comment">#   type: file</span></span>
<span class="line">  <span class="token comment">#   path: /test.yaml</span></span>
<span class="line">  <span class="token comment">#   health-check:</span></span>
<span class="line">  <span class="token comment">#     enable: true</span></span>
<span class="line">  <span class="token comment">#     interval: 36000</span></span>
<span class="line">  <span class="token comment">#     url: http://www.gstatic.com/generate_204</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># tunnels:</span></span>
<span class="line">  <span class="token comment"># 单行配置</span></span>
<span class="line">  <span class="token comment"># - tcp/udp,127.0.0.1:6553,114.114.114.114:53,proxy</span></span>
<span class="line">  <span class="token comment"># - tcp,127.0.0.1:6666,rds.mysql.com:3306,vpn</span></span>
<span class="line">  <span class="token comment"># 全 yaml 配置</span></span>
<span class="line">  <span class="token comment"># - network: [tcp, udp]</span></span>
<span class="line">  <span class="token comment">#   address: 127.0.0.1:7777</span></span>
<span class="line">  <span class="token comment">#   target: target.com</span></span>
<span class="line">  <span class="token comment">#   proxy: proxy</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">rules</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>SUFFIX<span class="token punctuation">,</span>google.com<span class="token punctuation">,</span>auto</span>
<span class="line">  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>KEYWORD<span class="token punctuation">,</span>google<span class="token punctuation">,</span>auto</span>
<span class="line">  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>google.com<span class="token punctuation">,</span>auto</span>
<span class="line">  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>SUFFIX<span class="token punctuation">,</span>ad.com<span class="token punctuation">,</span>REJECT</span>
<span class="line">  <span class="token punctuation">-</span> SRC<span class="token punctuation">-</span>IP<span class="token punctuation">-</span>CIDR<span class="token punctuation">,</span>192.168.1.201/32<span class="token punctuation">,</span>DIRECT</span>
<span class="line">  <span class="token comment"># 用于 IP 规则 (GEOIP, IP-CIDR, IP-CIDR6) 的可选参数 &quot;no-resolve&quot;</span></span>
<span class="line">  <span class="token punctuation">-</span> IP<span class="token punctuation">-</span>CIDR<span class="token punctuation">,</span>127.0.0.0/8<span class="token punctuation">,</span>DIRECT</span>
<span class="line">  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>CN<span class="token punctuation">,</span>DIRECT</span>
<span class="line">  <span class="token punctuation">-</span> DST<span class="token punctuation">-</span>PORT<span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span>DIRECT</span>
<span class="line">  <span class="token punctuation">-</span> SRC<span class="token punctuation">-</span>PORT<span class="token punctuation">,</span><span class="token number">7777</span><span class="token punctuation">,</span>DIRECT</span>
<span class="line">  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>apple<span class="token punctuation">,</span>REJECT <span class="token comment"># 仅 Premium 版本支持</span></span>
<span class="line">  <span class="token punctuation">-</span> MATCH<span class="token punctuation">,</span>auto</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const m=n(p,[["render",i],["__file","Clash.html.vue"]]),o=JSON.parse('{"path":"/wiki/Clash.html","title":"Clash:代理工具核心","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装教程","slug":"安装教程","link":"#安装教程","children":[{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]},{"level":3,"title":"DockerCLI","slug":"dockercli","link":"#dockercli","children":[]}]},{"level":2,"title":"配置文件示例","slug":"配置文件示例","link":"#配置文件示例","children":[]}],"git":{"updatedTime":1738940984000,"contributors":[{"name":"PZJ","email":"68857304+PZJPZJPZJ@users.noreply.github.com","commits":3,"url":"https://github.com/PZJ"}]},"filePathRelative":"wiki/Clash.md"}');export{m as comp,o as data};
