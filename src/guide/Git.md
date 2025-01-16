# Git:版本控制
## 安装配置
1. 安装[Git](https://github.com/git-for-windows/git/releases)
- 若下载Installer则直接按步骤安装
- 若下载Portable则先解压把根目录下的bin加入环境变量PATH中
2. 编辑配置
- Github等版本控制托管站禁止默认邮箱推送
- 访问Github>Setting>Email中查看匿名邮箱配置
```shell
# 查看配置和存储位置
git config --list --show-origin
# 配置全局用户信息
git config --global user.name "用户名"
git config --global user.email "邮箱"
# 配置单个项目用户信息，在项目目录下运行
git config user.name "用户名"
git config user.email "邮箱"
```