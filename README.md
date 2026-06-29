# 千幕 Qianmu — Light Structure Studio Website

A black-and-white static website for Qianmu / 千幕, designed for Cloudflare Workers / Pages deployment from the `public` directory.

## Structure

```txt
public/
├── index.html
├── services/index.html
├── projects/index.html
├── contact/index.html
├── assets/css/qianmu.css
├── assets/js/qianmu.js
├── assets/images/qianmu-logo.png
├── assets/images/qianmu-background.jpg
├── robots.txt
├── sitemap.xml
└── _headers
```

## Deployment

Cloudflare build settings:

```txt
Build command: exit 0
Build output directory: public
Root directory: empty
```

## First version notes

- Main brand name: 千幕 / Qianmu
- English positioning: Light Structure Studio
- Main visual language: black, white, paper, line, editorial spacing
- The contact form is static; connect a real form service later.
