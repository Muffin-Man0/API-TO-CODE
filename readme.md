
### API-TO-TS



# cli 工具

- 全局安装 cli 工具: `npm i api2code -g`

## axios + TS + Interface 初始化

- 项目初始化: `api2code generator axios yapi导出的json文件`
- 选项: `-o <output>`
## uniapp 初始化

- 项目初始化: `api2code generator uniapp yapi导出的json文件`
- 选项: `-o <output>`
- 
## API 的使用
- 服务器请求地址: `src/api/baseURL`
- axios 的请求拦截和响应拦截: `src/api/apiConfig`
- 请求的接口地址放在: `src/api/url`
- 请求的方法封装放在: `src/api/httpApi`
- 常用的 axios 方法封装放在: `src/api/apiFn` 

