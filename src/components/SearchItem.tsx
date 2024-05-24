import React from 'react'

const SearchItem = (props: any) => {
    const product = props.product;
    return (
        <div
            aria-label="card-item-v3"
            className="flex flex-col max-w-[400px] rounded-xl bg-white border border-gray-100 p-5"
        >
            <div className="relative flex-shrink-0 mb-5 h-[250px]">
                <img
                    src="https://bit.ly/3zzCTUT"
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-lg font-bold">
                    {product.title}
                </h3>
            </div>
        </div>
    )
}

export default SearchItem
