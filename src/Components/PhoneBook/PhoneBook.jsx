import { BsTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
// import { Frame } from './PhoneBook.styled'
import { deleteContacts } from '../../redux/contacts/contacts-operations'

const PhoneBook = ({ name, number, id }) => {
  
  //   const [deleteContact] = useDeleteContactMutation()
const dispatch= useDispatch()
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      
      <span onClick={() => dispatch(deleteContacts(id))}>
        <BsTrashFill />
      </span>
    </div>
  )
}
export default PhoneBook
