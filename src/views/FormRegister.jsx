// import 'react-toastify/dist/ReactToastify.css'
// import { toast, ToastContainer } from 'react-toastify'
// import { useState } from 'react'
// import './PhoneBookForm.styled.js'
// import { Form, Input, Label, Button, App } from './PhoneBookForm.styled'
// import {
//   useGetContactsQuery,
//   useAddContactMutation,
// } from '../../redux/phoneBook-api'
export default function FormRegister() {
  //   const formInitialState = {
  //     name: '',
  //     number: '',
  //     email: '',
  //   }
  //   const { data } = useGetContactsQuery()

  //   const [addContact] = useAddContactMutation()

  //   const [form, setForm] = useState(formInitialState)

  //   const inputHandler = (e) => {
  //     const name = e.target.name

  //     const value = e.target.value
  //     setForm({ ...form, [name]: value })
  //   }
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     if (
  //       data.some((el) => el.name === name) ||
  //       data.some((el) => el.number === number) ||
  //       data.some((el) => el.email === email)
  //     ) {
  //       setForm(formInitialState)
  //       return toast(`${name} is already in contacts`)
  //     }
  //     addContact({ name, number, email })

  //     setForm(formInitialState)
  //   }
  //   const { name, number, email } = form
  return (
    <div>
      <form
      //   onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="">Name</label>
          <input
            required
            placeholder="Search name"
            type="text"
            name="name"
            // value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // onChange={inputHandler}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            name="email"
            // value={email}
            // onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            required
            placeholder="Search password"
            type="text"
            name="password"
            // value={name}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Пароль должен состоять минимум из восьми символов, по крайней мере одна буква и одно число"
            // onChange={inputHandler}
          />
        </div>
        <button type="submit">Sing up</button>
      </form>
      {/* <ToastContainer /> */}
    </div>
  )
}
