# Lucky:网络穿透工具
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