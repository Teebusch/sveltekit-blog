    
function getSlugLink(slug:string | undefined, path: string): string {
    return slug ? slug : path;
}

export async function get({ params }) {

    const allPosts = import.meta.globEager(`/post_src/**/*.md`);

    let posts = [];

    for (let path in allPosts) {

        const post = allPosts[path];
        const metadata = post.metadata;
        
        // create slug for link
        // <!-- <a href={`${base}/blog/${path.replace(".md","")}`}>{title}</a> -->
        const namePage = path.split('/');
        const slugPage = namePage[namePage.length-2].slice(11);
        const slug = getSlugLink(metadata.slug, slugPage)

        posts.push({ 
            path, 
            slug,
            metadata,
            post // content of the post
        }); 
    }


    return {
        status: 200,
        body: await Promise.all( posts )
    }
}


