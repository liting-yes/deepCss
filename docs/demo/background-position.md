# background-position

control the relative position of the background image

## attribute value

- `top/bottom/left/right`: relative position to **background-origin**
- `<length>/<percentage>`: offset

## demo

<div class="demo-div background-postion_right-bottom">Background Position</div>

::: details Click me to view the code
```html
<div class="demo-div background-postion_right-bottom">Background Position</div>
```

```css
.background-postion_right-bottom {
    background: url('favicon.png') no-repeat green;
    background-origin: padding-box;
    background-position: right bottom;
}
```
:::