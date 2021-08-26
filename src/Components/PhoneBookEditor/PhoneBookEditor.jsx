import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import contactsOperations from '../../redux/contacts/contacts-operations'
import { connect } from 'react-redux'
// import './PhoneBookForm.styled.js'
// import { Form, Input, Label, Button, App } from './PhoneBookForm.styled'
// import {
//   useGetContactsQuery,
//   useAddContactMutation,
// } from '../../redux/phoneBook-api'
function PhoneBookEditor() {
  const formInitialState = {
    name: '',
    number: '',
    email: '',
  }
  // const { data } = useGetContactsQuery()

  // const [addContact] = useAddContactMutation()

  const [form, setForm] = useState(formInitialState)

  const handleChange = (e) => {
    const name = e.target.name

    const value = e.target.value
    setForm({ ...form, [name]: value })
    console.log('handleChange')
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setForm(formInitialState)
    console.log('handleSubmit')
  }

  const { name, number, email } = form
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
        <button type="submit">Add contact</button>
      </form>
      <ToastContainer />
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(contactsOperations.addContact(text)),
})
export default connect(null, mapDispatchToProps)(PhoneBookEditor)
