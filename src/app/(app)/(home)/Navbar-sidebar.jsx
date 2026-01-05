import { ScrollArea } from '../../../components/ui/scroll-area'
import { Sheet, SheetHeader, SheetTitle, SheetContent } from '../../../components/ui/sheet'
import Link from 'next/link'
import React from 'react'

const NavbarSidebar = ({ items, open, onOpenChange }) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle>Menu</SheetTitle>
                    </div>
                </SheetHeader>

                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            {item.children}
                        </Link>
                    ))}

                    <div className="border-t">
                        <Link
                            href="/sign-in"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            Log in
                        </Link>

                        <Link
                            href="/sign-up"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            Sign up
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

export default NavbarSidebar
