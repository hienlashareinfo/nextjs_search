import React from 'react'
import Search from './Search'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center'>
            <div className='logo'>Logo</div>
            <div className='menu flex items-center gap-3'>
                <div className='menu_item'>Menu 1</div>
                <div className='menu_item'>Menu 2</div>
            </div>
            <div className='search'>
                <Search />
            </div>
        </div>
    )
}

export default Navbar
