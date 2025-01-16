# MySQL:数据库服务端
## 服务模式
```shell
# 进入文件夹
cd bin
# 初始化数据库（记住初始密码）
mysqld --initialize --console
# 安装服务（管理员权限）
mysqld --install mysql
# 启动服务（管理员权限）
net start mysql
# 打开数据库控制台（使用初始密码登录）
mysql -u root -p
# 修改数据库密码（示例为password）
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
# 停止服务（管理员权限）
net stop mysql
# 卸载服务（管理员权限）
mysqld --remove
```
## 非服务模式
```shell
# 进入文件夹
cd bin
# 初始化数据库（记住初始密码）
mysqld --initialize --console
# 打开数据库控制台（使用初始密码登录）
mysql -u root -p
# 修改数据库密码（示例为password）
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
# 运行数据库
mysqld --standalone 
```