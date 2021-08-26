import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../redux/auth'

export default function FormRegister() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
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
          <label htmlFor="">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            required
            placeholder="Search password"
            type="password"
            name="password"
            value={password}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Пароль должен состоять минимум из восьми символов, по крайней мере одна буква и одно число"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sing up</button>
      </form>
      {/* <ToastContainer /> */}
    </div>
  )
}
