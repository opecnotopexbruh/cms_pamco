import React from 'react'
import SearchJob from './searchJob'
import ListItem from './listitemJob'
import Pagination from '../pagination'

function Job() {
  return (
    <div>
      <SearchJob/>
      <ListItem />
      <Pagination/>
    </div>
  )
}

export default Job