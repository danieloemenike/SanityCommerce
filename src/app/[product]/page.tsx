import React from 'react'
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '../../../sanity/lib/client';

async function getProduct(slug:string) {
    const query =  `*[_type == 'product'] && slug.current = "${slug}"][0] {
        _id,
        images
        price,
        name,
        description,
            'slug': slug.current,
            'categoryName' : category -> name,
           
    } `
    const data = await client.fetch(query)
    return data;
}
export async function generateMetaData({
    params }: { params: { product: string }; }) : Promise<Metadata> {
    return {
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true
            }
            }
        }
}

type Props = {}



async function ProductPage({
    params }: { params: { product: string }; }) {
  return (
    <div>page</div>
  )
}

export default ProductPage