import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const USER = gql` { user { name } }`;

// export default () => {
//   const { loading, error, data } = useQuery(USER)

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error :(</p>
//   console.log(data)
//   return <div>{data.hello}</div>
// }

export default () => <div></div>



