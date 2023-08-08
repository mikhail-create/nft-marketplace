import React from 'react'
import { getUsers, getUsersDelayed } from '_services/user.service'
import { RankCardProps } from 'types/RankCardProps.type'

import RankCard from './RankCard'

const fetchData = getUsers()
// showcase for skeletion loading
// const fetchData = getUsersDelayed()

function RankCardList() {
  const usersList = fetchData.read()

  const sortedUsersList = [...usersList].sort((a, b) => a.rank - b.rank);

  return (
    <>
      {sortedUsersList.map((user: RankCardProps) => {
        return (
          <RankCard
            rank={user.rank}
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