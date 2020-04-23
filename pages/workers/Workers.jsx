import React, { useState, useCallback } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'

import UserProfile from '../../components/UserProfile'
import rows from '../../data/workers'

import styles from './Workers.module.css'

const columns = [
  { id: 'name', label: 'Name', minWidth: 20 },
  { id: 'rate', label: 'Rate', minWidth: 20 },
  { id: 'skills', label: 'Skills', minWidth: 40 },
  { id: 'email', label: 'Email', minWidth: 40 },
]

const Workers = () => {
  const [userSelected, setUserSelected] = useState('')

  const getUserSelected = useCallback(({ target }) => {
    const { nodeName, textContent } = target
    if(nodeName === 'TD') {
      const newSelectedUser = rows.find(row => row[target.getAttribute('name')] === textContent)
      newSelectedUser !== userSelected && setUserSelected(newSelectedUser)
    }
  }, [])

  return (
    <Grid container spacing={2} >
      <Grid item xs={9}>
        <Paper className={styles.root}>
          <TableContainer className={styles.root}>
            <Table stickyHeader aria-label="sticky table" onClick={getUserSelected}>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align} name={column.id}>
                            {Array.isArray(value) ? value.map((val, index) => <div key={index}>{val}</div>) : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={3}>
         <UserProfile user={userSelected}/>
      </Grid>
    </Grid>
  )
}

export default Workers
