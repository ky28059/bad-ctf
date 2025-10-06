'use client'

import { useContext, useMemo } from 'react';

// Components
import GridChallenge from '@/app/challenges/GridChallenge';

// Utils
import type { Challenge as ChallengeData } from '@/util/challenges';
import type { Solve } from '@/util/profile';
import { bingo, bonus } from '@/util/bingo';


type ChallengesProps = {
    challenges: ChallengeData[]
    solves: Solve[]
}
export default function Challenges(props: ChallengesProps) {
    const solved = new Set(props.solves.map(s => s.name));

    return (
        <div className="flex gap-12">
            <div className="divide-y-[3px] divide-secondary/75 text-center">
                {bingo.map((row, i) => (
                    <div className="flex divide-x-[3px] divide-secondary/75" key={row.join()}>
                        {row.map((s, j) => (
                            <GridChallenge
                                // TODO: hacky overriding scheme for testing
                                {...props.challenges[i * 5 + j]}
                                solved={solved.has(props.challenges[i * 5 + j].name)}
                                name={s}
                                key={s}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="sticky top-20 h-max pt-4">
                <h2 className="font-bold text-lg">
                    BONUS
                </h2>
                {bonus.map((b) => (
                    <div key={b}>
                        {b}
                    </div>
                ))}
            </div>
        </div>
    )
}
