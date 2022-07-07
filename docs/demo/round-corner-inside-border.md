# rounded conners inside border

> the implementation of `outline` may change in the future

<div class="demo-div round-corner-inside-border">
    <div>Rounded Conners Inside Border</div>
</div>

::: details Click me to view the code
```html
<div class="demo-div round-corner-inside-border">
    <div>Rounded Conners Inside Border</div>
</div>
```

```css
.round-corner-inside-border {
    background: red;
}

.round-corner-inside-border > div {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: burlywood;
}
```
:::