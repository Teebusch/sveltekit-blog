<script context="module">
    export const load = async({ page }) => {
        return {
            props: {
                key: page.path,
            }
        }
    };
</script>


<script>
    import PageTransition from "$lib/PageTransition.svelte";
    import { base } from '$app/paths';
    import Nav from "$lib/Nav.svelte";
    export let key
</script>


<svelte:head>
    <link href="{`${base}/prism.css`}" rel="stylesheet" />
</svelte:head>


<div class="container">
    <Nav></Nav>
    <PageTransition refresh={key}>
       <slot></slot>
    </PageTransition>
</div>


<style>
    .container {
        max-width: 800px;
        margin: 50px auto;
    }
</style>