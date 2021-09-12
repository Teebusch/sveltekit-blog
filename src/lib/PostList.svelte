<script lang="ts">
    import { base } from '$app/paths';
    export let posts;
</script>

<ul>
    {#each posts as { metadata: {title, tags}, slug } }
        <li>
            <a href={ `${base}/${slug}` } sveltekit:prefetch >{ title }</a>

            {#each tags as tag}
                <a class="tag" href="{ `${base}/tags/${tag}` }">{ tag }</a>
            {/each}
        </li>
    {/each}
</ul>


<style> 
    a {
        color: #2a2a2a;
    }
    li {
        margin-bottom: 16px;
    }
    .tag {
        text-decoration: none;
        text-transform: lowercase;
        font-size: 0.8rem;
        background-color: #2a2a2a;
        color: #f0f0f0;
        padding: 4px;
        border-radius: 8px;
        margin: 0px 4px 0px 0px;
    }
    .tag:hover {
        background-color: #f0f0f0;
        color: #2a2a2a;
        cursor: pointer;
    }
</style>