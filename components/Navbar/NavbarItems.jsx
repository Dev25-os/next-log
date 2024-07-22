"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItemData = [
    {
        href: "/",
        label: 'Home'
    },
    {
        href: "/about",
        label: 'About'
    },
    {
        href: "/blog",
        label: 'Blog'
    },
    {
        href: "/contact",
        label: 'Contact'
    }
]

const NavbarItems = () => {
    const pathName = usePathname();

    // Function to determine if a link is active
    //FFF6FE6
    const isActive = (pathname) => {
        return pathName == pathname;
    }

    return (
        <div>
            <ul className='flex items-center gap-x-8 text-pc'>
                {NavItemData.map(item => (
                    <li key={item.href} >

                        <Link href={item.href} >
                            <div className={`${isActive(item.href) ? "text-sc" : "text-pc"} font-medium`}>
                                {item.label}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarItems
