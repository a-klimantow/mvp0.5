Button example

```jsx padded
  <Button text="normal"/>
  <Button type="primary" text="primary"/>
  <Button isDisabled={true} text="disabled"/>
```

big size

```jsx padded
<Button size="big" text="big size"/>
<Button size="big" type="primary" text="big size" />
<Button size="big" isDisabled={true} text="big size"/>
```

with icon

```jsx padded
<Button icon="filtr" text="with icon" />
<Button icon="map" text="with icon" type="primary"/>
<Button icon="map" text="with icon" size="big" type="primary"/>
<Button icon="map" text="with icon" type="primary" isDisabled={true} />
```

single icon

```jsx padded
<Button icon="del" />
<Button icon="del" size="big" />
```
