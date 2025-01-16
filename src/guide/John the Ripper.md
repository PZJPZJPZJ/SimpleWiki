# John the Ripper:文件哈希获取工具
## 使用教程
```shell
#获取ZIP文件哈希并破解
zip2john 文件路径 > zip.hash
john --format=PKZIP > zip.hash
#获取RAR件哈希并破解
rar2john 文件路径 > rar.hash
john --format=RAR5 rar.hash
#获取7Z文件哈希并破解
7z2john 文件路径 > 7z.hash
john --format=7z 7z.hash
```
## 配合Hashcat
```shell
#使用ZIP哈希破解
zip2john 文件路径
hashcat -m 17225 -w 4 -a 3 '文件哈希'
#使用RAR哈希破解
rar2john 文件路径
hashcat -m 13000 -w 4 -a 3 '文件哈希'
#使用7Z哈希破解
7z2john 文件路径
hashcat -m 11600 -w 4 -a 3 '文件哈希'
```