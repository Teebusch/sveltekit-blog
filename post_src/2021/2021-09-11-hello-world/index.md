---
file: hello-world.md
title: Hello World
tags:
  - test
  - help
---

<script>
  import Box from "$lib/Box.svelte";
  import Image from "$lib/Image.svelte";
  import ImageSrc from "$lib/assets/drums.png";
  import MilanoJPG from "$lib/assets/milano.jpg";
  import MilanoWEBP from "$lib/assets/milano.webp";
</script>

Hi!

<Box />

Bla bla 

```bash
npx degit el3um4s/memento-sveltekit-and-github-pages
```

Then install the dependencies with

```bash
npm install
```

<img src={ImageSrc} alt={ImageSrc}/>

<Image imageJPG="https://source.unsplash.com/random/800x600"  alt="Random Image" caption="Random foto from Unsplash"/>

### Source

**`src/lib/Image.svelte`**

```html
<script>
  export let imageJPG;
  export let imageWEBP;
  export let alt;
  export let caption = "";

  export let width = "100%";
</script>

<figure>
  <picture>
    <source srcset="{imageWEBP}" type="image/webp" loading="lazy" width="{width}">
    <img src="{imageJPG}" {alt} loading="lazy" width="{width}">
  </picture>
  {#if caption !== ""}
    <figcaption>{@html caption}</figcaption>
  {/if}
</figure>
```


### Use

```html
<script>
  import Image from "$lib/Image.svelte";
  import MilanoJPG from "$lib/assets/milano.jpg";
  import MilanoWEBP from "$lib/assets/milano.webp";
</script>

<Image imageJPG={MilanoJPG} imageWEBP={MilanoWEBP} alt="Milano - Piazza Gae Aulenti" caption="Photo by Luca Bravo on Unsplash"/>
```

<Image imageJPG={MilanoJPG} imageWEBP={MilanoWEBP} alt="Milano - Piazza Gae Aulenti" caption="Photo by Luca Bravo on Unsplash"/>