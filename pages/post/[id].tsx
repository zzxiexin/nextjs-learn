import axios from "axios"
function Post({ posts, params }: { posts: any, params: any }) {
    return <div>
        <div>
            {
                posts.map((item: any) => (
                    <img src={item.url} alt="" key={item.src}/>
                ))
            }
        </div>
        <div>
            {JSON.stringify(params)}
        </div>
    </div>
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } },
        { params: { id: '2' } }],
        fallback: false
    }
}

// 在构建时也会被调用
export async function getStaticProps({ params }: {params: Object}) {
    // params 包含此片博文的 `id` 信息。
    // 如果路由是 /posts/1，那么 params.id 就是 1
    const res = await axios({ url: 'https://api.thecatapi.com/v1/images/search?limit=1', method: 'get' })
    const posts = res.data

    // 通过 props 参数向页面传递博文的数据
    return { props: { posts, params }}
}

export default Post