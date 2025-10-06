'use client'

import { useState } from 'react';
import type { Challenge } from '@/util/challenges';
import GridChallengeModal from '@/app/challenges/GridChallengeModal';
import { BiCheck } from 'react-icons/bi';


export default function GridChallenge(props: Challenge & { solved: boolean }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="size-40 p-4 flex items-center justify-center"
                onClick={() => setOpen(true)}
            >
                <h3 className="font-medium mb-2 flex gap-2 items-center justify-center wrap-anywhere">
                    {props.solved && (
                        <BiCheck className="flex-none bg-success/40 p-0.5 mb-0.5 rounded-full" />
                    )}
                </h3>
                {props.name}
            </button>

            <GridChallengeModal
                open={open}
                setOpen={setOpen}
                challenge={props}
            />
        </>
    )
}
