# WordPress:建站平台
## DockerCompose部署
```yaml
services:
  database:
    # We use a mariadb image which supports both amd64 & arm64 architecture
    image: mariadb:10.6.4-focal
    # If you really want to use MySQL, uncomment the following line
    #image: mysql:8.0.27
    command: '--default-authentication-plugin=mysql_native_password'
    volumes:
      - ./db_data:/var/lib/mysql
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=somewordpress
      - MYSQL_DATABASE=wordpress
      - MYSQL_USER=wordpress
      - MYSQL_PASSWORD=wordpress
    expose:
      - 3306
      - 33060
  wordpress:
    image: wordpress:latest
    volumes:
      - ./wp_data:/var/www/html
    ports:
      - 80:80
    restart: always
    environment:
      - WORDPRESS_DB_HOST=db
      - WORDPRESS_DB_USER=wordpress
      - WORDPRESS_DB_PASSWORD=wordpress
      - WORDPRESS_DB_NAME=wordpress
```
## 插件
### 破解网站
- [喵容网付费资源](https://www.miaoroom.com/)
- [麦出果免费资源](https://maichuguo.com/wordpress-plugins/)
### 常用插件
#### Elementor(页面编辑)
- Unlimited Elements for Elementor(高度自定义组件)
- WP-Sweep(清理草稿)
  - 当Elementor出现500报错时，常见为草稿过多。解决办法为进入Tool>Sweep点击清理Revisions
#### WooCommerce(上传商品)
- YITH WooCommerce Ajax Product Filter(商品分类筛选)
#### YaostSEO(SEO优化)
#### WPForms(第三方表单)
#### WP File Manager(文件管理)
#### WP Rocket(速度优化)
#### Debloat(CSS 和字体优化)
#### Hotjar(操作监控)
#### GTranslate(多语言)
#### Wordpress Pinterest Automatic(自动发布Pinterest)
#### Converter for Media(图片格式转换)

## 网站分析
### [Google Analytics](https://analytics.google.com/)
> 谷歌分析

### [Google Search Console](https://search.google.com/search-console/welcome)
> 用于检测页面收录情况和优化站点健康状况

### [Google PageSpeed Insights](https://pagespeed.web.dev/)
> 网页加载速度测试

### [Google Search Status](https://status.search.google.com/)
> 算法更新状态面版

### [Google Ads](https://ads.google.com/)
> 谷歌广告管理面版

### [Google Tag Manager](https://tagmanager.google.com/)
> 谷歌代码跟踪

### Semrush
- [海外客](https://www.hiwaike.com/)
- [SEO Club](https://dash.seogroup.club/)
- [M123](https://www.m123.com)

## 搜索引擎优化技巧
### 相关教程
- [Backlinko](https://backlinko.com)
- [黑帽SEO论坛](https://www.blackhatworld.com)