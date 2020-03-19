import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const HELLO = gql` { hello }`;

export default () => {
  const { loading, error, data } = useQuery(HELLO)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)
  return <div>joe</div>
}



