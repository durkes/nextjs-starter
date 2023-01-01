// this page is for a dynamic route
// https://nextjs.org/docs/routing/dynamic-routes

import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    // await due to remark in lib function
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // any paths not returned by getStaticPaths will result in 404
        // fallback: true, // any url will work and getStaticProps() will decide what props/content to return (if query data in url, default, etc.)
        // fallback: blocking, // new paths are server-side rendered only the first time and cached for future requests
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}