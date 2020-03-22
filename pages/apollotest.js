import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const ADD_TODO = gql`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const TES_QUERY = gql`
  query($id: ID) {
    getUserById(id: $id) {
      userName
      email
      password
    }
  }
`

export default () => {
  const { loading, data } = useQuery(TES_QUERY, { variables: { id: '5e7610b277184b481b97d410' }})
  return <div>
    <button onClick={() => {}}>Click</button>
  </div>
}



