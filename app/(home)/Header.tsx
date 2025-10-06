import { Comic_Relief } from 'next/font/google';
import Timer from '@/app/(home)/Timer';

// Utils
import { getConfig } from '@/util/config';

// Icons
import { BsChevronCompactDown } from 'react-icons/bs';


const comic = Comic_Relief({ subsets: ['latin'], weight: ['400', '700'] });

export default async function Header() {
    const config = await getConfig();

    return (
        <header className="relative container flex flex-col items-center justify-center h-screen overflow-hidden">
            <h1
                className="flex text-5xl md:text-8xl font-bold bg-clip-text mb-4 mt-16 drop-shadow-md"
                style={comic.style}
            >
                bad ctf !!!!!
            </h1>
            <p
                className="mb-5 max-w-3xl text-center text-pretty text-sm sm:text-base"
                style={comic.style}
            >
                b01lers CTF is the public competitive CTF hosted by the b01lers CTF team at Purdue University.
                Join our discord at <a href="https://discord.gg/tBMqujE" target="_blank" rel="noopener noreferrer" className="font-semibold drop-shadow-[0_0_13px_rgb(20_10_0_/_0.6)] hover:underline">discord.gg/tBMqujE</a>{' '}
                and look out for further info soon!
            </p>
            <Timer
                startTime={config.data.startTime}
                endTime={config.data.endTime}
            />

            <a href="#rules" className="absolute inset-x-0 mx-auto w-max bottom-12 text-inherit text-4xl text-primary">
                <BsChevronCompactDown className="animate-bounce" />
                <span className="sr-only">Jump to Rules</span>
            </a>
        </header>
    )
}
