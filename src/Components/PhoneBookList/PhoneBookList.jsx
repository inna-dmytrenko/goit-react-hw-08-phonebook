// import { useSelector } from 'react-redux'

// import Spinner from '../Loader/Loader'
import PhoneBookEditor from '../PhoneBookEditor/PhoneBookEditor'
// import PhoneBook from '../PhoneBook/PhoneBook'
// import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter'
// import filterContacts from '../../helpers/FilterContacts'
// import { Container, Title } from './PhoneBookList.styled'
// import { useGetContactsQuery } from '../../redux/phoneBook-api'
// import { getFilter } from '../../redux/contacts-selector'

const PhoneBookList = () => {
//   const filter = useSelector(getFilter)

//   const { data, error, isFetching } = useGetContactsQuery()

  return (
    <div>
      <PhoneBookEditor />
      <title>CONTACTS</title>
      {/* {data && <PhoneBookFilter />} */}
      <ul>
        {/* {error ? (
          <>Oh no, there was an error</>
        ) : isFetching ? (
        //   <Spinner />
        ) : data ? (
          filterContacts(data, filter).map((contact) => (
            <li key={contact.id}>
              <PhoneBook {...contact} />
            </li>
          ))
        ) : ( */}
        <li>No contacts</li>
        {/* )} */}
      </ul>
    </div>
  )
}
export default PhoneBookList
