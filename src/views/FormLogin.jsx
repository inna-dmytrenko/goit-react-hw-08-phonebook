import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../redux/auth'

export default function FormLogin() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('inna@i.ua')
  const [password, setPassword] = useState('qwerty1Q')
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
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
        <button type="submit">Log in</button>
      </form>
      {/* <ToastContainer /> */}
    </div>
  )
}
