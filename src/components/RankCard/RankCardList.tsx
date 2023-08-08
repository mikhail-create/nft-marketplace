import React from 'react'
import { getUsers } from '_services/user.service'
import { RankCardProps } from 'types/RankCardProps.type'

import RankCard from './RankCard'

const fetchData = getUsers()

function RankCardList({ sortDuration }: { sortDuration: string }) {
  const usersList = fetchData.read()

  const getSortedUsersList = () => {
    return [...usersList].sort((a, b) => {
      switch (sortDuration) {
      case 'all':
        return a.rank - b.rank;
      case 'daily':
        return a.rankDaily - b.rankDaily;
      case 'weekly':
        return a.rankWeekly - b.rankWeekly;
      case 'monthly':
        return a.rankMonthly - b.rankMonthly;
      default:
        return 0; // Возвращаем 0 в случае неопределенного условия (это можно настроить по вашему усмотрению)
      }
    });
  };

  const sortedUsersList = getSortedUsersList();

  return (
    <>
      {sortedUsersList.map((user: RankCardProps) => {
        return (
          <RankCard
            key={user.username}
            rank={
              sortDuration === 'all' ? user.rank :
                sortDuration === 'daily' ? user.rankDaily :
                  sortDuration === 'weekly' ? user.rankWeekly : user.rankMonthly
            }
            avatar={user.avatar}
            username={user.username}
            change={user.change}
            NFTSolds={user.NFTSolds}
            volume={user.volume}
          />
        )
      })}
    </>
  )
}

export default RankCardList