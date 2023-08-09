import React, { useMemo } from 'react'
import { getUsers } from '_services/user.service'
import { ArtistCardProps } from 'types/ArtistCardProps.type'

import ArtistCard from './ArtistCard'

const fetchData = getUsers()

function ArtistCardList() {
  const usersList = useMemo(() => fetchData.read(), [])

  const usersListSorted = [...usersList].sort((a, b) => a.rank - b.rank)

  return (
    <>
      {usersListSorted.map((user: ArtistCardProps) => {
        return (
          <ArtistCard
            key={user.username}
            rank={user.rank}
            avatar={user.avatar}
            username={user.username}
            volume={user.volume}
          />
        )
      })}
    </>
  )
}

export default ArtistCardList