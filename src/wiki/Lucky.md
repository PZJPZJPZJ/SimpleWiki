# Lucky:网络打洞穿透工具
## 下载地址
- [Github](https://github.com/gdy666/lucky)

## DockerCompose部署
```yaml
services:
    lucky:
        image: gdy666/lucky:latest
        container_name: lucky
        volumes:
            - ./goodluck:/goodluck
        network_mode: host
        restart: always
```

## 相关仓库
- [Natter](https://github.com/MikeWang000000/Natter)
- [NATMap](https://github.com/heiher/natmap)