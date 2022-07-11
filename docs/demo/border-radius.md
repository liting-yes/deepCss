# border-radius

set the outer border of the element to be rounded

## adaptive ellipse

<div class="demo-div border-radius_adaptibe-ellipse"></div>

::: details Click me to view the code
```html
<div class="demo-div border-radius_adaptibe-ellipse"></div>
```

```css
.border-radius_adaptibe-ellipse {
  width: 300px;
  height: 200px;
  background: red;
  border-radius: 50%;
}
```
:::

## half ellipse

<div class="demo-div border-radius_half-ellipse"></div>

::: details Click me to view the code
```html
<div class="demo-div border-radius_half-ellipse"></div>
```

```css
.border-radius_half-ellipse {
  width: 300px;
  height: 200px;
  background: green;
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
}
```
:::

## quarter ellipse

<div class="demo-div border-radius_quarter-ellipse"></div>

::: details Click me to view the code
```html
<div class="demo-div border-radius_quarter-ellipse"></div>
```

```css
.border-radius_quarter-ellipse {
  width: 300px;
  height: 200px;
  background: blue;
  border-radius: 100% 0 0 0 / 100% 0 0 0;
}
```
:::

