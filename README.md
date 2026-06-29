# 千幕 QianMo — 品牌设计与数字创意

千幕官方品牌网站。纯静态站点，可直接部署至 Cloudflare Pages / Vercel / Netlify 等静态托管平台。

## 项目结构

```
qianmo/
├── public/                 # 站点根目录（Cloudflare Pages 部署根）
│   ├── index.html          # 首页
│   ├── services/
│   │   └── index.html      # 服务页
│   ├── projects/
│   │   └── index.html      # 案例页
│   ├── contact/
│   │   └── index.html      # 联系页
│   └── assets/
│       ├── css/
│       │   └── qianmo.css  # 样式
│       ├── js/
│       │   └── qianmo.js   # 脚本
│       └── images/         # 图片资源
└── README.md
```

## 技术栈

- HTML5 + CSS3 + Vanilla JS
- 响应式设计（移动端适配）
- 无框架依赖，零构建步骤

# Qianmo Lighting public site

Static website files for Cloudflare Pages.

Cloudflare Pages settings:
- Framework preset: None
- Build command: exit 0
- Build output directory: public

Pages:
- /
- /services/
- /projects/
- /contact/
