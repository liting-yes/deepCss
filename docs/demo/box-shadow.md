# box-shadow

element shadow effect

## attribute value

- inset: control whether the shadow is inside or outside the element

- offset-x/offset-y: shadow offset

- blur-radius: shadow blur area

- spread-radius: shadow spread

## demo

### multiple borders

<div class="demo-div box-shadow_multiple-border">Border Box</div>

::: details Click me to view the code
```html
<div class="demo-div box-shadow_multiple-border">Border Box</div>
```

```css
.box-shadow_multiple-border {
    box-shadow: 0 0 0 6px red, 0 0 0 12px #000000, 0 0 0 18px rgb(242, 226, 3);
}
```
:::

