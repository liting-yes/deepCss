# border style

## old envelope

<div class="demo-div border-style_old-envelope"></div>

::: details Click me to view the code
```html
<div class="demo-div border-style_old-envelope"></div>
```

```css
.border-style_old-envelope {
  padding: 20px;
  border: 20px solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, black 0, black 37.5%, transparent 0, transparent 50%) 0 / 60px 60px;
}
```
:::

## ant march

<div class="demo-div border-style_ant-match"></div>

::: details Click me to view the code
```html
<div class="demo-div border-style_ant-match"></div>
```

```css
@keyframes ants {
  to {
    background-position: 100%;
  }
}

.border-style_ant-match {
  padding: 20px;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
  repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 / 10px 10px;
  animation: ants 12s linear infinite;
}
```
:::
