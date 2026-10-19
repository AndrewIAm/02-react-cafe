import css from './App.module.css';
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';

import CafeHeader from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/voteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (voteType: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeHeader />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />

        {totalVotes === 0 ? (
          <Notification />
        ) : (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            votesRate={positiveRate}
          />
        )}
      </div>
    </>
  );
}

export default App;
