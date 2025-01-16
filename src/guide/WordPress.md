# WordPress:建站平台
## Docker部署
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
1. **缓存设置**  
   - **Mobile Cache**：  
     - 勾选 `Enable caching for mobile devices`。  
     - 勾选子项 `Separate cache files for mobile devices`。
2. **文件优化**  
   - **JavaScript 文件**：  
     - 勾选 `Minify JavaScript files`。  
     - 勾选 `Load JavaScript deferred`。  
     - 勾选 `Delay JavaScript execution`。
   - **媒体文件优化**：  
     - **LazyLoad**：勾选 `Enable for images`。  
     - **Image Dimensions**：勾选 `Add missing image dimensions`。
3. **预加载设置**  
   - **Preload Cache**：勾选 `Activate Preloading`。  
   - **Preload Links**：勾选 `Enable link preloading`。
4. **数据库清理**  
   - **Post Cleanup**：  
     - 勾选 `Revisions`。  
     - 勾选 `Trashed Posts`。  
   - **Transients Cleanup**：勾选 `All transients`。

#### Debloat(CSS 和字体优化)
1. **CSS 优化**  
   - 勾选 `Fix Render-Blocking CSS`。  
   - 勾选 `Inline Optimized CSS`。  
   - 勾选 `Inline Google Fonts CSS`。  
   - 勾选 `Minify CSS`。  
   - 勾选 `Enable Plugin Integrations`（支持 Elementor 和 WPBakery Page Builder）。
2. **Google Fonts 优化**  
   - 勾选 `Optimize Google Fonts`。  
   - **禁用 Google 字体**：  
     - 勾选 `Auto-Configure Subsets`，刷新页面后禁用不需要的字体。  
     - 在 `Optimize Local Fonts` 中，勾选 `Don't Load` 禁用所有字体以默认字体加载页面。

#### Hotjar(操作监控)
#### GTranslate(多语言)
#### Go Portfolio(展示盒组件)
#### WP Cerber Security(安全)
#### Wordpress Pinterest Automatic(自动发布Pinterest)
#### WP Smush Pro(图片批量优化)
#### Converter for Media(图片格式转换)

#### Converter for Media(优化图片格式)
1. **转换策略**：选择 `Optimal`。  
2. **支持的输出格式**：勾选 `WebP`。  
3. **支持的目录**：勾选 `/uploads`。  
4. **新图片自动转换**：打开 `Automatically convert`。

## 网站分析
### Google Tag Manager
1. **代码配置**
   - 选择代码类型：
     - **GA4事件**：填入GA衡量ID并指定事件名称。
     - **GA4配置**：完成事件的代码配置。
   - 设置触发条件：
     - 选择触发器，例如：表单提交跟踪。

2. **触发器设置**
   - 配置WPForm表单提交跟踪，可参考[JS方法](https://medium.com/swlh/capture-wpforms-in-google-tag-manager-21af6b51d1b7)。

3. **发布版本**
   - 确保所有更改发布至最新版本。

### Google Analytics
#### 初始化设置

1. **Google Analytics 数据采集**
   - 通过管理功能设置资源媒体：
     - **数据收集和修改**：
       - 配置数据流，获取衡量ID。
     - **数据显示**：
       - 显示通过GTM返回的事件。
#### 报告概览

1. **事件**
   - 查看事件名称，可将重要事件标记为关键事件。
2. **生命周期分析**
   - **流量获取**：
     - 用户获取情况：
       - 按默认渠道组查看首次互动来源，可选择自定义比较上一个月。
       - 渠道类型包括：
         - **Organic Search**（有机搜索）：自然访客数。
         - **Direct**（直接访问）：通过网址直接进入。
         - **Organic Social**（社交媒体）：通过社交平台获取。
         - **Referral**：谷歌以外的搜索引擎。
         - **Paid Search**：付费访客。
         - **Organic Video**：视频网站流量。
         - **Organic Shopping**：购物网站流量。
       - 数据指标：
         - **新用户数**：总访客量。
         - **询盘客户数**：通过外部xls表格导出。
         - **跳出率**。
         - **平均会话时长**（停留时间）。
     - 国家用户获取情况：
       - 按地理位置分析，添加国家/地区维度。
     - 用户来源/媒介：
       - 查看会话来源，按来源/媒介筛选数据。
   - **互动度**：
     - 查看网页路径和屏幕类交互行为。
#### 业务目标
1. **提高品牌认知度**
   - 分析受众特征：
     - 查看国家/地区分布。
     - 根据具体子主题进行细化分析。
#### 用户分析
1. **技术详情**
   - 按浏览器进行技术分析，识别用户技术偏好。

### [Google PageSpeed Insights](https://pagespeed.web.dev/)
- 指标：
  - **首次内容绘制（First Contentful Paint）**
  - **最大内容绘制（Largest Contentful Paint）**
  - **总阻塞时间（Total Blocking Time）**
  - **累积布局偏移（Cumulative Layout Shift）**
- 工具：
  - [转换为WebP](https://tinypng.com/)
  - [图标使用SVG](https://new.express.adobe.com/tools/convert-to-svg)

### Google Search Console
- 用于检测页面收录情况和优化站点健康状况。

### Google Search Status
- [谷歌更新状态面板](https://status.search.google.com/)
- [谷歌算法更新新闻](https://searchengineland.com/library/platforms/google/google-algorithm-updates)。

### Google Ads
1. **出价策略**
   - **CPC**（点击次数）
   - **CPM**（展示次数）
   - **CPE**（互动次数）
2. **关键词规划**
   - 使用[关键词规划师](https://backlinko.com/google-keyword-planner)进行匹配分析：
     - **广泛匹配**：适合拓展流量来源，但转化率较低。
     - **词组匹配**：关键词顺序固定，前后可添加其他单词。
     - **精确匹配**：严格匹配关键词。
     - **否定关键字**：排除不相关的搜索词。
3. **智能出价**
   - **目标CPA**：优先考虑每次获取成本最低的潜在客户。
   - **目标ROAS**：使广告活动根据广告活动的历史数据（广告支出回报率）获得最大的预算价值。
   - **最大化转化率**：旨在实现最高的转化率。
   - **最大化转化价值**：根据您为每次转化设置的特定值来优化您的推广活动。
4. **进阶功能**
   - **再营销**：通过Cookie跟踪再次投放广告。
   - **UTM代码**：跟踪链接来源并细分效果。
   - 配置转化跟踪确保广告目标达成。

### Semrush
- 域名概览
  - 查看自然流量数据。
  - 关注SERP精选结果（识别流量变化的重点项目）。
  - 分析主要自然搜索关键词，关注排名波动及竞争对手的关键词流量。
- 发现关键词
  - 关键词差异:输入竞对网站，筛选出竞对排名前20低KD的关键词进行铺设
  - 域名概览:输入 `www.reddit.com/r/KeyWord` 进行关键词搜索，得到低竞争术语，使用CPC过滤器（设置为2美元），过滤掉低质量术语
- 关键词概览
  - 优化搜索量和竞争度（优先考虑KD 15%-29%的关键词）。
  - 参考关键词建议，扩展内容范围。
- 推荐工具
  - [海外客](https://www.hiwaike.com/)
  - [SEO Club](https://dash.seogroup.club/)
  - [M123](https://www.m123.com)

## 搜索引擎优化(SEO)技巧
### 相关教程
- [Backlinko](https://backlinko.com)
- [黑帽SEO论坛](https://www.blackhatworld.com)
- [Hubspot网页设计](https://blog.hubspot.com/website/page-layout-design)

### 技巧
- 科普向内容中心
  - FAQ形式
- 条目紧密联系
  - 增加高亮内部链接
  - 侧边栏引导类似条目
- 建立内容联盟
  - 合作撰写文章
- URL参数分页（减少谷歌索引时间）
  - 使用`?page=2`形式，弃用`/page/2`形式
- 标题附带年份
- 使用扁平网站架构
  - 工具
    - Semrush的Site Audit
    - VisualSitemaps
- 创建评论部分
  - 仅展示高质量评论
    - 审核后展示
    - 增加回复
- SERP
  - 精选摘要
    - 前提是排名在第一页
      - 嵌入视频有利于降低跳出率
    - 片段诱饵
      - 页面添加一段适合精选摘要框的内容

### 发现关键词
- 同义词
  - 整体网页主题比单个关键词重要
- 语义相关词（明确页面主题）
  - 多使用同类或联想词
- 潜在语义索引（LSI）关键字
  - Semrush关键字工具
  - 谷歌自动完成（补充建议词）
  - 谷歌相关搜索（底部粗体词和搜索结果粗体词）
  - 谷歌关键字规划师（Google Keyword Planner）
  - 谷歌图片搜索（顶部相关术语）

### Trustpilot刷网站评论
- 淘宝:森摩尔网络

### 去AI化
- ChatGPT提示词优化
	- 更主动的语态：少使用被动语态，
	- 融入个人轶事：使用亲身经历分享的方式讲述故事，多用第一人称
	- 表达更多情感：提供给AI想要的语气和风格
	- 更多句子变化：利用AI模仿地道美国人讲话，可以出现语法错误，但是要能读懂
- [HIX Bypass](https://bypass.hix.ai/zh)
- [GPTZero](https://bypass.hix.ai/zh/bypass-gptzero)
- [Originality.ai](https://bypass.hix.ai/zh/bypass-originality-ai)

## 相关工具
### 转换图片格式
```python
import os
from PIL import Image

def resize_and_convert_to_webp(input_path, output_path, max_width):
    try:
        with Image.open(input_path) as image:
            width, height = image.size
            if width > max_width:
                # 计算新的高度以保持宽高比
                new_height = int((max_width / width) * height)
                resized_image = image.resize((max_width, new_height), Image.ANTIALIAS)
            else:
                resized_image = image

            # 转换为 RGB 格式并保存为 WebP
            resized_image = resized_image.convert("RGB")
            resized_image.save(output_path, "webp")
            print(f"Converted to WebP: {output_path}")
    except Exception as e:
        print(f"Error processing image {input_path}: {e}")

def search_images(input_dir, output_dir_name, max_width):
    for root, dirs, files in os.walk(input_dir):
        # 构造输出目录路径
        output_dir = os.path.join(root, output_dir_name)
        
        # 如果当前目录是指定的输出目录，跳过它
        if os.path.basename(root).lower() == output_dir_name.lower():
            continue

        # 创建输出目录（如果不存在）
        os.makedirs(output_dir, exist_ok=True)

        for file in files:
            file_name, file_extension = os.path.splitext(file)
            file_extension = file_extension.lower()[1:]  # 去掉扩展名的点
            input_path = os.path.join(root, file)
            webp_path = os.path.join(output_dir, file_name + '.webp')  # 最终 WebP 文件路径

            if file_extension in ['png', 'jpg', 'jpeg', 'webp']:
                try:
                    # 直接进行等比缩放并转换为 WebP
                    resize_and_convert_to_webp(input_path, webp_path, max_width=max_width)
                except Exception as e:
                    print(f"Error processing file {input_path}: {e}")

if __name__ == "__main__":
    search_images(input_dir=r"D:\Users\下载", output_dir_name="output", max_width=2560)
```