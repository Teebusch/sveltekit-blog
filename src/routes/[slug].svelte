<script context='module'>
    import { base } from '$app/paths';
    export const ssr = false;

    const allPosts = import.meta.globEager(`/post_src/**/*.md`);
    
    export async function load({ fetch, page }) {

        // get list of all posts
        const url = `${base}/posts.json`;
        const res = await fetch(url);

        let posts = []
        if(res.ok) {
            posts = await res.json()
        }

        // find matching post
        const { slug } = page.params;
        const post = posts.find( (p) => {
            return p.slug.toLowerCase() === slug.toLowerCase();
        });

        // load post as module 
        const content = allPosts[post.path].default

        return {
            props: {
                metadata: post.metadata,
                page: content
            }
        }
    }
</script>


<script>
    import PageTransition from "$lib/PageTransition.svelte";
    export let key;
    export let page;
    export let metadata;

    console.log(metadata, page)
</script>

<PageTransition refresh={ key }>
    <svelte:component this={ page }/>
</PageTransition>

