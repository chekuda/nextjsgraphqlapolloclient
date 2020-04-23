import React from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search'

import styles from './SearchBar.module.css'

const SearchBar = ({ onSearch, value = '', name = 'search' }) =>
  <div className={styles.container}>
    <div className={styles.searchIcon}>
      <SearchIcon style={{ fontSize: 20 }}/>
    </div>
    <div className={styles.searchinputcontainer}>
      <input
        id='standard-search'
        className={styles.searchinput}
        name={name}
        label='Search field'
        type='search'
        placeholder='Search'
        value={value}
        onChange={onSearch}
        autoComplete='off'
      />
    </div>
  </div>

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string
}

export default SearchBar
