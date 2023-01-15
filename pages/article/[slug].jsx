import qs from 'qs'
import React from 'react'
import { fetchArticle } from '../api'
import _ from 'lodash'
import Image from 'next/image'

const slug = ({ article, notFound = false }) => {


    return (
        <div className='my-3 border-4 border-logo-color-100 rounded-lg p-2 '>
            <h2 className='mt-1 mb-4 mx-2'>{article.attributes.Title}</h2>
            <Image className='mx-auto my-3' src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`} alt="blog image" height={400} width={650} />

            <p className='my-4 text-lg px-3'>{article.attributes.Content}</p>


        </div>
    )
}





export default slug

export async function getServerSideProps({ query }) {

    const options = {
        populate: '*',
        filters: {
            slug: {
                $eq: query.slug
            }
        }

    }
    const queryString = qs.stringify(options);

    const articles = await fetchArticle(queryString)
    console.log(articles.data.data)

    if (articles.data.data.length === 0) {
        return {
            props: {
                notFound: true,
            }
        }
    }
    return {
        props: {
            article: articles.data.data[0],
        }
    }


}

