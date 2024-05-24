'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

const Search = () => {
    const [inputdata, setInputdata] = useState('');
    const router = useRouter();
    function submitsearch(event: FormEvent) {
        event.preventDefault();
        router.push(`/search?q=${inputdata}`);
    }
    return (
        <>
            <form onSubmit={submitsearch}
                className="flex border border-slate-200 rounded-xl w-[400px]"
                aria-label="simple-form"
            >
                <div className="flex-1">
                    <input
                        value={inputdata}
                        onChange={(event) => setInputdata(event.target.value)}
                        type="text"
                        placeholder="Enter your content"
                        className="w-full p-3 bg-transparent outline-none"
                    />
                </div>
                <button className="flex-shrink-0 p-3 font-bold text-white bg-blue-500 rounded-xl">
                    Tim kiếm
                </button>
            </form>
        </>
    )
}

export default Search
