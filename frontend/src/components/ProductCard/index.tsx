import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from 'utils';

type ProductCardProps = {
    id: string,
    title: string,
    price: string,
    token: string,
    image: string,
    className?: string;
};

const ProductCard = ({ id, title, image, price, token, className }: ProductCardProps) => (
    <Link href={`/products/${id}`} className={cn(className, "grow flex flex-col")} >
        <Image
            className="bg-opacity-5 bg-white m-2 rounded-md w-[280px] h-full max-h-[360px]"
            src={image}
            width={280}
            height={360}
            alt="product image"
        />
        <div className="flex justify-around">
            <span>
                {title}
            </span>
            <div>
                <span>
                    {price}{` `}{token}
                </span>
            </div>
        </div>
    </Link>
);

export default ProductCard;