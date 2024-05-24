import React from 'react';
import SearchItem from './SearchItem';

interface Product {
    id: number;
    title: string;
}

interface SearchDataProps {
    products: Product[] | undefined;
}

const Searchdata: React.FC<SearchDataProps> = ({ products }) => {
    console.log(products);

    if (!Array.isArray(products)) {
        return <div>No products available</div>;
    }

    return (
        <div className='grid grid-cols-3 gap-3 py-2'>
            {products.map((product) => (
                <SearchItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Searchdata;
