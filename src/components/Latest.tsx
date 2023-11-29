import React from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle, ArrowRightFromLineIcon } from "lucide-react";

type ILatestProduct = {
	_id: string;
	imageUrl: string;
	price: number;
	slug: string;
	categoryName: string;
	name: string;
};

async function getLatestProduct() {
	const query = `
     *[_type == 'product'] | order(asc)[0..2] {
        _id,
        price,
        name,
            'slug': slug.current,
            'categoryName' : category -> name,
            'imageUrl': images[0].asset->url
    } `;
	const data = await client.fetch(query);
	return data;
}
export default async function Latest() {
	const data: ILatestProduct[] = await getLatestProduct();
	return (
		<div>
			<div className=" bg-black">
				<div className="mx-auto max-w-2x1 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<div className="flex justify-between items-center ">
						<h2 className="text-2xl font-bold tracking-tight text-white">
							Our Newest products
						</h2>
						<Link
							className=" flex items-center gap-x-1 text-white"
							href="/all">
							See All
							<span>
								<ArrowRightCircle className="text-white " />
							</span>
						</Link>
					</div>

					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{data.map((product) => (
							<div key={product._id} className="group relative">
								<div className="aspect-square w-full overflow-hidden rounded-md bg-primary group-hover:opacity-75 lg:h-80 shadow-xl">
									<Image
										src={product.imageUrl}
										alt="Product image"
										className="w-full h-full object-cover object-center lg:h-full lg:w-full"
										width={300}
										height={300}
									/>
								</div>
						<div className="mt-4 flex justify-between">
							<div>
							<h3 className="text-sm text-white ">
							<Link href={`/product/${product.slug}`}>
							{product.name}
							</Link>
							</h3>
							<p className= "mt-1 text-sm text-white"> {product.categoryName} </p>
							</div>
							<p className="text-sm font-medium text-white">
																	N{ product.price }
							</p>
							</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
