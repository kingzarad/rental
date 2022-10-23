import Head from 'next/head';

export default function Page({ children, title,description, keywords, image, url, type }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content='BSIT-4' />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={description} />
                <meta name='og:image' content={image} />
                <meta name='og:url' content={url} />
                <meta name='og:site_name' content='Joseph Mukorivo' />
                <meta name='og:type' content={type} />
            </Head>
            <main>{children}</main>
        </>
    )
}
