import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export const CategoryTabs = ({ categoryArr }) => {

    const router = useRouter();

    function isLinkActive(category) {
        return category.attributes.Slug === router.query.category

    }

    return (
        <ul className='flex items-center m-0'>
            <li className={"rounded-t-xl border-4 px-2 pt-2 border-b-0 hover:border-logo-color " +
                `${router.pathname === '/' ? "border-logo-color text-logo-color" : "border-gray-300 "}`}>
                <Link className='mx-2  font-medium no-underline text-size-2 text-current hover:text-logo-color' href="#">Recent</Link>
            </li>
            {categoryArr.map((category, id) => {

                return (

                    <div key={id}>
                        <li className={"rounded-t-xl border-4 px-2 pt-2 border-b-0 hover:border-logo-color " +
                            `${isLinkActive(category) === '/' ? "border-logo-color text-logo-color" : "border-gray-300 "}`}>
                            <Link className='mx-2  font-medium no-underline text-size-2 text-current hover:text-logo-color' href={`/category/${category.attributes.Slug}`}> {category.attributes.Title}</Link>
                        </li>
                    </div>
                )
            })}
        </ul>
    )
}



