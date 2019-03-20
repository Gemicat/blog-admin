# blog-admin
博客后端管理界面

# 开发中遇到的问题

- global.less 中引入 `reset-css` 模块后，修改热加载无效，解决方案是在 `/config/config.js` 中的 `dll` 加上 `exclude: ['reset-css']`, From Issues: [https://github.com/umijs/umi/issues/1566](https://github.com/umijs/umi/issues/1566)