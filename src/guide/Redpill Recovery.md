# Redpill Recovery:群晖系统引导
## 下载地址
- https://github.com/RROrg/rr

## 使用方法
1. 使用镜像工具将rr.img写入硬盘
2. 启动系统并选择Configure loader
3. 使用浏览器打开控制台提示配置地址
4. 进入Choose a language选择zh_CN
5. 进入解析pat手动上传系统或在线下载
6. 进入编译引导
7. 选择启动即可进入系统
8. 进入系统安装网页选择pat进行系统安装

## Docker群晖
### Docker Compose
- [Github](https://github.com/vdsm/virtual-dsm)
```yaml
services:
  dsm:
    container_name: dsm
    image: vdsm/virtual-dsm
    environment:
      DISK_SIZE: "16G"
    devices:
      - /dev/kvm
      - /dev/net/tun
    cap_add:
      - NET_ADMIN
    ports:
      - 5000:5000
    volumes:
      - /var/dsm:/storage
    stop_grace_period: 2m
```