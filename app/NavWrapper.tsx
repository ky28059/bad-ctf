'use client'

import type { ReactNode } from 'react';
import { useScroll } from '@/hooks/useScroll';


export default function NavWrapper(props: { children: ReactNode }) {
    // const scroll = useScroll();

    return (
        <nav className="flex justify-center fixed w-full overflow-x-auto top-0 transition duration-200 z-20 bg-black">
            {props.children}
        </nav>
    )
}
