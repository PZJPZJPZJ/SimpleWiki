# Stable Diffusion:图像生成AI模型
## 官方地址
- [官网](https://stability.ai)

## WebUI简易模块界面
### 下载地址
- [Stable Diffusion WebUI](https://github.com/Stability-AI/StableDiffusion)
- [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)

## ComfyUI模块化工作流
### 安装教程
1. 部署[Git](https://github.com/git-for-windows/git/releases)
    - 若下载Installer则直接按步骤安装
    - 若下载Portable则先解压把根目录下的bin加入环境变量PATH中
2. 部署[ComfyUI](https://www.comfy.org)
    - [ComfyUI Desktop](https://dl.todesktop.com/241012ess7yxs0e/windows/nsis/x64)：按照步骤安装即可
    - [ComfyUI Portable](https://github.com/comfyanonymous/ComfyUI)：解压7z，运行根目录下的run_nvidia_gpu.bat，若无NVIDIA显卡则运行run_cpu.bat
3. 访问ComfyUI
    - ComfyUI Desktop可直接从窗口使用
    - 两个版本均可浏览器访问[8000端口](http://localhost:8000)

## WebUI/ComfyUI模型
### CheckPoints
- [StableDiffusion3 Medium](https://huggingface.co/stabilityai/stable-diffusion-3-medium/tree/main)
- [NovelAI](magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc)

## ComfyUI节点
### [节点管理器](https://github.com/ltdrdata/ComfyUI-Manager)()
- 使用Git命令手动安装
```shell
cd ./comfyui/custom_nodes
git pull https://github.com/ltdrdata/ComfyUI-Manager.git
```
### [AIGODLIKE-ComfyUI-Translation](https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Translation.git)
- 界面翻译
    - 安装后需进入设置-AGL-Locale-AGLTranslation-langualge调整语言

### [ComfyUI_Custom_Nodes_AlekPet](https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet.git)
- 拓展功能
    - 无法Import时进入虚拟环境执行`ComfyUI\.venv\Scripts\python -m pip install --upgrade setuptools`

## 推荐教程
- [哔哩哔哩-秋葉](https://space.bilibili.com/12566101)
- [Github-ComfyUI-wiki](https://github.com/602387193c/ComfyUI-wiki)