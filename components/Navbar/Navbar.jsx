import Link from 'next/link'
import React from 'react'
import NavbarItems from './NavbarItems'
import SearchBar from './Search/SearchBar'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-3 max-w-screen-xl px-10 bg-white'>
            <div className="left">
                <Link href={"/"}>
                    <h1 className='text-3xl font-semibold text-pc'>Qurno</h1>
                </Link>
            </div>
            <div className="middle">
                <NavbarItems />
            </div>
            <div className="right">
                <SearchBar />
            </div>
        </div>
    )
}

export default Navbar