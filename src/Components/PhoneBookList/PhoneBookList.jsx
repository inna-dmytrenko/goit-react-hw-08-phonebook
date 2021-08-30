import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './PhoneBookList.module.css'

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
    <div  className={styles.grid}>

    <Grid item xs={12} sm={4} className={styles.grid}>
    <Box bgcolor="success.main" color="success.contrastText" p={2}  >
      <PhoneBookEditor />
          <title>CONTACTS</title>
          
    {data.length > 0 && <PhoneBookFilter />}
      <ul>
        { data.length > 0 ? (
          filterContacts(data, filter).map((contact) => (
            <li key={contact.id}>
              <PhoneBook {...contact}/>
            </li>
          ))
        ) : (
        <li>No contacts</li>
        )} 
          </ul>
            
      </Box>
      </Grid>
    </div>
  )
}
export default PhoneBookList
