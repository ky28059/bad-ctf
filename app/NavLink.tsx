'use client'

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


type NavLinkProps = {
    href: string,
    children: ReactNode
}
export default function NavLink(props: NavLinkProps) {
    const pathname = usePathname();
    const active = pathname === props.href;

    return (
        <Link
            className={'text-sm px-4 pt-5 pb-3 border-b-2 transition duration-100 ' + (active ? 'border-theme-bright text-theme-bright' : 'border-secondary text-secondary hover:border-white hover:text-white')}
            href={props.href}
        >
            {props.children}
        </Link>
    )
}
