<script>
  import { fade } from "svelte/transition"
  export let refresh = ""
</script>

{#key refresh}
  <div in:fade={{  duration: 100, delay: 100 }}
       out:fade={{ duration: 100             }}>
    <slot />
  </div>
{/key}