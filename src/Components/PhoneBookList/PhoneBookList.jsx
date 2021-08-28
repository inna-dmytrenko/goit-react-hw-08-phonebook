import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// import Spinner from '../Loader/Loader'
import PhoneBookEditor from '../PhoneBookEditor/PhoneBookEditor'
import PhoneBook from '../PhoneBook/PhoneBook'
import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter'
import {filterContacts} from '../../helpers/FilterContacts'
import { fetchContacts } from '../../redux/contacts/contacts-operations.js';
import contactsSelectors from '../../redux/contacts/contacts-selectors'
const PhoneBookList = () => {
  const filter = useSelector(contactsSelectors.getFilter)
console.log(filter)

  const dispatch = useDispatch()
  const data = useSelector(contactsSelectors.getContacts)
  console.log(data)
 
  useEffect(() => { dispatch(fetchContacts()) },[dispatch])
  return (
    <div>
      <PhoneBookEditor />
      <title>CONTACTS</title>
      {data && <PhoneBookFilter />}
      <ul>
        { data ? (
          filterContacts(data, filter).map((contact) => (
            <li key={contact.id}>
              <PhoneBook {...contact}/>
            </li>
          ))
        ) : (
        <li>No contacts</li>
        )} 
      </ul>
    </div>
  )
}
export default PhoneBookList
