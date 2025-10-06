import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Components
import NavBar from '@/app/NavBar';
import Footer from '@/app/Footer';

// Providers
import TimeProvider from '@/components/TimeProvider';
import FilterProvider from '@/components/FilterProvider';
import PreferencesProvider from '@/components/PreferencesProvider';
import FlagDispatchProvider from '@/components/FlagDispatchProvider';

import '@/app/globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        absolute: 'b01lers CTF 2025',
        template: '%s - b01lers CTF 2025'
    },
    description: 'b01lers CTF is jeopardy-style CTF hosted by the b01lers CTF team at Purdue University.',
}

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en" className="h-full overflow-y-scroll scroll-smooth">
            <body
                className="bg-background text-black h-full flex flex-col"
                style={inter.style}
            >
                <TimeProvider>
                    <FilterProvider>
                        <PreferencesProvider>
                            <FlagDispatchProvider>
                                <NavBar />
                                {props.children}

                                <Footer />
                            </FlagDispatchProvider>
                        </PreferencesProvider>
                    </FilterProvider>
                </TimeProvider>
            </body>
        </html>
    )
}
