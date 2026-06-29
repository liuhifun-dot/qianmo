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

## Cloudflare Pages 部署

1. 将本项目推送到 GitHub 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 进入 **Workers & Pages** → **Pages** → **连接到 Git**
4. 选择 GitHub 仓库，配置：
   - **构建命令**：留空（纯静态无需构建）
   - **输出目录**：`public`
5. 点击部署

## 本地预览

```bash
# 任意静态服务器均可，例如：
npx serve public
# 或 Python
python -m http.server 8080 -d public
```
