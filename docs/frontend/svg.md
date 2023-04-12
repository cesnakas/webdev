---
title: SVG
---

# SVG

Scalable Vector Graphics — масштабируемая векторная графика

### path

### stroke-dasharray

```scss
svg path {
    stroke-width: 2;
    stroke-dasharray: 550 0;
}

svg path:hover {
    stroke-dasharray: 0 500;
}
```

### SVG Sprites

```html
<svg xmlns="http://www.w3.org/2000/svg">
    <symbol viewBox="0 0 100 100" id="exampleIcon">
        <!-- SVG Image -->
    </symbol>
</svg>
```

```html
<svg width="100" height="100">
    <use xlink:href="#exampleIcon"></use>
</svg>
```
