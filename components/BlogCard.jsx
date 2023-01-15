import Image from 'next/image'
import React from 'react'

export default function BlogCard({ article }) {
    return (
        <div className='bg-gray-300 text-center  m-3 rounded p-3 text-lg '>
            <Image className='mx-auto' src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`} alt="blog image" height={309} width={550} />
            <h3 >

                <a className='no-underline text-gray-700 hover:text-logo-color' href={`/article/${article.attributes.Slug}`}>
                    {article.attributes.Title}
                </a>
            </h3>
        </div>
    )
}

