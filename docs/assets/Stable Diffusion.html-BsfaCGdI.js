import{_ as a,c as l,a as i,o as n}from"./app-Bilr1A_J.js";const t={};function r(o,e){return n(),l("div",null,e[0]||(e[0]=[i(`<h1 id="stable-diffusion-图像生成ai模型" tabindex="-1"><a class="header-anchor" href="#stable-diffusion-图像生成ai模型"><span>Stable Diffusion:图像生成AI模型</span></a></h1><h2 id="官方地址" tabindex="-1"><a class="header-anchor" href="#官方地址"><span>官方地址</span></a></h2><ul><li><a href="https://stability.ai" target="_blank" rel="noopener noreferrer">官网</a></li></ul><h2 id="webui简易模块界面" tabindex="-1"><a class="header-anchor" href="#webui简易模块界面"><span>WebUI简易模块界面</span></a></h2><h3 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址"><span>下载地址</span></a></h3><ul><li><a href="https://github.com/Stability-AI/StableDiffusion" target="_blank" rel="noopener noreferrer">Stable Diffusion WebUI</a></li><li><a href="https://github.com/lllyasviel/stable-diffusion-webui-forge" target="_blank" rel="noopener noreferrer">Stable Diffusion WebUI Forge</a></li></ul><h2 id="comfyui模块化工作流" tabindex="-1"><a class="header-anchor" href="#comfyui模块化工作流"><span>ComfyUI模块化工作流</span></a></h2><h3 id="安装教程" tabindex="-1"><a class="header-anchor" href="#安装教程"><span>安装教程</span></a></h3><ol><li>部署<a href="https://github.com/git-for-windows/git/releases" target="_blank" rel="noopener noreferrer">Git</a><ul><li>若下载Installer则直接按步骤安装</li><li>若下载Portable则先解压把根目录下的bin加入环境变量PATH中</li></ul></li><li>部署<a href="https://www.comfy.org" target="_blank" rel="noopener noreferrer">ComfyUI</a><ul><li><a href="https://dl.todesktop.com/241012ess7yxs0e/windows/nsis/x64" target="_blank" rel="noopener noreferrer">ComfyUI Desktop</a>：按照步骤安装即可</li><li><a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI Portable</a>：解压7z，运行根目录下的run_nvidia_gpu.bat，若无NVIDIA显卡则运行run_cpu.bat</li></ul></li><li>访问ComfyUI <ul><li>ComfyUI Desktop可直接从窗口使用</li><li>两个版本均可浏览器访问<a href="http://localhost:8000" target="_blank" rel="noopener noreferrer">8000端口</a></li></ul></li></ol><h2 id="webui-comfyui模型" tabindex="-1"><a class="header-anchor" href="#webui-comfyui模型"><span>WebUI/ComfyUI模型</span></a></h2><h3 id="checkpoints" tabindex="-1"><a class="header-anchor" href="#checkpoints"><span>CheckPoints</span></a></h3><ul><li><a href="https://huggingface.co/stabilityai/stable-diffusion-3-medium/tree/main" target="_blank" rel="noopener noreferrer">StableDiffusion3 Medium</a></li><li><a href="magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc" target="_blank" rel="noopener noreferrer">NovelAI</a></li></ul><h2 id="comfyui节点" tabindex="-1"><a class="header-anchor" href="#comfyui节点"><span>ComfyUI节点</span></a></h2><h3 id="节点管理器" tabindex="-1"><a class="header-anchor" href="#节点管理器"><span><a href="https://github.com/ltdrdata/ComfyUI-Manager" target="_blank" rel="noopener noreferrer">节点管理器</a>()</span></a></h3><ul><li>使用Git命令手动安装</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> ./comfyui/custom_nodes</span>
<span class="line"><span class="token function">git</span> pull https://github.com/ltdrdata/ComfyUI-Manager.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aigodlike-comfyui-translation" tabindex="-1"><a class="header-anchor" href="#aigodlike-comfyui-translation"><span><a href="https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Translation.git" target="_blank" rel="noopener noreferrer">AIGODLIKE-ComfyUI-Translation</a></span></a></h3><ul><li>界面翻译 <ul><li>安装后需进入设置-AGL-Locale-AGLTranslation-langualge调整语言</li></ul></li></ul><h3 id="comfyui-custom-nodes-alekpet" tabindex="-1"><a class="header-anchor" href="#comfyui-custom-nodes-alekpet"><span><a href="https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet.git" target="_blank" rel="noopener noreferrer">ComfyUI_Custom_Nodes_AlekPet</a></span></a></h3><ul><li>拓展功能 <ul><li>无法Import时进入虚拟环境执行<code>ComfyUI\\.venv\\Scripts\\python -m pip install --upgrade setuptools</code></li></ul></li></ul><h2 id="推荐教程" tabindex="-1"><a class="header-anchor" href="#推荐教程"><span>推荐教程</span></a></h2><ul><li><a href="https://space.bilibili.com/12566101" target="_blank" rel="noopener noreferrer">哔哩哔哩-秋葉</a></li><li><a href="https://github.com/602387193c/ComfyUI-wiki" target="_blank" rel="noopener noreferrer">Github-ComfyUI-wiki</a></li></ul>`,22)]))}const h=a(t,[["render",r],["__file","Stable Diffusion.html.vue"]]),c=JSON.parse('{"path":"/wiki/Stable%20Diffusion.html","title":"Stable Diffusion:图像生成AI模型","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"官方地址","slug":"官方地址","link":"#官方地址","children":[]},{"level":2,"title":"WebUI简易模块界面","slug":"webui简易模块界面","link":"#webui简易模块界面","children":[{"level":3,"title":"下载地址","slug":"下载地址","link":"#下载地址","children":[]}]},{"level":2,"title":"ComfyUI模块化工作流","slug":"comfyui模块化工作流","link":"#comfyui模块化工作流","children":[{"level":3,"title":"安装教程","slug":"安装教程","link":"#安装教程","children":[]}]},{"level":2,"title":"WebUI/ComfyUI模型","slug":"webui-comfyui模型","link":"#webui-comfyui模型","children":[{"level":3,"title":"CheckPoints","slug":"checkpoints","link":"#checkpoints","children":[]}]},{"level":2,"title":"ComfyUI节点","slug":"comfyui节点","link":"#comfyui节点","children":[{"level":3,"title":"节点管理器()","slug":"节点管理器","link":"#节点管理器","children":[]},{"level":3,"title":"AIGODLIKE-ComfyUI-Translation","slug":"aigodlike-comfyui-translation","link":"#aigodlike-comfyui-translation","children":[]},{"level":3,"title":"ComfyUI_Custom_Nodes_AlekPet","slug":"comfyui-custom-nodes-alekpet","link":"#comfyui-custom-nodes-alekpet","children":[]}]},{"level":2,"title":"推荐教程","slug":"推荐教程","link":"#推荐教程","children":[]}],"git":{"updatedTime":1738166571000,"contributors":[{"name":"PZJ","email":"68857304+PZJPZJPZJ@users.noreply.github.com","commits":3,"url":"https://github.com/PZJ"}]},"filePathRelative":"wiki/Stable Diffusion.md"}');export{h as comp,c as data};
