<script context="module">

    import { base } from '$app/paths';

    export async function load({ page, fetch }) {

        const tag = await page.params.tag;
        const url = `${base}/posts.json`;
        const res = await fetch(url);

        let posts = [];

        if(res.ok) {
            // filter posts
            posts = await res.json()
            posts = posts.filter( p => {
                const tags = [tag] 
                const hasTag = tags.some(e => p.metadata.tags.includes(e))
                return hasTag
            });
        }
            
        return {
            props: { 
                tag: tag,
                posts: posts
            }
        }
    }
</script>


<script>
    import PostList from '$lib/PostList.svelte';
    
    export let posts;
    export let tag;
</script>

<h1>Posts tagged "{ tag }"</h1>

<PostList { posts } />