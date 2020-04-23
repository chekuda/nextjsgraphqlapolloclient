import React, { useState, useCallback } from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import Checkbox from '@material-ui/core/Checkbox'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

import SearchBar from '../../components/SearchBar'
import UserProfile from '../../components/UserProfile'
import myWorkers from '../../data/workers'

import styles from './Workers.module.css'

const columns = [
  { id: 'id', label: '', width: 20 },
  { id: 'name', label: 'Name', minWidth: 20 },
  { id: 'rate', label: 'Rate', minWidth: 20 },
  { id: 'skills', label: 'Skills', minWidth: 40 },
  { id: 'email', label: 'Email', minWidth: 40 },
]

const filteredWorkers = ({ filters, workers, workersCheked }) => {
  let currentWorkers = workers
  if(filters.search) {
    currentWorkers = currentWorkers.filter(({ name = '', email = ''}) =>
        [email, name].find(workerVal => {
          return workerVal.toLocaleLowerCase().match(filters.search.toLocaleLowerCase())
        }
      )
    )
  }
  if(filters.checked) {
    currentWorkers = currentWorkers.filter(({ name }) => workersCheked.includes(name))
  }
  return currentWorkers
}

const Workers = () => {
  const [workerSelected, setWorkerSelected] = useState(false)
  const [filters, setFilters] = useState({})
  const [workerProfileOpened, setProfileWorkerOpened] = useState(false)
  const [workersCheked, setWorkersChecked] = useState([])

  const onWorkerClicked = useCallback(({ target }) => {
    const { nodeName, title } = target
    if(nodeName === 'TD' && title !== 'id') {
      const newWorkerSelected = myWorkers.find(row => row[title] === target.textContent)
      if(newWorkerSelected !== workerSelected) {
        setWorkerSelected(newWorkerSelected)
        setProfileWorkerOpened(true)
      }
    }
  }, [])

  const onCheckWorker = useCallback(({ target }) => {
    const { name, checked, value } = target
      if(name === 'checkAll') {
        return setWorkersChecked(checked ? workersCheked.concat(myWorkers.map(worker => worker.name)) : [])
      }
      setWorkersChecked(checked ? workersCheked.concat(value) : workersCheked.filter(val => val !== value))
  }, [workersCheked, myWorkers])

  const onFilterChange = useCallback(({ target }) => {
    const { name, value } = target || {}
    if(name) {
      setFilters({ ...filters, [name]: value })
    }}, [filters])

  return (
    <Grid container spacing={2} >
      <Grid item xs={workerProfileOpened ? 9 : 12} classes={{ root: styles.tableContainer }}>
        <Paper className={styles.paper}>
          <div className={styles.filters}>
            <div className={styles.filterAction}>
              <SearchBar onSearch={onFilterChange} value={filters.search}/>
              <div className={styles.action}>
                <Button
                  color='primary'
                  variant={filters.checked ? 'contained' : 'outlined'}
                  onClick={() => onFilterChange({ target: { name: 'checked', value: !filters.checked }})}
                >
                  <span name='checked' value={!filters.checked}>Checked</span>
                </Button>
              </div>
            </div>
            <div className={styles.saveActions}>
              <Button color='primary' variant='contained'>
                Download
              </Button>
              <div className={styles.action}>
                <Button color='primary' variant='contained'>
                  Save List
                </Button>
              </div>
            </div>
          </div>
          <TableContainer className={styles.root}>
            <Table stickyHeader aria-label="sticky table" onClick={onWorkerClicked}>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        ...(column.width ? { width: column.width } : {})}}
                    >
                      {
                        column.id === 'id'
                          ? <Checkbox onChange={onCheckWorker} name='checkAll' />
                          : column.label
                      }
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredWorkers({ filters, workers: myWorkers, workersCheked }).map((row) => {
                  return (
                    <TableRow key={row.id} hover tabIndex={-1}>
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align} title={column.id}>
                            {
                              column.id === 'id'
                                ? <Checkbox onChange={onCheckWorker} value={row.name} checked={workersCheked.includes(row.name)}/>
                                : Array.isArray(value) ? value.map((val, index) => <div key={index}>{val}</div>) : value
                            }
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
      {
        workerProfileOpened &&
          <Grid item xs={3}>
            <UserProfile user={workerSelected} onClose={setProfileWorkerOpened}/>
          </Grid>
      }
    </Grid>
  )
}

export default Workers
