import css from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  votesRate: number;
}

function VoteStats({ votes, totalVotes, votesRate }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{votesRate}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
