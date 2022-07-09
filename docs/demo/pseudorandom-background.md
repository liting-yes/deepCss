# pseudorandom background

**Zen Principle**: increase randomness with prime numbers

## demo

<div class="demo-div pseudorandom-background"></div>

::: details Click me to view the code
```html
<div class="demo-div pseudorandom-background"></div>
```

```css
.pseudorandom-background {
    background: #d9d9d9;
    background-image: linear-gradient(90deg, red, 11px, transparent 0),
        linear-gradient(90deg, green 23px, transparent 0),
        linear-gradient(90deg, blue 41px, transparent 0);
    background-size: 41px 100%, 61px 100%, 83px 100%;
}
```
:::