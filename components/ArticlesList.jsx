import React from 'react'
import BlogCard from './BlogCard'

export default function ArticlesList({ articlesList }) {

    return (
        <div className='m-3'>
            {
                articlesList.map((article, id) => {
                    return <BlogCard key={id} article={article} />

                })
            }

        </div>
    )
}
