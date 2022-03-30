import axios from 'axios';
interface PostProps {
    [key: string]: any;
}
function Blog({ posts }: PostProps) {
    console.log(posts)
    return <div>{JSON.stringify(posts)}</div>
}

// 此函数在构建时被调用
export async function getStaticProps() {
    // 调用外部 API 获取博文列表
    const res = await axios({url: 'https://api.github.com/repos/zeit/next.js', method: 'get'})
    const posts = res.data
    // 通过返回 { props: { posts } } 对象，Blog 组件
    // 在构建时将接收到 `posts` 参数
    return {
        props: {
            posts,
        },
    }
}

export default Blog