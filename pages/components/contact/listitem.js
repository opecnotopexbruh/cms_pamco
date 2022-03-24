import {useState, useEffect} from 'react'
import Item from './item';
import contact_data from '../../../data/contact_data.json'


function ListItem() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(contact_data)
  }, [])

  return (
    <div className=" mt-24">
        <table className='w-[160%] ml-4'>
            <tr className=' h-10 border-2'>
                <th colSpan="1" >No.</th>
                <th colSpan="1">ชื่อผู่ติดต่อ</th>
                <th colSpan="1">หัวข้อ</th>
                <th colSpan="1">วันที่ติดต่อ</th>
                <th colSpan="2"></th>
            </tr>
            <hr className='h-5'/>
            {
              contacts.map(contact=>(
                <Item key={contact.id} id={contact.id} name={contact.name} no={contact.no} createAt={contact.createAt} topic={contact.topic} {...contact}/>
              ))
            }
        </table>
    </div>
  )
}

export default ListItem