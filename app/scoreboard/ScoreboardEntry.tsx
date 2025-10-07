import type { LeaderboardEntry } from '@/util/scoreboard';
import Link from 'next/link';


type ScoreboardEntryExtraProps = {
    rank: number,
    percent: number,
    selected: boolean,
    index: number
}
export default function ScoreboardEntry(props: LeaderboardEntry & ScoreboardEntryExtraProps) {
    return (
        <div className={'table-row group' + (props.index % 2 === 1 ? ' bg-neutral-100' : '')}>
            <div className={'table-cell w-64 text-right py-1.5 pr-56 border-t border-tertiary transition duration-100 ' + (props.selected ? 'bg-white/10' : 'group-hover:bg-white/10')}>
                {props.rank}
            </div>

            <Link
                className={'table-cell text-[#0088cc] hover:text-[#005580] hover:underline transition duration-100 py-1.5 pr-8 w-80 border-t border-tertiary ' + (props.selected ? 'bg-white/10' : 'group-hover:bg-white/10')}
                href={`/profile/${props.id}`}
            >
                {props.name}
            </Link>

            <div className={'table-cell py-1.5 border-t border-tertiary transition duration-100 ' + (props.selected ? 'bg-white/10' : 'group-hover:bg-white/10')}>
                {props.score.toFixed(3)}
            </div>

            <div className={'table-cell py-1.5 border-t border-tertiary transition duration-100 ' + (props.selected ? 'bg-white/10' : 'group-hover:bg-white/10')}>
                ...
            </div>
        </div>
    )
}
