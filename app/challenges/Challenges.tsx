'use client'

import { useContext, useMemo } from 'react';

// Components
import GridChallenge from '@/app/challenges/GridChallenge';

// Utils
import type { Challenge as ChallengeData } from '@/util/challenges';
import type { Solve } from '@/util/profile';
import { bingo } from '@/util/bingo';


type ChallengesProps = {
    challenges: ChallengeData[]
    solves: Solve[]
}
export default function Challenges(props: ChallengesProps) {
    const solved = new Set(props.solves.map(s => s.name));

    return (
        <div className="divide-y-[3px] divide-secondary/75 text-center">
            {bingo.map((row) => (
                <div className="flex divide-x-[3px] divide-secondary/75" key={row.join()}>
                    {row.map((s) => (
                        <div className="size-40 p-4 flex items-center justify-center" key={s}>
                            {s}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
