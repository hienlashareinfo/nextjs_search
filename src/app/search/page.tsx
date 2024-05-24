"use client"
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import LoadingPage from '@/components/Loading'
import Searchdata from '@/components/Searchdata'
import Noresult from '@/components/Noresult'
// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
    id: number;
    title: string;
    // Bạn có thể thêm các thuộc tính khác của sản phẩm nếu cần
}

// Định nghĩa kiểu dữ liệu cho phản hồi từ API
interface SearchResult {
    products: Product[];
}
const Search = () => {
    const searchparams = useSearchParams();
    const seacrh = searchparams.get('q') || '';
    const [data, setData] = useState<SearchResult | null>();
    useEffect(() => {
        async function getdata() {
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${seacrh}`);
                const dataresresponse: SearchResult = await response.json();
                setData(dataresresponse);

            } catch (err) {
                console.log(err);
            };
        }
        if (seacrh.length > 0) {
            getdata();
        }
    }, [seacrh]);
    return (
        <>

            {
                data ? (
                    data.products.length > 0 ? (
                        <div>
                            <Searchdata products={data.products} />
                        </div>
                    ) : (
                        <div>
                            <Noresult />
                        </div>
                    )
                ) : (
                    <LoadingPage />
                )}

        </>
    )
}
const SearchPage = () => {
    return (
        <Suspense fallback={<div > Loading ...</div >}>
            <Search />
        </Suspense>
    )
}
export default SearchPage