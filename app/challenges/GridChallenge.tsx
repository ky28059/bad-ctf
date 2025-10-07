'use client'

import { useState } from 'react';
import type { Challenge } from '@/util/challenges';
import GridChallengeModal from '@/app/challenges/GridChallengeModal';


export default function GridChallenge(props: Challenge & { solved: boolean }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="relative size-36 p-2 flex items-center justify-center hover:bg-black/10 transition duration-200"
                onClick={() => setOpen(true)}
            >
                {props.solved && (
                    <span className="absolute inset-0 text-red-600 flex items-center justify-center text-[10rem] pb-4">
                        ×
                    </span>
                )}
                {props.name === 'free' ? (
                    <div>
                        <strong className="text-xl">FREE</strong>
                        <p>Waste of time</p>
                    </div>
                ) : props.name}
            </button>

            <GridChallengeModal
                open={open}
                setOpen={setOpen}
                challenge={props}
            />
        </>
    )
}
