import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {addContacts} from '../../redux/contacts/contacts-operations'
import contactsSelectors from '../../redux/contacts/contacts-selectors'

function PhoneBookEditor() {

  const dispatch = useDispatch()
  const data = useSelector(contactsSelectors.getContacts)

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const resetForm = () => {
    setName('');
    setNumber('');
    setEmail('')
  }
  const handleChange = ({ target: { name, value } }) => {

     
    switch (name) {
      case 'name':
        return setName(value)
      case 'number':
        return setNumber(value)
      case 'email':
        return setEmail(value)
      default:
        return
    }
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
if (
      data.some((el) => el.name === name) ||
      data.some((el) => el.number === number) ||
      data.some((el) => el.email === email)
    ) {
      resetForm();
      return toast(`${name} is already in contacts`)
    }
    dispatch(addContacts({ name, number, email }));
    resetForm();
    // setForm(formInitialState)
    console.log({name, number, email})
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            required
            placeholder="Search name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Search number"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" >
          Add contact
        </button>
        {/* <button type="submit">Add contact</button> */}
      </form>
      <ToastContainer />
    </div>
  )
}

export default PhoneBookEditor