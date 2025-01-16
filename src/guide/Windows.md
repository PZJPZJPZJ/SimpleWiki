# Windows:系统安装
## 下载链接
### Windows XP
- [MSDN](https://msdn.itellyou.cn/)
- [x86 ED2K](ed2k://|file|zh-hans_windows_xp_professional_with_service_pack_3_x86_cd_x14-80404.iso|630239232|CD0900AFA058ACB6345761969CBCBFF4|/)
### Windows Vista
- [MSDN](https://next.itellyou.cn/)
- [x86 ED2K](ed2k://|file|cn_windows_vista_enterprise_with_sp2_x86_dvd_x15-40257.iso|2348410880|A567A6C970038233C0B2B7F130ADEF23|/)
- [x64 ED2K](ed2k://|file|cn_windows_vista_enterprise_with_sp2_x64_dvd_x15-40402.iso|3104415744|D0CF708192BF9596CC603DF53ABDB76D|/)
### Windows 7
- [MSDN](https://next.itellyou.cn/)
- [x86 BT](magnet:?xt=urn:btih:585DF592DE43A067C75CFE5A639B41FC3F24DA6F&dn=cn_windows_7_ultimate_with_sp1_x86_dvd_u_677486.iso&xl=2653276160)
- [x64 BT](magnet:?xt=urn:btih:E86414F638E11104248108B155BE9408A8362509&dn=cn_windows_7_ultimate_with_sp1_x64_dvd_u_677408.iso&xl=34205573124)
### Windows 8
- [MSDN](https://next.itellyou.cn/)
- [x86 ED2K](ed2k://|file|cn_windows_8_enterprise_x86_dvd_917682.iso|2597502976|7B6541942A16EB54BC81E84558DF09DF|/)
- [x64 ED2K](ed2k://|file|cn_windows_8_enterprise_x64_dvd_917570.iso|3560837120|8CAE8064C4B8F9CD84941B4FF4A34722|/)
### Windows 8.1
- [MSDN](https://next.itellyou.cn/)
- [x86 ED2K](ed2k://|file|cn_windows_8.1_enterprise_with_update_x86_dvd_6050645.iso|3199901696|0209A1FDE82A5AC7A248B4CA3F860F2B|/)
- [x64 ED2K](ed2k://|file|cn_windows_8.1_enterprise_with_update_x64_dvd_6050374.iso|4317065216|AC8215A13817CC0EC4EA42E5C92E88B7|/)
### Windows 10
- [官网](https://www.microsoft.com/zh-cn/software-download/windows10)
- [x86 BT](magnet:?xt=urn:btih:9aa435b8c71fa2a85a3df83d5b33e385727ae5d5&dn=zh-cn_windows_10_consumer_editions_version_22h2_updated_oct_2024_x86_dvd_d0cfb2e9.iso&xl=5049681920)
- [x64 BT](magnet:?xt=urn:btih:f5001d461ae74a2833b0cbe6d768b06f436443bc&dn=zh-cn_windows_10_consumer_editions_version_22h2_updated_oct_2024_x64_dvd_d0cfb2e9.iso&xl=7167156224)
- [arm64 BT](magnet:?xt=urn:btih:1254374ee4000b9e8fed508fe2fdcdd8f49c2161&dn=SW_DVD9_Win_Pro_10_22H2.3_64ARM_ChnSimp_Pro_Ent_EDU_N_MLF_X23-36949.ISO&xl=5333610496)
### Windows 11
- [官网](https://www.microsoft.com/zh-cn/software-download/windows11)
- [x64 BT](magnet:?xt=urn:btih:2fc6fc24f7d56d1def32ae0334d2df0cd3b855ea&dn=zh-cn_windows_11_consumer_editions_version_24h2_x64_dvd_bfc0d79b.iso&xl=5829044224)
- [arm64 BT](magnet:?xt=urn:btih:7aa30070e35c2e38491a7f7addb014623818f2e5&dn=zh-cn_windows_11_consumer_editions_version_24h2_arm64_dvd_4b5c8070.iso&xl=5674188800)
## 安装步骤
### 直接使用镜像安装
#### 镜像准备
- 使用[qBittorrent](https://www.fosshub.com/qBittorrent.html)下载ISO镜像的BT链接
#### 使用WindowsPC辅助安装准备
1. 使用DiskGenius选择U盘(8G及以上)分区方案
   - 推荐转换为MBR分区
       - 仅支持Legacy启动的电脑（约2010年前）
       - 支持UEFI启动的电脑
   - 转换为GPT分区
       - 支持UEFI启动的电脑
       - 有多于4个分区或多EFI启动的需求
2. 使用DiskGenius格式化U盘
   - 格式化为FAT32格式
       - 仅支持Legacy启动的电脑（约2010年前）
       - 仅支持FAT32分区UEFI启动的电脑（约2015年前）
       - U盘有其他特殊设备用途（旧版安卓或传统设备使用）
   - 推荐格式化为ExFAT
       - 写入设备为U盘
       - 支持从任意格式分区UEFI启动的电脑
       - 镜像内单文件超过4G
   - 格式化为NTFS
       - 写入设备为硬盘
#### 使用Android手机辅助安装准备
1. 使用OTG转接头或手机接口U盘(8G及以上)插入手机
2. 确认U盘格式
   - FAT32为默认安卓格式化格式
       - 适用于所有支持UEFI启动的电脑
   - ExFAT或NTFS
       - 不适用于仅支持从FAT32分区UEFI启动的电脑
   - FAT16
       - 仅适用于特殊情况的UEFI启动
3. 使用解压软件或自带文件管理解压ISO到U盘根目录
   - 确保EFI文件夹位于U盘根目录
4. 解压完成在下拉状态栏或设置安全弹出U盘
   - 安卓设备往往写入会使用缓存，安全弹出能确保写入已完成
### 使用WindowsPE系统辅助安装

## 优化脚本
### 修改右键菜单风格(管理员权限)
```shell
# 新样式(Win11)
reg delete "HKEY_CURRENT_USER\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f
# 旧样式(Win10)
reg add "HKEY_CURRENT_USER\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
# 修改结束后重启资源管理器
tskill explorer
```
### 恢复睡眠功能(管理员权限)
```shell
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v AwayModeEnabled /t REG_DWORD /d 0 /f
```
### 删除WindowsDefender记录(SYSTEM权限或PE执行)
```shell
rd /s /Q "C:\ProgramData\Microsoft\Windows Defender\Scans\History\Service\DetectionHistory"
```
### 删除聚焦桌面图标(管理员权限)
```shell
# 关闭图标
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {2CC5CA98-6485-489A-920E-B3E88A6CCCE3} /t REG_DWORD /d 1 /f
# 开启图标
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" /v {2CC5CA98-6485-489A-920E-B3E88A6CCCE3} /t REG_DWORD /d 0 /f
# 修改结束后重启资源管理器
tskill explorer
```
### 删除图标缓存
```shell
taskkill /f /im explorer.exe
attrib -h -s -r "%userprofile%\AppData\Local\IconCache.db"
del /f "%userprofile%\AppData\Local\IconCache.db"
start explorer.exe
```
### 生成电池报告
```shell
powercfg /batteryreport /output BatteryReport.html
```
### 修改WebDAV安全设置(管理员权限)
```shell
# 使用HTTP
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters" /v BasicAuthLevel /t REG_DWORD /d 2 /f
# 仅使用HTTPS
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters" /v BasicAuthLevel /t REG_DWORD /d 1 /f
```
### 修改错误报告服务(管理员权限)
```shell
# 开启Windows错误报告
reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting" /v Disabled /f
# 关闭Windows错误报告
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting" /v Disabled /t REG_DWORD /d 1 /f
```
### 修改任务栏时间格式(管理员权限)
```shell
# 短时间格式
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v ShowSecondsInSystemClock /t REG_DWORD /d 0 /f
# 长时间格式(显示秒数)
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v ShowSecondsInSystemClock /t REG_DWORD /d 1 /f
```