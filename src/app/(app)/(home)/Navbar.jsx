"use client"

import React, { useState } from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import NavbarSidebar from './Navbar-sidebar';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
});

const NavbarItem = ({ href, children, isActive }) => {
    return (
        <Button asChild variant="outline" className={`bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg ${isActive ? "bg-black text-white " : ""}`}>
            < Link href={href}>
            {children}
        </Link>
        </Button >
    )
}

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/features", children: "Features" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact" },
]

const Navbar = () => {

    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
       <nav className="flex h-20 justify-between items-center pl-10 font-medium bg-white border-b">

            <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} items={navbarItems} />

            <Link href="/" className="flex items—center">
                <span className={`text-5xl font-semibold ${poppins.className}`}>
                    Funroad
                </span>
            </Link>

            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href} children={item.children} href={item.href} isActive={pathname === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}
            </div>

            <div className='hidden lg:flex'>
                <Button variant="secondary" className=' border-l border-b px-12 h-20 rounded-none bg-white hover:bg-pink-400 transition-colors text-lg'>
                    Login
                </Button>

                <Button variant="secondary" className='border-b px-15 h-20 rounded-none text-white bg-black  hover:bg-pink-400 hover:text-black transition-colors text-lg'>
                    Signup
                </Button>
            </div>

            <div className="flex lg:hidden items-center justify-center">
                <Button
                    variant="ghost"
                    className="size-12 border-transparent bg-white"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon size={14} />
                </Button>
            </div>
        </nav >
    )
}

export default Navbar