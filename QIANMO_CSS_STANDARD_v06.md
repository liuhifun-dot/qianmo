# QianMo CSS Standard v06

## Typeface

Use only this stack:

```css
font-family: Arial, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif;
```

## Layout

- Max width: `1320px`
- Desktop horizontal padding: `48px`
- Section spacing: `120px`
- Project card gap: `22px`
- Service card gap: `18px`

## Radius

- All image/card radius: `10px`
- Button/capsule radius: `999px`

## Color

- Black: `#0a0a0a`
- Ink: `#121212`
- Footer background: `#2d2d2d`
- Paper background: `#f3f1ee`
- Card background: `#f6f6f6`
- Border: `#dddddd`

## Interaction

- Project card itself does not move on hover.
- Only the capsule action button moves on hover:

```css
transform: translate(3px, -3px);
transition: transform .95s cubic-bezier(.2,.8,.2,1);
```

## Project page

- 4 cards per row on desktop.
- Layout supports 12 projects per page.
- Current version uses 8 available project images.
- Removed price, rating, stars and carousel dots from the reference card style.

## Footer

- Footer follows a dark multi-column structure.
- Footer font size reduced vs previous version.
