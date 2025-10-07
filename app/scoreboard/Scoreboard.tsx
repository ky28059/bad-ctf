'use client'

import ScoreboardEntry from '@/app/scoreboard/ScoreboardEntry';
import Pagination from '@/components/Pagination';

// Utils
import { LeaderboardData } from '@/util/scoreboard';
import { SCOREBOARD_PAGE_SIZE } from '@/util/config';


type ScoreboardProps = LeaderboardData & {
    name?: string,
    page: number,
    setPage: (p: number) => void,
    maxScore: number
}
export default function Scoreboard(props: ScoreboardProps) {
    const maxPage = Math.ceil(props.total / SCOREBOARD_PAGE_SIZE);

    return (
        <section className="w-full flex flex-col text-sm">
            <h1 className="text-2xl font-semibold mb-6">
                Teams
            </h1>

            <div className="table w-full">
                <div className="table-header-group">
                    <div className="table-row text-black font-semibold bg-neutral-100">
                        <div className="table-cell py-1.5 px-2">
                            Worldwide position
                        </div>
                        <div className="table-cell">
                            Name
                        </div>
                        <div className="table-cell">
                            Points
                        </div>
                        <div className="table-cell">
                            Events
                        </div>
                    </div>
                </div>

                {props.leaderboard.map((d, i) => (
                    <ScoreboardEntry
                        {...d}
                        rank={(props.page * SCOREBOARD_PAGE_SIZE) + i + 1}
                        percent={Math.max(d.score / props.maxScore * 100, 0.25)}
                        selected={d.name === props.name}
                        index={i}
                        key={d.id}
                    />
                ))}
            </div>

            <Pagination
                page={props.page}
                setPage={props.setPage}
                maxPage={maxPage}
            />
        </section>
    )
}
