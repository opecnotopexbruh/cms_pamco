import React from 'react'
import ListItem from './listitem'
import SearchContact from './searchContact'


function Contact() {
  
  return (
    <div className='flex flex-col '>
        <SearchContact/>

        {/* Listing all incoming contact */}
        <ListItem />
    </div>
  )
}

export default Contact