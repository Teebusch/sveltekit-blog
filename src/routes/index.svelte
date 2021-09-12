<script context="module">

    import { base } from '$app/paths';

    export async function load({ fetch }) {

        const url = `${base}/posts.json`;
        const res = await fetch(url);
        
        if(res.ok) {
            return {
                props: { 
                    posts: await res.json()
                }
            }
        } else {
            return {  
                props: {
                    posts: []
                }
            }
        }
    }
</script>

<script>
    import PostList from '$lib/PostList.svelte';
    export let posts;
</script>

<h1>Welcome</h1>

<h2>Blog</h2>

<PostList {posts} />
