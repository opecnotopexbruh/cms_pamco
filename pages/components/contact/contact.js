import React from 'react'
import ListItem from './listitem'
import Pagination from '../pagination'
import SearchContact from './searchContact'


function Contact() {
  
  return (
    <div className='flex flex-col '>
        <SearchContact/>

        {/* Listing all incoming contact */}
        <ListItem />

        <Pagination/>
    </div>
  )
}

export default Contact