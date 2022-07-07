# background-color scope

## `background-clip`

- border-box

element background color touches border

- padding-box

element background color touches padding

- content-box

element background color touches content

## demo

### `background-clip: border-box`

<div class="demo-div background-clip_border-box">Border Box</div>

::: details Click me to view the code
```html
<div class="demo-div background-clip_border-box">Border Box</div>
```

```css
.background-clip_border-box {
    background: #FF0000;
    background-clip: border-box;
    border: 10px solid rgba(255, 0, 0, .5);
}
```
:::

### `background-clip: paddind-box`

<div class="demo-div background-clip_padding-box">Padding Box</div>

::: details Click me to view the code
```html
<div class="demo-div background-clip_padding-box">Padding Box</div>
```

```css
.background-clip_padding-box {
    background: #FF0000;
    background-clip: padding-box;
    border: 10px solid rgba(255, 0, 0, .5);
}
```
:::

### `background-clip: content-box`

<div class="demo-div background-clip_content-box">Content Box</div>

::: details Click me to view the code
```html
<div class="demo-div background-clip_content-box">Content Box</div>
```

```css
.background-clip_content-box {
    background: #FF0000;
    background-clip: content-box;
    border: 10px solid rgba(255, 0, 0, .5);
}
```
:::
