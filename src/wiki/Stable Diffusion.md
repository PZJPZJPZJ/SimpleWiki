# Stable Diffusion:图像生成AI模型
## 官方地址
- [官网](https://stability.ai)
- [GitHub](https://github.com/Stability-AI/StableDiffusion)

## WebUI简易模块界面
### 下载地址
- [Stable Diffusion WebUI A1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [Stable Diffusion WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)

## ComfyUI模块化工作流
### 安装教程
1. 部署[Git](https://github.com/git-for-windows/git/releases)
    - 若下载Installer可跳过该步骤
    - 若下载Portable则先解压把根目录下的bin加入环境变量PATH中
2. 部署[ComfyUI](https://www.comfy.org)
    - [ComfyUI Desktop](https://dl.todesktop.com/241012ess7yxs0e/windows/nsis/x64)：按照步骤安装即可
    - [ComfyUI Portable](https://github.com/comfyanonymous/ComfyUI)：解压7z，运行根目录下的run_nvidia_gpu.bat，若无NVIDIA显卡则运行run_cpu.bat
3. 访问ComfyUI
    - 均可通过浏览器访问[8000端口](http://localhost:8000)

## WebUI/ComfyUI模型
### CheckPoints基础模型
- [Hugging Face](https://huggingface.co)
    - [Anything v5](https://huggingface.co/swl-models/Anything-v5.0-PRT/resolve/8f4143c96d5a9a9869061b5c3ea71a1d962790be/Anything-v5.0-PRT-RE.safetensors)
    - [StableDiffusion3 Medium](https://huggingface.co/stabilityai/stable-diffusion-3-medium/tree/main)
    - [StableDiffusion3 Large](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/tree/main)
- [NovelAI](magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc)

### UpscaleModels超分辨率模型
- [超分模型下载](https://openmodeldb.info/)
    - [BSRGAN x2](https://github.com/cszn/KAIR/releases/download/v1.0/BSRGANx2.pth)
    - [RealESRGAN x4Plus Anime](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth)
    - [UltraSharp 4x](https://mega.nz/folder/qZRBmaIY#nIG8KyWFcGNTuMX_XNbJ_g)
    - [SwinIR 4x](https://github.com/Kim2091/Kim2091-Models/releases/download/4x-SwinIR-M_Pretrain/4x-SwinIR-M_Pretrain.pth)

### VAE变分自编码器模型
- [AnimeVAE-NovalAI原版](https://huggingface.co/swl-models/animvae/resolve/main/animevae.pt)

### Hypernetwork超网络模型

### Embedding嵌入式模型

### LoRA低秩适应模型

### Controlnet控制模型


## ComfyUI节点
### [ComfyUI Manager](https://github.com/ltdrdata/ComfyUI-Manager)
- 手动安装节点管理器:在软件根目录custom_nodes文件夹下使用Git命令`git pull https://github.com/ltdrdata/ComfyUI-Manager.git`

### [ComfyUI Translation](https://github.com/AIGODLIKE/AIGODLIKE-ComfyUI-Translation.git)
- 界面翻译:安装后需进入设置-AGL-Locale-AGLTranslation-langualge调整语言

### [AlekPet](https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet.git)
- 无法Import时进入虚拟环境执行`ComfyUI\.venv\Scripts\python -m pip install --upgrade setuptools`

### [Inspire Pack](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)
- A1111WebUI兼容性支持
    - KSampler(Inspire):ComfyUI使用CPU生成随机噪声，而A1111使用GPU
        - 配合[Advanced CLIP Text Encode](https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb)的CLIP文本编码器(BNK)，权重插值选择A1111

## 推荐教程
- [哔哩哔哩-秋葉](https://space.bilibili.com/12566101)
- [Github-ComfyUI-wiki](https://github.com/602387193c/ComfyUI-wiki)
- [ComfyUI Wiki](https://comfyui-wiki.com/)