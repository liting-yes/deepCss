# repeating-linear-gradient

repeating linear gradient

## attribute value

- `to top/right/bottom/right`: gradient line direction
- `<angle>`: gradient direaction
- `<linear-color-stop>`: color layout(color + stop)
- `<color-hint>`: gradient over midpoint

## demo

<div class="demo-div repeating-linear-gradient_stripe"></div>

::: details Click me to view the code
```html
<div class="demo-div repeating-linear-gradient_stripe"></div>
```

```css
.repeating-linear-gradient_stripe {
    background: repeating-linear-gradient(20deg, green 0 10px, blue 10px 20px);
}
```
:::